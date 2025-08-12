import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"
const prisma = new PrismaClient();
export const LoginUsuario = async (req, res) => {
    const data = req.body;
    try {
        console.log("Información recibida: ", data);
        const usuarioExistente = await prisma.user.findFirst({
            where: {userName: data.userName}
        })
        console.log("Usuarios encontrados:", usuarioExistente);
        if (!usuarioExistente) {
            return res.status(404).json({error: "El usuario no existe"})
        }
        const contraseña = await bcrypt.compare(data.password, usuarioExistente.password)
        if (!contraseña) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }
        return res.status(200).json({ mensaje: "Inicio de sesión exitoso", usuarioExistente });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}