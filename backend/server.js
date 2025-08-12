import app from './app.js';
import 'dotenv/config';


const PORT = process.env.PORT || 3000;


const startServer = async () => {
    try {
        console.log('Iniciando servidor...');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();