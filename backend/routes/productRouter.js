const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.Controller");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../public/uploads/products");
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure folder exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", authMiddleware, productController.getAllProduct);
router.get("/:slug", authMiddleware, productController.getProductBySlug); // Adjusted to :id
router.post(
  "/", 
  authMiddleware,
  isAdmin,
  upload.any(), // Supports both productImage and productImages
  productController.createProduct
);
router.put(
  "/:slug",
  authMiddleware,
  isAdmin,
  upload.any(),
  productController.editProduct
);
router.delete(
  "/:slug",
  authMiddleware,
  isAdmin,
  productController.deleteProduct
);
router.get(
  "/category/:slug",
  authMiddleware,
  productController.getProductByCategory
);
router.get("/search/:slug", authMiddleware, productController.searchProduct);
router.get("/price/:price", authMiddleware, productController.getProductByPrice);

module.exports = router;