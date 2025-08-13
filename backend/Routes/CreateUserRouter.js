import express from "express";
import { CreateUser } from "../controllers/CreateUser.js";
const router = express.Router();
router.get('/CreateUser', CreateUser);
export default router;