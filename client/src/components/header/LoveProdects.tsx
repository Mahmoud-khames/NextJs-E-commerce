"use client";

import { Heart } from "lucide-react";
import Link from "../link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectWishlistItems, fetchWishlistItems } from "@/redux/features/wishList/wishlistSlice";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function LoveProdects() {
  const { locale } = useParams();
  const wishlist = useAppSelector(selectWishlistItems);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [wishlistCount, setWishlistCount] = useState(0);
  
  // Update wishlist count whenever wishlist changes
  useEffect(() => {
    setWishlistCount(wishlist.length);
  }, [wishlist]);
  
  // Fetch wishlist items when component mounts or user changes
  useEffect(() => {
    // If user is logged in, fetch their wishlist from the server
    if (user) {
      dispatch(fetchWishlistItems());
    }
  }, [user, dispatch]);

  return (
    <Link href={`/${locale}/wishlist`} className="flex items-center justify-center relative cursor-pointer">
      <div className="absolute h-5 w-5 bg-secondary text-white rounded-full bottom-4 -right-3 flex items-center justify-center">
        {wishlistCount}
      </div>
      <Heart />
    </Link>
  );
}
