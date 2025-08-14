import express from "express";
import { DeleteNotes } from "../controllers/DeleteNote.js";
const router = express.Router();
router.delete('/DeleteNotes/:id', DeleteNotes);
export default router;