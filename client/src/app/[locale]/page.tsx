import CategoriesList from "@/components/Home/Categories/CategoriesList";
import ImgSale from "@/components/Home/ImgSale/ImgSale";
import OurProductList from "@/components/Home/ourProductList/OurProductList";
import ProductList from "@/components/Home/productList/ProductList";
import ProductListSales from "@/components/Home/productListSales/ProductListSales";
import Link from "@/components/link";
import Title from "@/components/Title";
import Trans from "@/components/trans";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import DiscountTimer from "@/components/Home/DiscountTimer";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  
  return {
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
  };
}

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = await Trans();
  const { home } = t;

  return (
    <main className="flex flex-col gap-4">
      <Suspense fallback={<Loading />}>
        <div className="flex pt-[80px] h-[344px] items-center justify-center gap-15 w-full">
          <ImgSale />
        </div>
        
        <div className="flex flex-col gap-4 items-start mt-40">
          <div className="flex flex-col md:flex-row gap-20 w-full mb-10">
            <Title title={home.todays} text={home.flashSales} />
            <div className="flex justify-end flex-col">
              <DiscountTimer />
            </div>
          </div>
          <ProductListSales t={t} locale={locale} filter={{ hasActiveDiscount: true }} />
        </div>
        
        <div className="flex flex-col gap-4 items-start mt-40">
          <Title title={home.categories} text={home.browseByCategory} />
          <CategoriesList />
          <div className="w-full h-[1px] bg-[#E5E5E5] my-10"></div>
        </div>
        
        <div className="flex flex-col gap-4 items-start mt-40">
          <div className="flex flex-col md:flex-row justify-between gap-20 w-full mb-10">
            <Title title={home.thisMonth} text={home.bestSellingProducts} />
            <div className="hidden md:flex items-end cursor-pointer">
              <Link
                href="/products"
                className="text-white bg-secondary hover:bg-secondary/90 transition-colors flex items-center justify-center px-12 py-4 w-[159px] h-[56px] rounded text-[14px] font-medium"
              >
                {home.viewAll}
              </Link>
            </div>
          </div>
          <ProductList t={t} locale={locale} filter={{ bestSelling: true }} />
        </div>

        {/* <ImgProduct /> */}
        
        <div className="flex flex-col gap-4 items-start mt-40 mb-20">
          <div className="flex flex-col md:flex-row gap-20 w-full mb-10">
            <Title title={home.ourProducts} text={home.exploreOurProducts} />
          </div>
          <OurProductList t={t} locale={locale} />
        </div>
      </Suspense>
    </main>
  );
}





