import ArtikelHeadlineBox from "@/components/ArtikelHeadlineBox";
import Header from "@/components/Header";
import ProdukBoxs from "@/components/ProdukBoxs";
import TentangKami from "@/components/TentangKami";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";
import DebugBox from "@/components/DebugBox";

export default async function Home({ params }) {
  const path =
    Object.keys(params).length === 0 && params.constructor === Object
      ? "/"
      : params;
  return (
    <div>
      <DebugBox />
      <div className="wrapper-bg w-full p-4">
        <Header path={path} />
        <main className="py-4">
          <ProdukBoxs />
          <TentangKami />
          <Testimoni />
          <ArtikelHeadlineBox />
        </main>
      </div>
      <Footer />
    </div>
  );
}
