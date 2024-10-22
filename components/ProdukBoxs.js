import ProdukBox from "./ProdukBox";
import { getProducts } from "@/lib/helper";

export default async function ProdukBoxs() {
  const products = await getProducts();
  return (
    <section className="mt-8 ">
      <h1 className="text-2xl mb-4">Produk Kami</h1>
      <div className="produk-boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.length > 0 &&
          products.map((produk) => (
            <ProdukBox
              key={produk.id}
              img={produk.image}
              title={produk.name}
              description={produk.description}
              isComingSoon={false}
              href={produk.href}
            />
          ))}
        <ProdukBox
          img="/images/pexels/telur-di-wadah.jpg"
          title="Telur"
          description="Telur Ayam."
          isComingSoon={true}
          comingSoonCaption="Segera Hadir"
          href="#"
        />
        <ProdukBox
          img="/images/pakan.jpg"
          title="Pakan & Vitamin Unggas"
          description="Pakan berkualitas tinggi yang diformulasikan khusus untuk mendukung pertumbuhan dan kesehatan unggas Anda."
          isComingSoon={true}
          comingSoonCaption="Segera Hadir"
          href="#"
        />
      </div>
    </section>
  );
}
