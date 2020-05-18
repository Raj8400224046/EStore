const express = require("express");
const router = express.Router();

const { create, productById, read, remove, update } = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.get("/product/:productId", read);
router.param("product", userById);
router.param("productId", productById)
router.delete("/product/:productId/:userId", requireSignin, isAuth, isAdmin, remove)
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

module.exports = router;
