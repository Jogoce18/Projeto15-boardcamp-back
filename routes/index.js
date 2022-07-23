import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import gamesRouter from "./gameRouter.js";
import customersRouter from "./customerRouter.js";
import rentalsRouter from "./rentalsRouter.js";
const router = Router();
router.use(categoryRouter); // create/read
router.use(gamesRouter); // create/read
router.use(customersRouter); // create/read/update
router.use(rentalsRouter); // create/read/delete

export default router;