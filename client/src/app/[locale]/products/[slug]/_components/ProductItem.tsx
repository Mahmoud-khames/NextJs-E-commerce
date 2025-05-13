"use client";
import renderStars from "@/components/renderStars";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import Link from "@/components/link";
import AddToWishlist from "@/components/Wishlist/AddToWishList";
import AddToCart from "@/components/Cart/addToCart";

import { IProduct } from "@/types/type";
import { getProduct } from "@/server";
export default function ProductItem({ slug }: { slug: string }) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProduct = React.useCallback(() => {
    return getProduct(slug);
  }, [slug]);

  useEffect(() => {
    setIsLoading(true);
    fetchProduct().then((data) => {
      setProduct(data.data.data);
    });
    setIsLoading(false);
  }, [fetchProduct]);

  // State for selected color, size, and quantity
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product?.productColors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product?.productSizes?.[0] || null
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Handle quantity changes
  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  // If product is not found, show a fallback
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p>Product not found.</p>
      </div>
    );
  }
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
 

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-gray-600">
        <div className="flex justify-start items-center gap-2 text-xs sm:text-sm">
          <Link href="/" className="text-gray-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="text-gray-600 hover:underline">
            Products
          </Link>
          <span>/</span>
          <Link
            href={`/products/${slug}`}
            className="text-black hover:underline"
          >
            {product.productName}
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
        {/* Images Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-4 justify-items-center">
          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4  justify-items-center">
            {product.productImages?.map((image, index) => (
              <div
                key={index}
                className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] lg:w-[150px] lg:h-[120px] bg-gray-200 flex items-center justify-center rounded-md"
              >
                <Image
                  src={`${apiURL}${image}`}
                  key={index}
                  alt={`${product.productName} thumbnail ${index + 1}`}
                  width={100}
                  height={80}
                  className="object-contain w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] lg:w-[130px] lg:h-[110px]"
                />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[540px] bg-gray-200 flex items-center justify-center rounded-md">
            <Image
              src={`${apiURL}${product.productImage}`}
              alt={product.productName}
              width={300}
              height={200}
              className="object-contain w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] lg:w-[446px] lg:h-[315px] hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Product Name */}
          <h2 className="text-xl sm:text-2xl font-bold">
            {product.productName}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderStars(product.productRating || 0)}
            </div>
            <span className="text-gray-500 text-xs sm:text-sm">
              ({product.productReviews} Reviews)
            </span>
            <span className="text-green-600 text-xs sm:text-sm">In Stock</span>
          </div>

          {/* Price */}
          <p className="text-xl sm:text-2xl font-semibold">
            ${product.productPrice.toFixed(2)}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm">
            {product.productDescription}
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200"></div>

          {/* Colors */}
          <div className="flex items-center gap-3">
            <span className="text-black text-sm sm:text-base">Colours:</span>
            <div className="flex gap-2">
              {product.productColors?.map((color, index) => (
                <button
                  key={index}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 cursor-pointer ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-black text-sm sm:text-base">Size:</span>
            <div className="flex gap-2">
              {product.productSizes?.map((size, index) => (
                <button
                  key={index}
                  className={`px-2 py-1 sm:px-3 sm:py-1 border rounded-md text-xs sm:text-sm cursor-pointer ${
                    selectedSize === size
                      ? "border-secondary bg-secondary text-white"
                      : "border-gray-300"
                  } hover:bg-secondary hover:text-white transition-all duration-300`}
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity, Buy Now, and Wishlist */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                className="px-2 py-1 sm:px-3 sm:py-2 text-base sm:text-lg cursor-pointer hover:bg-secondary hover:text-white transition-all duration-300 rounded-l-md"
                onClick={() => handleQuantityChange(-1)}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                {quantity}
              </span>
              <button
                className="px-2 py-1 sm:px-3 sm:py-2 text-base sm:text-lg cursor-pointer hover:bg-secondary hover:text-white transition-all duration-300 rounded-r-md"
                onClick={() => handleQuantityChange(1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <div className="w-[120px] rounded-2xl h-10 bg-secondary text-white font-medium cursor-pointer">
              <AddToCart
                product={{
                  ...product,
                  oldProductPrice: Number(product.oldProductPrice),
                }}
                quantity={quantity}
              />
            </div>

            {/* Wishlist Heart */}
            <AddToWishlist product={product} />
          </div>

          {/* Free Delivery & Return Policy */}
          <div className="mt-4 border border-gray-300 rounded-md">
            <div className="p-4 flex items-center gap-3 border-b border-gray-300">
              <span className="text-xl sm:text-2xl">🚚</span>
              <div>
                <p className="text-xs sm:text-sm font-semibold">
                  Free Delivery
                </p>
                <p className="text-xs text-gray-600">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-3">
              <span className="text-xl sm:text-2xl">🔄</span>
              <div>
                <p className="text-xs sm:text-sm font-semibold">
                  Return Delivery
                </p>
                <p className="text-xs text-gray-600">
                  Free 30 Days Delivery Returns.{" "}
                  <a href="#" className="underline">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
