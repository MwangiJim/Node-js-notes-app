import express from 'express'
import { createNotes, deleteNote, getNotes, searchNotes, updateNotes } from '../controllers/NotesController.js';

const router = express.Router();

router.post('/createNote',createNotes);

router.get('/getNotes',getNotes);

router.put('/updateNotes/:id',updateNotes);

router.delete('/deleteNote/:id',deleteNote);

router.get('/searchNotes',searchNotes);
 
router.all("*",(req,res)=>{
    res.status(404).json({"message":"Page not Found"})
})

export default router;