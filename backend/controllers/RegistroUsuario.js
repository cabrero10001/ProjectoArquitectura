import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const RegistroUsuario = async (req, res) => {
    const data = req.body;
    try {
        const verificacion = await prisma.user.findMany({
            where: { numeroDocumento: data.numeroDocumento }
        })
        if (verificacion.length > 0) {
            console.log("El usuario ya esta registrado en la base de datos")
            return res.status(409).json({mensaje : "El usuario ya existe en la base de datos"})
        } else {
            const contraseñaHasheada = await bcrypt.hash(data.password, 10)
            const EnvioFormulario = await prisma.user.create({
                    data:{
                        Nombre: data.Nombre,
                        Apellido: data.Apellido,
                        userName: data.userName,
                        email: data.email,
                        password: contraseñaHasheada,
                        numeroDocumento: data.numeroDocumento
                    }
                });
                console.log("Registro de usuario exitoso");
                return res.status(200).json({
                    mensaje: "Datos obtenidos correctamente",
                    resultado: EnvioFormulario
                });
        }
    }
    catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
}