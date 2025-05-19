import express from 'express';
import { createIpo, deleteIpo, getAllIpos, updateIpo } from '../controller/Ipo/ipoController.js';


const iporouter = express.Router();

iporouter.post('/ipos', createIpo);       // Create a new IPO
iporouter.get('/ipos', getAllIpos); 
iporouter.delete('/ipos/:id',deleteIpo)      // Get all IPOs
iporouter.put('/ipos/:id', updateIpo);

export default iporouter;
