import Link from "@/components/link";

import React from "react";
import CheckoutForm from "./_component/CheckoutForm";
import Payment from "./_component/Payment";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { Button } from "@/components/ui/button";

export default async function page() {
    const locale = await getCurrentLocale();
    const { t } = await getTrans(locale); 
  return (
    <div>
      <div className="flex justify-start items-start py-10 text-gray-600 gap-4">
        <Link href="/" className="text-gray-600">
              {t.navigation.home}
        </Link>
        /
        <Link href="/cart" className="text-black">
            {t.navigation.cart}
        </Link>
        /
        <Link href="/checkout" className="text-black">
          {t.navigation.checkout}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
      <CheckoutForm t={t} locale={locale} />
        {/* payment */}
        <Payment trans={t} locale={locale} />
      </div>
      <Button
          variant="default"
          className="w-[250px] md:w-[150px] h-[56px] cursor-pointer bg-secondary hover:bg-destructive mb-3 hover:text-white transition-all duration-300"
        >
          {t.checkout.placeOrder}
        </Button>
    </div>
  );
}
