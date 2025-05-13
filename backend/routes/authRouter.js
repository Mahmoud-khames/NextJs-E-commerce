const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.Controller");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/isAdmin", authMiddleware, isAdmin, authController.isAdmin);
router.post("/allUser", authMiddleware, isAdmin, authController.allUser);
router.post("/signup", authController.postSignup);
router.post("/signin", authController.postSignin);  


module.exports = router;