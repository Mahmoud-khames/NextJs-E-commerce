"use client";
import { Directions, Languages } from "@/constants/enums";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";

interface SliderProps {
  children: React.ReactNode;
}

export default function Slider({ children }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
const {locale} = useParams()
  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -270, behavior: "smooth" });
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 270, behavior: "smooth" });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <div className="relative w-full " dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
      <div
        ref={sliderRef}
        className="flex w-full gap-[30px] overflow-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide overflow-y-hidden"
        onScroll={checkScrollPosition}
      >
        {children}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        disabled={isAtStart}
        className={`absolute cursor-pointer ${locale === Languages.ARABIC ?"left-0 md:left-[-2%]" : "right-0 md:right-[-2%]" } top-1/2  md:-top-20 transform -translate-y-1/2 bg-gray-300 text-white  w-11 h-11 flex items-center justify-center rounded-full transition-opacity ${
          locale === Languages.ARABIC ? isAtStart ? "opacity-20" : "opacity-100 hover:bg-gray-400" : isAtStart ? "opacity-20" : "opacity-100 hover:bg-gray-400"
        }`}
      >
        <ArrowLeft className="w-6 h-6 text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        disabled={isAtEnd }
        className={`absolute cursor-pointer ${locale === Languages.ARABIC ?"right-0 md:right-[92%]" : "left-0 md:left-[92%]" }  top-1/2  md:-top-20   transform -translate-y-1/2 bg-gray-300 text-white w-11 h-11 flex items-center justify-center  rounded-full transition-opacity ${
          locale === Languages.ARABIC ? isAtEnd ? "opacity-20" : "opacity-100 hover:bg-gray-400" : isAtEnd ? "opacity-20" : "opacity-100 hover:bg-gray-400"
        }`}
      >
        <ArrowRight className="w-6 h-6  text-black" />
      </button>
    </div>
  );
}
