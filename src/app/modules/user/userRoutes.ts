import express from 'express'
import { UserControllers } from './userController';

const router = express.Router();

router.post('/create-user', UserControllers.createUser); //create user routes
router.get('/allUsers', UserControllers.getAllUsers); //get all data from database routes
router.get('/:userId', UserControllers.getSingleUser); //get One data from database routes

export const UserRoutes = router;