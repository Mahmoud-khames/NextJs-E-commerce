const reviewModel = require("../models/reviewsModel");
const AppError = require("../utils/AppError");
class ReviewController {
  async getAllReviews(req, res, next) {
    const reviews = await reviewModel.find({});
    if (reviews) {
      return res.json({ reviews });
    } else {
      return next(new AppError("Failed to get reviews", 500));
    }
  }

  async updateReviewByProductId(req, res) {
    const { productId } = req.params;
    const { rating, comment } = req.body;
    try {
      const review = await reviewModel.findByIdAndUpdate(productId, {
        rating,
        comment,
      });
      if (review) {
        return res.json({ success: "Review updated successfully" });
      } else {
        return next(new AppError("Failed to update review", 500));
      }
    } catch (error) {
      console.log(error);
      return next(new AppError("Failed to update review", 500));
    }
  }

  async createReview(req, res) {
    const { productId, userId, rating, comment } = req.body;
    try {
      const review = await reviewModel.create({
        productId,
        userId,
        rating,
        comment,
      });
      if (review) {
        return res.json({ success: "Review created successfully" });
      } else {
        return next(new AppError("Failed to create review", 500));
      }
    } catch (error) {
      console.log(error);
      return next(new AppError("Failed to create review", 500));
    }
  }
    async deleteReview(req, res, next ) {
    const { id } = req.params;
    try {
      const review = await reviewModel.findByIdAndDelete(id);
      if (review) {
        return res.json({ success: "Review deleted successfully" });
      } else {
        return next(new AppError("Failed to delete review", 500));
      }
    } catch (error) {
      console.log(error);
      return next(new AppError("Failed to delete review", 500));
    }
  }
  async getReviewsByProductId(req, res, next) {
    const { productId } = req.params;
    const reviews = await reviewModel.find({ productId });
    if (reviews) {
      return res.json({ reviews });
    } else {
      return next(new AppError("Failed to get reviews", 500));
    }
  }
  async uploadReviewImage(req, res, next) {
    const { productId } = req.params;
    const { image } = req.body;
    const review = await reviewModel.findByIdAndUpdate(productId, { image });
    try {
      if (review) {
        return res.json({ success: "Review image uploaded successfully" });
      } else {
        return next(new AppError("Failed to upload review image", 500));
      }
    } catch (error) {
      console.log(error);
      return next(new AppError("Failed to upload review image", 500));
    }
  }
}

const reviewController = new ReviewController();
module.exports = reviewController;
