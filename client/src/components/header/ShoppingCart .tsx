"use client";

import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectCartItems, fetchCartItems } from "@/redux/features/cart/cartSlice";
import Link from "../link";
import { useParams } from "next/navigation";
import { getCartQuantity } from "@/lib/cart";
export default function ShoppingCartProduct() {
  const cartItems = useAppSelector(selectCartItems);
  const { user } = useAppSelector((state) => state.user);
  const { locale } = useParams();
  const dispatch = useAppDispatch();
  const [cartCount, setCartCount] = useState(0);
  
  // Use effect to update cart count whenever cartItems changes
  useEffect(() => {
    // Get the total quantity of items in the cart
    const newCount = getCartQuantity(cartItems);
    setCartCount(newCount);
  }, [cartItems]);
  
  // Fetch cart items when component mounts or user changes
  useEffect(() => {
    // If user is logged in, fetch their cart from the server
    if (user) {
      dispatch(fetchCartItems());
    }
  }, [user, dispatch]);

  return (
    <Link
      href={`/${locale}/cart`}
      className="flex items-center justify-center relative cursor-pointer"
    >
      <div className="absolute h-5 w-5 bg-secondary text-white rounded-full bottom-4 -right-3 flex items-center justify-center">
        {cartCount}
      </div>
      <ShoppingCart />
    </Link>
  );
}
