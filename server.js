import colors from 'colors';  
import dotenv from 'dotenv';  
import express from 'express';
import pruebaRouter from './routes/pruebaRoutes.js';
import authRouter from './routes/authRouter.js';
import connectDB from './routes/config/db.js';

// Inicializar dotenv para cargar las variables de entorno desde un archivo .env
dotenv.config();

connectDB()

// Crear el objeto de la aplicación Express
const app = express();

//configurar app para que acepte bodys en json
app.use(express.json())

const PORT = process.env.PORT || 3005;  // Asegúrate de tener un puerto por defecto

app.use('/api/pruebas' , pruebaRouter)

app.use('/api/auth' , authRouter)

app.listen(PORT, () => {
    console.log(`Servidor ejecutado en el puerto ${PORT}`.bgGreen.red.bold);  
});
