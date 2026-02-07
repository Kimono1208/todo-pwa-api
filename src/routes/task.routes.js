import { Router } from "express";
import {auth} from "../middleware/auth.js"
import {list, create,update,remove} from "../controller/task.controller.js"

const router = Router();
router.use(auth) 
router.get('/', list)
router.post('/', create)
router.put('/id', update) 
router.delete('/id', remove)
// router.post('/bulksynk', bulksynk)

export default router;