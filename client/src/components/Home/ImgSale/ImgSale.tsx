"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getCustomizeImages } from "@/server"; // Import the API function to fetch images

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/pagination";

export default function ImgSale() {
  const [images, setImages] = useState<string[]>([]); // State to store fetched images
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"; // Base URL for image paths

  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        console.log("Fetching images for ImgSale from:", `${apiURL}/api/customize`);
        const response = await getCustomizeImages();
        console.log("ImgSale API Response:", response.data);
        if (response.data.success && response.data.images && response.data.images.length > 0) {
          const firstCustomize = response.data.images[0];
          const slideImages = firstCustomize.slideImage || [];
          setImages(slideImages);
        } else {
          console.warn("No images found in response, using fallback images.");
          setImages(["/bg.jpg", "/bg2.jpg", "/bg3.jpg"]); // Fallback to static images if none are fetched
        }
      } catch (error: any) {
        console.error("Error fetching images for ImgSale:", error);
        setImages(["/bg.jpg", "/bg2.jpg", "/bg3.jpg"]); // Fallback on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [apiURL]);

  // Render a loading state while fetching images
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Render Swiper with fetched images
  return (
    <div className="flex flex-1 items-center justify-center w-full">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[892px] h-[344px]"
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`${apiURL}${image}`} // Prepend the API URL to the relative image path
                alt={`Sale Image ${index + 1}`}
                width={892}
                height={344}
                priority
                quality={75}
                className="object-cover w-full h-full rounded-md"
                onError={(e) => {
                  console.error(`Error loading image: ${apiURL}${image}`);
                  e.currentTarget.src = "/bg.jpg"; // Fallback image on error
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">
              <p>No images available</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}