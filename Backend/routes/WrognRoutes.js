import express from "express";

import { postProducts,getProducts ,deleteProducts } from "../controllers/WrognControllers.js";

const router = express.Router();

router.post("/",postProducts);

router.get("/",getProducts);

router.delete("/:productId", deleteProducts);

export default router;
