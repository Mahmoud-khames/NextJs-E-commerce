import React from "react";
import CartItems from "./_component/CartItems";
import Link from "@/components/link";
import Trans from "@/components/trans";
import { getCurrentLocale } from "@/lib/getCurrentLocale";



export default async function CartPage() {
  const t = await Trans()
  const {navigation,cart,common} = t
  const locale = await getCurrentLocale()
  return (
    <div >
      <div className="flex justify-start items-start py-10 text-gray-600 gap-4">
          <Link href={`/${locale}`} className="text-gray-600">
          {navigation.home}
        </Link>
        /
        <Link href={`/${locale}/cart`} className="text-black">
          {navigation.cart}
        </Link>
      </div>
      <div className="flex flex-col gap-4 mb-10">
        <CartItems translations={{ cart, common }} locale={locale} />
      </div>
    </div>
  );
}
