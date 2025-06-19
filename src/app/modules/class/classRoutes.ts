import express from 'express';
import { authenticate } from '../../middleWares/authMiddleware';
import { authorizeRoles } from '../../middleWares/roleMiddleware';
import { ClassController } from './classController';

const router = express.Router();

router.post(
  '/',
  authenticate,
  authorizeRoles('admin'),
  ClassController.createClass);

router.get('/', ClassController.getAllClasses);

export const ClassRoutes = router;
