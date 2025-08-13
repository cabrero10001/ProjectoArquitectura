import express from "express";
import { ReadUser } from "../controllers/ReadUser.js";
const router = express.Router();
router.get('/ReadUser', ReadUser);
export default router;