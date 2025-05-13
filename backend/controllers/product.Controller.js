const fs = require("fs");
const path = require("path");
const Product = require("../models/productModel");
const AppError = require("../utils/AppError");

class ProductController {
  // Delete image files from disk
  static deleteImages(images) {
    if (!Array.isArray(images)) return;

    images.forEach((image) => {
      try {
        const filePath = path.join(__dirname, "../public/uploads/products", image);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (error) {
        console.error(`Failed to delete image ${image}:`, error);
      }
    });
  }

  async getAllProduct(req, res, next) {
    try {
      const products = await Product.find({ isDeleted: false })
        .sort({ _id: -1 })
        .populate("productCategory", "name"); // Ensure related category data is fetched

      console.log("Fetched products count:", products.length);
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: products,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      next(new AppError("Failed to fetch products", 500));
    }
  }

  async getSingleProduct(req, res, next) {
    try {
      const { slug } = req.params;
      const product = await Product.findOne({ productSlug: slug });
      if (!product) return next(new AppError("Product not found", 404));

      res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: product,
      });
    } catch (error) {
      next(new AppError("Failed to fetch product", 500));
    }
  }

  async editProduct(req, res, next) {
    try {
      const { slug } = req.params;
      const {
        productName,
        productDescription,
        productPrice,
        oldProductPrice,
        productColors,
        productSizes,
        productCategory,
        productQuantity,
        productStatus,
        deletedImages = '[]',
      } = req.body;

      const product = await Product.findOne({ productSlug: slug });
      if (!product) return next(new AppError("Product not found", 404));

      const updateData = {
        productName: productName || product.productName,
        productDescription: productDescription || product.productDescription,
        productPrice: parseFloat(productPrice) || product.productPrice,
        oldProductPrice: parseFloat(oldProductPrice) || product.oldProductPrice || 0,
        productColors: productColors ? JSON.parse(productColors) : product.productColors,
        productSizes: productSizes ? JSON.parse(productSizes) : product.productSizes,
        productCategory: productCategory || product.productCategory,
        productQuantity: parseInt(productQuantity) || product.productQuantity,
        productStatus: productStatus === 'true' ? true : product.productStatus,
      };

      const deletedImagesArray = JSON.parse(deletedImages);
      if (deletedImagesArray.length > 0) {
        await Product.updateOne({ productSlug: slug }, {
          $pull: { productImages: { $in: deletedImagesArray } },
        });
        ProductController.deleteImages(deletedImagesArray);
      }

      if (req.files && req.files.length > 0) {
        const productImageFile = req.files.find(f => f.fieldname === "productImage");
        if (productImageFile) {
          updateData.productImage = `/backend/uploads/products/${productImageFile.filename}`;
        }

        const productImagesFiles = req.files.filter(f => f.fieldname === "productImages");
        if (productImagesFiles.length > 0) {
          const newImages = productImagesFiles.map(f => `/backend/uploads/products/${f.filename}`);
          await Product.updateOne({ productSlug: slug }, {
            $push: { productImages: { $each: newImages } },
          });
        }
      }

      const updatedProduct = await Product.findOneAndUpdate({ productSlug: slug }, updateData, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  }

  async createProduct(req, res, next) {
    try {
      const {
        productName,
        productDescription,
        productPrice,
        oldProductPrice,
        productColors,
        productSizes,
        productCategory,
        productQuantity,
        productStatus,
        productRating,
        productReviews,
      } = req.body;

      if (!productName?.trim()) return next(new AppError("Product name is required", 400));

      const baseSlug = productName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .substring(0, 50);

      let slug = baseSlug;
      let counter = 1;
      while (await Product.exists({ productSlug: slug })) {
        slug = `${baseSlug}-${counter++}`;
      }

      const productData = {
        productName,
        productDescription,
        productPrice,
        oldProductPrice: oldProductPrice || 0,
        productSlug: slug,
        productColors: productColors ? JSON.parse(productColors) : [],
        productSizes: productSizes ? JSON.parse(productSizes) : [],
        productCategory,
        productQuantity,
        productStatus: productStatus !== undefined ? productStatus : true,
        productRating: productRating || 0,
        productReviews: productReviews || [],
        productImage: "",
        productImages: [],
      };

      if (!req.files || req.files.length === 0) {
        return next(new AppError("Product image is required", 400));
      }

      const mainImage = req.files.find(f => f.fieldname === "productImage");
      if (!mainImage) return next(new AppError("Main product image is required", 400));
      productData.productImage = `/backend/uploads/products/${mainImage.filename}`;

      const otherImages = req.files.filter(f => f.fieldname === "productImages");
      productData.productImages = otherImages.map(f => `/backend/uploads/products/${f.filename}`);

      const newProduct = new Product(productData);
      await newProduct.save();

      res.status(200).json({
        success: true,
        message: "Product created successfully",
        product: newProduct,
      });
    } catch (error) {
      next(new AppError(`Failed to create product: ${error.message}`, 500));
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { slug } = req.params;
      const product = await Product.findOneAndUpdate({ productSlug: slug }, { isDeleted: true }, { new: true });

      if (!product) return next(new AppError("Product not found", 404));

      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        product,
      });
    } catch (error) {
      next(new AppError("Failed to delete product", 500));
    }
  }

  async getProductBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const product = await Product.findOne({ productSlug: slug });

      if (!product) return next(new AppError("Product not found", 404));

      res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: product,
      });
    } catch (error) {
      next(new AppError("Failed to fetch product", 500));
    }
  }

  async getProductByCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const products = await Product.find({ productCategory: categoryId });

      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        products,
      });
    } catch (error) {
      next(new AppError("Failed to fetch products", 500));
    }
  }

  async getProductByPrice(req, res, next) {
    try {
      const { price } = req.params;
      const products = await Product.find({ productPrice: price });

      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        products,
      });
    } catch (error) {
      next(new AppError("Failed to fetch products", 500));
    }
  }

  async searchProduct(req, res, next) {
    try {
      const { search } = req.params;
      const products = await Product.find({
        productName: { $regex: search, $options: "i" },
      });

      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        products,
      });
    } catch (error) {
      next(new AppError("Failed to search products", 500));
    }
  }

  async uploadProductImage(req, res, next) {
    try {
      const { productId } = req.params;
      if (!req.file) return next(new AppError("No image provided", 400));

      const imageUrl = `/backend/uploads/products/${req.file.filename}`;
      const product = await Product.findByIdAndUpdate(
        productId,
        { productImage: imageUrl },
        { new: true }
      );

      if (!product) return next(new AppError("Product not found", 404));

      res.status(200).json({
        success: true,
        message: "Product image uploaded successfully",
        product,
      });
    } catch (error) {
      next(new AppError("Failed to upload product image", 500));
    }
  }
}

module.exports = new ProductController();
