"use client";

import ProductCard from "@/components/ProductCard";
import { useAppSelector } from "@/redux/hooks";
import { IProduct } from "@/types/type";
import React from "react";

export default function ProductItems({
  t,
  locale,
}: {
  t: any;
  locale: string;
}) {
  const product = useAppSelector((state) => state.products.products);
  return (
    <>
      {product.map((product : IProduct) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}
