import express from "express";
import { CreateNote } from "../controllers/CreateNote.js";
const router = express.Router();
router.post('/CreateNote', CreateNote);
export default router;