// app.js
import express from 'express';
import purchaseRoutes from './routes/purchaseRoutes.js';
import cors from "cors";  
 

const app = express();
app.use(cors({ origin: '*' }));
// Configurar middlewares
app.use(express.json());

// Configurar rutas
app.use('/purchases', purchaseRoutes);
 

export default app 