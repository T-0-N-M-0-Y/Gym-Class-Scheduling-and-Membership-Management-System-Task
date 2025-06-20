import express from 'express';
import { authenticate } from '../../middleWares/authMiddleware';
import { authorizeRoles } from '../../middleWares/roleMiddleware';
import { ClassController } from './classController';

const router = express.Router();

router.post(
  '/add-class',
  authenticate,
  authorizeRoles('admin'),
  ClassController.createClass);

router.get('/all-classes', ClassController.getAllClasses);

export const ClassRoutes = router;
