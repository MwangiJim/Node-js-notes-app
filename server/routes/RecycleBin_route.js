import express from 'express'
import { createDeletedNotes, getDeletedNotes } from '../controllers/RecycleBinController.js';

const router  = express.Router();

router.post('/createRecycleBin',createDeletedNotes)

router.get('/getDeletedNotes',getDeletedNotes);


export default router;