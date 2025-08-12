import express from "express";
import { LoginUsuario } from "../controllers/loginUsuario";

const router = express.Router();

router.post('/Login', LoginUsuario);

export default router;