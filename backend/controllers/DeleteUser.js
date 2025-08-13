import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DeleteUser = async (req, res) => {
    const data = req.body;
    try {
        const Delete = await prisma.user.delete({
            where: {numeroDocumento: data.numeroDocumento}
        });
        console.log("Usuario eliminado");
        return res.status(200).json({
            mensaje: "Datos de usuario eliminado",
            resultado: Delete
            
        });
    }
    catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
}