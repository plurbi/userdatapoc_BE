// src/routes/authRoutes.js
import express from 'express';
import { add, get } from '../controllers/purchaseController.js';

const router = express.Router();

// Rutas para registrarse e iniciar sesión
router.post('/', add);
router.get('/', get);

 

export default router;
