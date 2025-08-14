import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNote = async (req, res) => {
    try {
        const getNotes = await prisma.notes.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.json(getNotes);
        console.log("Datos obtenidos");
        return res.status(200).json({
            mensaje: "Datos obtenidos correctamente",
            resultado: getNotes
            
        });
    }
    catch (error) {
        console.log("error en envío de formulario:", error);
        return res.status(500).json({ error: "Error interno del servidor al enviar los datos" });
    }
}