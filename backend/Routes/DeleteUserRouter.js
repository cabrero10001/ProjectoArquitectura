import express from "express";
import { DeleteUser } from "../controllers/DeleteUser.js";
const router = express.Router();
router.get('/DeleteUser', DeleteUser);
export default router;