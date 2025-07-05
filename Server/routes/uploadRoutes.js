import express from "express";
import multer from "multer";
import PdfModel from "../models/PdfModel.js";
import protectRoute from "../utils/protectRoute.js";
import fs from "fs";
import path from "path";

const router = express.Router();

// Create a storage engine to save PDFs locally
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/pdfs/";
    fs.mkdirSync(uploadDir, { recursive: true }); // ensure directory exists
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Upload PDF locally
router.post("/upload", protectRoute, upload.single("pdf"), async (req, res) => {
  const { title } = req.body;

  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = req.file.path;

    // Save file info to DB
    const newPdf = new PdfModel({
      pdfUrl: filePath, // Local path
      title,
      originalName: req.file.originalname,
    });

    await newPdf.save();
    res.status(201).json({ message: "PDF uploaded successfully", pdf: newPdf });
  } catch (error) {
    console.error("Error uploading PDF:", error);
    res.status(500).json({ error: "Failed to upload PDF" });
  }
});

// Fetch all PDFs grouped by title
router.get("/all", async (req, res) => {
  try {
    const pdfs = await PdfModel.find();
    const groupedPdfs = pdfs.reduce((acc, pdf) => {
      if (!acc[pdf.title]) acc[pdf.title] = [];
      acc[pdf.title].push(pdf);
      return acc;
    }, {});
    res.json(groupedPdfs);
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    res.status(500).json({ error: "Failed to fetch PDFs" });
  }
});

// Delete PDF by ID and remove from local storage
router.delete("/:id", protectRoute, async (req, res) => {
  const { id } = req.params;

  try {
    const pdf = await PdfModel.findById(id);
    if (!pdf) return res.status(404).json({ message: "PDF not found" });

    // Delete file from local storage
    fs.unlink(pdf.pdfUrl, (err) => {
      if (err) console.warn("File may not exist or already deleted:", err);
    });

    await PdfModel.findByIdAndDelete(id);
    res.status(200).json({ message: "PDF deleted successfully" });
  } catch (error) {
    console.error("Error deleting PDF:", error);
    res.status(500).json({ error: "Failed to delete PDF" });
  }
});

export default router;
