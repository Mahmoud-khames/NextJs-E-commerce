"use client";
import React, { useState, useEffect } from "react";
import { Categories } from "../../../data/data";
import Slider from "../../Slider";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesList() {
  const [isLoading, setIsLoading] = useState(true);

  // محاكاة تحميل البيانات
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-start w-full mb-10">
      <Slider>
        {isLoading ? (
          // عرض هياكل عظمية أثناء التحميل
          Array(8).fill(0).map((_, index) => (
            <div key={index} className="w-[170px] h-[145px]">
              <Skeleton className="w-full h-full rounded-lg" />
            </div>
          ))
        ) : (
          // عرض الفئات بعد التحميل
          Categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col text-black items-center justify-center gap-4 w-[170px] !h-[145px] border border-gray-200 rounded-lg hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer relative group"
            >
              <div className=" flex items-center justify-center !w-14 !h-14 !text-[36px]">
                {category.icon}
              </div>
              <h3 className="text-[16px] font-medium w-[170px] text-center">
                {category.name}
              </h3>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
