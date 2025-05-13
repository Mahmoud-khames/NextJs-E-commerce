"use client";
import Link from "@/components/link";
import ProductCard, { ProductCardSkeleton } from "../../ProductCard";
import { IProduct } from "@/types/type";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchProducts } from "@/redux/features/prodect/prodectSlice";
import { useEffect, useState } from "react";

export default function OurProductList({ t, locale }: { t: any; locale: string }) {
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
    <div className="flex flex-col items-start w-full my-10">
      {/* Grid with Product Cards */}
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] justify-items-center">
        {isLoading || status === "loading" ? (
          // عرض هياكل عظمية أثناء التحميل
          Array(8).fill(0).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          // عرض المنتجات بعد التحميل
          products.slice(0, 8).map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>

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
