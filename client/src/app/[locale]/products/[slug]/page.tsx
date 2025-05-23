

import ProductItem from "./_components/ProductItem";
import ProductReviewItem from "./_components/ProductReviewItem";

async function  Page({ params }: { params: { slug: string } }) {
    const slug = await params.slug
  return (
    <>
      <div className="min-h-screen">
        <ProductItem slug={slug} />
        <ProductReviewItem  slug={slug} />
      </div>
    </>
  );
}
export default Page;
