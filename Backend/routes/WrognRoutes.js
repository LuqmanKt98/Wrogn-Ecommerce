import express from "express";

import { postProducts } from "../controllers/WrognControllers.js";

const router = express.Router();

router.post("/",postProducts);

// router.get("/",getProducts);

export default router;
