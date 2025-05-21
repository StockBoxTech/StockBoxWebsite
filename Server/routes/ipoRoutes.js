import express from 'express';
import { createIpo, deleteIpo, getAllIpos, updateIpo } from '../controller/Ipo/ipoController.js';
import { addIPOs, deleteIPOEntry, deleteIPOName, getIPOs } from '../controller/ipoController.js';
import { addIPOListing, deleteListingById, getIPOListings } from '../controller/ipoListingController.js';


const iporouter = express.Router();

iporouter.post('/ipos', createIpo);       // Create a new IPO
iporouter.get('/ipos', getAllIpos); 
iporouter.delete('/ipos/:id',deleteIpo)      // Get all IPOs
iporouter.put('/ipos/:id', updateIpo);

iporouter.post("/add", addIPOs);  //upcomming 
iporouter.get("/", getIPOs);
iporouter.delete("/delete/:name", deleteIPOName);
iporouter.delete("/entry/:id", deleteIPOEntry);


iporouter.post("/addlist", addIPOListing);
iporouter.get("/list", getIPOListings);

iporouter.delete("/entrylist/:id", deleteListingById);

export default iporouter;
