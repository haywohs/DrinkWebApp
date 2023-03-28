import express from 'express'
import { getUser, updateUser, deleteUser, getAllUser } from '../RoutesController/users.js';
import { verifyUser, verifyAdmin } from '../JWT_Token.js';


const router = express.Router();

router.get("/:userId", verifyUser, verifyAdmin, getUser);
router.put("/:userId", verifyUser, verifyAdmin, updateUser);
router.delete("/:userId", verifyUser, verifyAdmin, deleteUser);
router.get("/", verifyAdmin, getAllUser);

export default router;