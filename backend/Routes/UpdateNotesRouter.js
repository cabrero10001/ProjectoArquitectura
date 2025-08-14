import express from "express";
import { UpdateNotes } from "../controllers/UpdateNote.js";
const router = express.Router();
router.put('/UpdateNotes/:id', UpdateNotes);
export default router;