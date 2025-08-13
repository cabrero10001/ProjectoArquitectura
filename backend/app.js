import express from 'express'
import cors from 'cors'

import {
    Registro,
    Login,
    Create,
    Read,
    Update,
    Delete
} from './Routes/router.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', Registro); //http://localhost:3000/api/Registro
app.use('/api', Login); //http://localhost:3000/api/Login
app.use('/api', Create); //http://localhost:3000/api/CreateUser
app.use('/api', Read); //http://localhost:3000/api/ReadUser
app.use('/api', Update); //http://localhost:3000/api/UpdateUser
app.use('/api', Delete); //http://localhost:3000/api/DeleteUser

export default app;