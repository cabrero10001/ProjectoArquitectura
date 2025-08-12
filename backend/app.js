import express from 'express'
import cors from 'cors'

import {
    RegistroUsuario,
    LoginUsuario
} from './Routes/router.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', RegistroUsuario); //http://localhost:3000/api/Registro
app.use('/api', LoginUsuario); //http://localhost:3000/api/Login


export default app;