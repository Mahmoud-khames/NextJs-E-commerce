

import ProductItem from "./_components/ProductItem";

async function  Page({ params }: { params: { slug: string } }) {
    const slug = await params.slug
  return (
    <>
      <div className="min-h-screen">
        <ProductItem slug={slug} />
      </div>
    </>
  );
}
export default Page;
