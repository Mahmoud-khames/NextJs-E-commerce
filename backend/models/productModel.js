const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      maxlength: 32,
    },
    productDescription: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    oldProductPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    productImage: {
      type: String,
      default: "",
    },
    productSlug: {
      type: String,
      required: [true, 'حقل slug مطلوب'],
      unique: true,
      index: true,
      validate: {
        validator: function(v) {
          return /^[a-z0-9\-]+$/.test(v);
        },
        message: 'صيغة slug غير صالحة'
      },
      immutable: true
    },
    productImages: [
      {
        type: String,
        required: true,
      },
    ],
    productColors: [
      {
        type: String,
        required: true,
      },
    ],
    productSizes: [
      {
        type: String,

        required: true,
      },
    ],
    productCategory: {
      type: ObjectId,
      ref: "Categories",
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    productStatus: {
      type: Boolean,
      default: true,
    },
    productRating: {
      type: Number,
      default: 0,
      max: 5,
      min: 0,
    },
    productReviews: [
      {
        type: ObjectId,
        ref: "Reviews", // Ensure the correct model name is used here
        
      },
      { timestamps: true },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    }, 
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
