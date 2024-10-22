import ProdukDetailItem from "./ProdukDetailItem";
import { getProducts } from "@/lib/helper";

export default async function ProdukDetail({ slug }) {
  const products = await getProducts();
  const displayedProducts = products.filter((item) => item.slug === slug);

  return (
    <section className="produk-detail mt-8 flex flex-col justify-center">
      <h1 className="text-2xl mb-4">Belanja</h1>
      <div className="about-us-wrapper overflow-hidden w-full">
        {displayedProducts.length > 0 &&
          displayedProducts.map((item) => {
            return <ProdukDetailItem key={item.id} item={item} />;
          })}
      </div>
    </section>
  );
}
