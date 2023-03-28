import express from 'express'
import { createList, deleteList, getListContent, getListDrinks, updateList } from '../RoutesController/lists.js'
import { verifyAdmin } from '../JWT_Token.js';

const router = express.Router();

router.post("/", createList);

router.get("/:listId", verifyAdmin, getListContent);
router.put("/:listId", verifyAdmin, updateList);
router.delete("/:listId", verifyAdmin, deleteList);
export default router;