"use client";

import Slider from "../../Slider";
import ProductCard, { ProductCardSkeleton } from "../../ProductCard";
import { IProduct } from "@/types/type";
import Link from "@/components/link";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchProducts } from "@/redux/features/prodect/prodectSlice";
import { useEffect, useState } from "react";

export default function ProductListSales({ t, locale }: { t: any; locale: string }) {
  const products = useAppSelector((state) => state.products.products);
  const status = useAppSelector((state) => state.products.status);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchProducts()).unwrap();
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [dispatch]);

  return (
    <div className="flex flex-col items-start w-full">
      {/* Slider with Product Cards */}
      <Slider>
        {isLoading || status === "loading" ? (
          // عرض هياكل عظمية أثناء التحميل
          Array(8).fill(0).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          // عرض المنتجات بعد التحميل
          products.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </Slider>

      {/* View All Products Button */}
      <div className="flex justify-center w-full mt-14">
        <Link
          href={`/${locale}/products`}
          className="bg-secondary text-white px-8 py-3 rounded text-[14px] md:text-[16px] font-medium hover:bg-[#c13535] transition-colors cursor-pointer"
        >
          {t.home.viewAll}
        </Link>
      </div>
    </div>
  );
}
