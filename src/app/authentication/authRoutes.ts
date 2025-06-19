import express from 'express';
import { AuthController } from './authController';

const router = express.Router();

router.post('/login', AuthController.login);

export const AuthRoutes = router;
