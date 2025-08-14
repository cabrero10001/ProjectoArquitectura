import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DeleteNotes = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.notes.delete({
            where: { id }
        });
        res.status(204).send(); // 204 No Content
        console.log("Nota eliminada exitosamente");
        return res.status(200).json({
            mensaje: "Nota eliminada exitosamente",
            resultado: Delete
            
        });
    }
    catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
}