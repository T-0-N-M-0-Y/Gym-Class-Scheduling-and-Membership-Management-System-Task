import express from 'express'
import { UserControllers } from './userController';
import { authenticate } from '../../middleWares/authMiddleware';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);
router.get('/allUsers', UserControllers.getAllUsers);
router.get('/:userId', authenticate, UserControllers.getSingleUser);
router.patch('/update-user/:userId', authenticate, UserControllers.updateUser);

export const UserRoutes = router;