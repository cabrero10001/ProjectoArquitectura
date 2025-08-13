import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ReadUser = async (req, res) => {
    const data = req.body;
    try {
        const infoUsers = await prisma.user.findFirst({
            where: {
                numeroDocumento: data.numeroDocumento
            },
            select:{
                Nombre: true,
                Apellido: true,
                userName: true,
                email: true,
                password: true,
                numeroDocumento: true
            }
        });
        console.log("Datos enviados");
        return res.status(200).json({
            mensaje: "Datos obtenidos correctamente",
            resultado: infoUsers
            
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}