import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateNote = async (req, res) => {
    const data = req.body;
    try {
        const CreacionNota = await prisma.notes.create({
                data:{
                    title: data.title,
                    content: data.content
                }
            });
            console.log("Almacenamiento exitoso");
            return res.status(200).json({
                mensaje: "Datos obtenidos correctamente",
                resultado: CreacionNota
            });
        }
    
    catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
}