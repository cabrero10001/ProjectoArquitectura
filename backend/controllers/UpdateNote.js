import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UpdateNotes = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, content} = req.body;

        const contenido = await prisma.notes.update({
            where:{id},
            data: {
                title,
                content
            },
        });
        res.json(UpdateNotes);
        console.log("Contenido Actualizado");
        return res.status(200).json({
            mensaje: "Datos actualizados correctamente",
            resultado: contenido
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}