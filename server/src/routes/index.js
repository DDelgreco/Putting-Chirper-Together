import { Router } from "express";
import chirpsRouter from "./chirps";
import mentionsRouter from "./mentions";
import singleChirpRouter from "./singleChirp";

let router = Router();

router.use("/chirps", chirpsRouter);
router.use("/mentions", mentionsRouter);
router.use("/chirps/:id", singleChirpRouter)
export default router;
