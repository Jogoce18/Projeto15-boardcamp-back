import { Router } from "express";
import categoryRouter from "./categoryRouter.js";


const router = Router();
router.use(categoryRouter); // create/read
//router.use(gamesRouter); // create/read
//router.use(customersRouter); // create/read/update
//router.use(rentalsRouter); // create/read/delete

export default router;