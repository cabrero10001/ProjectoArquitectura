import express from "express";
import { getNote } from '../controllers/getNote.js'
const router = express.Router();
router.get('/getNote', getNote);
export default router;