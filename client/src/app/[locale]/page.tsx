import CategoriesList from "@/components/Home/Categories/CategoriesList";

import ImgProduct from "@/components/Home/imgProduct";
import ImgSale from "@/components/Home/ImgSale/ImgSale";
import OurProductList from "@/components/Home/ourProductList/OurProductList";
import ProductList from "@/components/Home/productList/ProductList";
import ProductListSales from "@/components/Home/productListSales/ProductListSales";
import Link from "@/components/link";
import Timer from "@/components/timer";
import Title from "@/components/Title";

import Trans from "@/components/trans";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = await Trans();
  const { home } = t;

  return (
    <main className="flex flex-col gap-4">
      <div className="flex pt-[80px] h-[344px] items-center justify-center gap-15 w-full">
        {/* <Filter />
        <div className="hidden w-[1px] h-[344px] bg-[#E5E5E5] md:block "></div> */}
        {/* image sale */}
        <ImgSale />
      </div>
      {/* product list sales */}
      <div className="flex flex-col gap-4 items-start mt-40">
        <div className="flex flex-col md:flex-row  gap-20 w-full mb-10">
          {/* Tilte */}
          <Title title={home.todays} text={home.flashSales} />
          <div className="flex justify-end flex-col">
            <Timer
              initialTime={{ days: 3, hours: 12, minutes: 0, seconds: 0 }}
            />
          </div>
        </div>
        {/* product list */}
        <ProductListSales t={t} locale={locale}/>
      </div>
      {/* categories */}
      <div className="flex flex-col gap-4 items-start mt-40">
        {/* line */}
        <div className="w-full h-[1px] bg-[#E5E5E5] mb-10"></div>
        <div className="flex flex-col md:flex-row  gap-20 w-full mb-10">
          {/* Tilte */}
          <Title title={home.browseByCategory} text={home.categories} />
        </div>

        {/* categories list */}
        <CategoriesList />
        {/* line */}
        <div className="w-full h-[1px] bg-[#E5E5E5] my-10"></div>
      </div>
      {/* product list */}
      <div className="flex flex-col gap-4 items-start mt-40">
        <div className="flex flex-col md:flex-row justify-between  gap-20 w-full mb-10">
          {/* Tilte */}
          <Title title={home.thisMonth} text={home.bestSellingProducts} />
          {/* view all */}
          <div className="hidden md:flex items-end cursor-pointer ">
            <Link
              href="/products"
              className="text-white bg-secondary flex items-center justify-center px-12 py-4 w-[159px] h-[56px] rounded  text-[14px] font-medium"
            >
              {home.viewAll}
            </Link>
          </div>
        </div>
        {/* product list */}
        <ProductList t={t} locale={locale} />
      </div>

      {/* img product */}
      <ImgProduct />
      {/* our product list */}
      <div className="flex flex-col gap-4 items-start mt-40">
        <div className="flex flex-col md:flex-row  gap-20 w-full mb-10">
          {/* Tilte */}
          <Title title={home.ourProducts} text={home.exploreOurProducts} />
        </div>
        {/* product list */}
        <OurProductList t={t} locale={locale} />
      </div>
    </main>
  );
}
