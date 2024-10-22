import ArtikelHeadlineBox from "@/components/ArtikelHeadlineBox";
import Header from "@/components/Header";
import ProdukBoxs from "@/components/ProdukBoxs";
import Footer from "@/components/Footer";
import ProdukDetail from "@/components/ProdukDetail";
import DebugBox from "@/components/DebugBox";

export default function ProdukPage({ params }) {
  const path = params == {} ? "/" : params;
  return (
    <div>
      <DebugBox />
      <div className="wrapper-bg w-full p-4">
        <Header path={path} />
        <main className="py-4">
          <ProdukDetail slug={params.slug} />
          <ProdukBoxs />
          <ArtikelHeadlineBox />
        </main>
      </div>
      <Footer />
    </div>
  );
}
