const express = require("express");
const router = express.Router();

const { requireSignin } = require("../controllers/auth");

const { userById } = require("../controllers/user");
const { isAuth,isAdmin } = require('../controllers/auth')
router.get("/secret/:userId", requireSignin, isAuth,isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});
router.param("userId", userById);
module.exports = router;