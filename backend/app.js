import express from 'express'
import cors from 'cors'

import {
    Registro,
    Login
} from './Routes/router.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', Registro); //http://localhost:3000/api/Registro
app.use('/api', Login); //http://localhost:3000/api/Login


export default app;