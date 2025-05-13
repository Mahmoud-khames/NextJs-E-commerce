
import Link from "@/components/link";
import ProductCard from "@/components/ProductCard";
import Trans from "@/components/trans";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import gamingProducts from "@/data/data";

import React from "react";
import ProductItems from "./_components/productItems";

export default async function page() {
  const t = await Trans()
  const {navigation,products,common} = t
  const locale = await getCurrentLocale()
  return (
    <>
      <div className="">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-600">
          <div className="flex justify-start items-start gap-2">
            <Link href={`/${locale}`} className="text-gray-600 hover:underline">
              {navigation.home}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/products`} className="text-black hover:underline">
              {navigation.products}
            </Link>
          </div>
        </div>

        Our Story Section
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Filter  const and content between the filter and the product list */}
          <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_btn_dark_green/50">
            <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 scrollbar-hide border-r border-r-shop_btn_dark_green/50 "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            >
              <div className="w-full bg-white p-5">
                <h2 className="text-base font-black">Product Categories</h2>
                <div
                  role="radiogroup"
                  aria-required="false"
                  dir="ltr"
                  className="grid gap-2 mt-2 space-y-1"
                  tabIndex={0}
                  style={{ outline: "none" }}
                >
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="kitchen-appliances"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="kitchen-appliances"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="kitchen-appliances"
                    >
                      Kitchen Appliances
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="television"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="television"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="television"
                    >
                      Television
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="refrigerators"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="refrigerators"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="refrigerators"
                    >
                      Refrigerators
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="washing-machine"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="washing-machine"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="washing-machine"
                    >
                      Washing Machine
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="tablets"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="tablets"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="tablets"
                    >
                      Tablets
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="gadget-accessories"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="gadget-accessories"
                              tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="gadget-accessories"
                    >
                      gadget accessories
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="appliances"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="appliances"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="appliances"
                    >
                      Appliances
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="air-conditioners"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="air-conditioners"
                      tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="air-conditioners"
                    >
                      Air Conditioners
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="airbuds"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="airbuds"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="airbuds"
                    >
                      Airbuds
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="cameras"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="cameras"
                          tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="cameras"
                    >
                      Cameras
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="smartphones"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="smartphones"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="smartphones"
                    >
                      Smartphones
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="mobiles"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="mobiles"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="mobiles"
                    >
                      Mobiles
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="smart-watches"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="smart-watches"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="smart-watches"
                    >
                      Smart Watches
                    </label>
                  </div>
                </div>
              </div>
              {/* price filter */}
              <div className="w-full bg-white p-5">
                <h2 className="text-base font-black">Price</h2>
                <div
                  role="radiogroup"
                  aria-required="false"
                  dir="ltr"
                  className="grid gap-2 mt-2 space-y-1"
                  tabIndex={0}
                  style={{ outline: "none" }}
                >
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="0-100"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="0-100"
                              tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="0-100"
                    >
                      Under $100
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="100-200"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="100-200"
                        tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="100-200"
                    >
                      $100 - $200
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="200-300"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="200-300"
                      tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="200-300"
                    >
                      $200 - $300
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="300-500"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="300-500"
                      tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="300-500"
                    >
                      $300 - $500
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 hover:cursor-pointer">
                    <button
                      type="button"
                      role="radio"
                      aria-checked="false"
                      data-state="unchecked"
                      value="500-10000"
                      className="aspect-square h-4 w-4 border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-sm"
                      id="500-10000"
                      tabIndex={-1}
                      data-radix-collection-item=""
                    ></button>
                    <label
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
                      htmlFor="500-10000"
                    >
                      Over $500
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* product list */}
            <div className="flex-1 pt-5">
              <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scroll-m-0"
              style={{
               
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 justify-items-center">
                <ProductItems t={t} locale={locale}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
