import express from 'express'
import { createList, deleteList, getAllList, getListContent, updateList, getListDrinks } from '../RoutesController/lists.js'
import { verifyAdmin } from '../JWT_Token.js';

const router = express.Router();

router.post("/", createList);
router.get("/", getAllList);
router.get("/:listName", getListContent);
router.put("/:listId", verifyAdmin, updateList);
router.delete("/:listId", verifyAdmin, deleteList);
router.get("/list/:listName", getListDrinks);

export default router;