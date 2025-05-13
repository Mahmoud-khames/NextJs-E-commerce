/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { addItemToCart, addToCartAsync } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProduct } from "@/types/type";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import getTrans from "@/lib/translation";

export default function AddToCart({
  product,
  quantity = 1,
  size,
  color
}: {
  product: IProduct;
  quantity?: number;
  size?: string;
  color?: string;
}) {
  const dispatch = useAppDispatch();
  const { locale } = useParams();
  const [translations, setTranslations] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    
    const fetchTranslations = async () => {
      try {
        const trans = await getTrans(locale as string);
        setTranslations(trans.t);
      } catch (error) {
        console.error("Error fetching translations:", error);
        setTranslations({ cart: { addToCart: "Add To Cart", addedToCart: "added to cart!" } });
      }
    };

    fetchTranslations();
  }, [locale]);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      // Use the async thunk if logged in
      dispatch(addToCartAsync({ 
        productId: product._id, 
        quantity, 
        size, 
        color,
        price: product.productPrice
      }));
      
    } else {
      // Use local state if not logged in
      dispatch(addItemToCart({ product, quantity, size, color }));
      toast.success(`${product.productName} (${quantity}) ${translations?.cart?.addedToCart || "added to cart!"}`);
    }
  };

  if (!translations) {
    return (
      <div className="flex items-center justify-center w-full h-full text-center text-white">
        <button
          disabled
          className="w-full h-full text-white cursor-not-allowed rounded-xl opacity-50"
        >
          Loading...
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className="w-full h-full text-white rounded-xl"
    >
      {translations?.cart?.addToCart || "Add To Cart"}
    </button>
  );
}
