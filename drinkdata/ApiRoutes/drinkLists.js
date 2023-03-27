import express from 'express'
import { createList, deleteList, getListContent, getListDrinks, updateList } from '../RoutesController/lists.js'

const router = express.Router();

router.post("/", createList);

router.get("/:listId", getListContent);
router.put("/:listId", updateList);
router.delete("/:listId", deleteList);
export default router;