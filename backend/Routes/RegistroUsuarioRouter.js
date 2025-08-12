import express from "express";
import { RegistroUsuario } from "../controllers/RegistroUsuario.js";

const router = express.Router();

router.post('/Registro', RegistroUsuario);

export default router;