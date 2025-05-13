/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { UserRole, Routes } from "@/constants/enums";
import { logout } from "@/redux/features/user/userSlice";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { clearWishlist } from "@/redux/features/wishList/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";

interface UserProps {
  t: any;
  onLogout?: () => void;
}

export default function User({ t }: any) {
  const dispatch = useAppDispatch();
  const { locale } = useParams();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart()); // Clear the cart when logging out
    dispatch(clearWishlist()); // Clear the wishlist when logging out
    router.push(`/${locale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="bg-secondary rounded-full text-white w-8 h-8 flex items-center justify-center cursor-pointer"
          aria-label="User menu"
        >
          <User2 />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {user ? (
          <>
            <DropdownMenuItem onClick={() => router.push(`/${locale}/profile`)}>
              {t.profile}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              {t.logout}
            </DropdownMenuItem>
            {user?.role === UserRole.ADMIN && (
              <DropdownMenuItem
                onClick={() =>
                  router.push(`/${locale}/${Routes.ADMIN}/${Routes.DASHBOARD}`)
                }
              >
                {t.dashboard}
              </DropdownMenuItem>
            )}
          </>
        ) : (
          <>
            <DropdownMenuItem onClick={() => router.push(`/${locale}/login`)}>
              {t.login}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push(`/${locale}/register`)}>
              {t.register}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
