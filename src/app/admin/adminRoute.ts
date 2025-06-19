import express from 'express';
import { authenticate } from '../middleWares/authMiddleware';
import { authorizeRoles } from '../middleWares/roleMiddleware';
import { AdminController } from './adminController';

const router = express.Router();

router.patch(
    '/update-role/:userId',
    authenticate,
    authorizeRoles('admin'),
    AdminController.updateUserRole
);

export const AdminRoutes = router;
