import express from "express";
import { UpdateUser } from "../controllers/UpdateUser.js";
const router = express.Router();
router.get('/UpdateUser', UpdateUser);
export default router;