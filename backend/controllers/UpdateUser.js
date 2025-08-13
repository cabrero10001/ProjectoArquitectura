import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UpdateUser = async (req, res) => {
    const data = req.body;
    try {
        const Datos = await prisma.user.update({
            where:{numeroDocumento: data.numeroDocumento},
            data:{
                Nombre: data.Nombre,
                Apellido: data.Apellido,
                userName: data.userName,
                email: data.email,
                password: data.password,
                numeroDocumento: data.numeroDocumento
            }
        });
        console.log("Datos Actualizados");
        return res.status(200).json({
            mensaje: "Datos actualizados correctamente",
            resultado: Datos
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}