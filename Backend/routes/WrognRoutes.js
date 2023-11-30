import express from "express";
import { postProducts, getProducts, deleteProducts, fetchProduct , updateProduct} from "../controllers/WrognControllers.js";

const router = express.Router();

router.post("/", postProducts);
router.get("/", getProducts);
router.delete("/:productId", deleteProducts);
router.get("/:productId", fetchProduct);
router.put("/:productId",updateProduct)

export default router;
