import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KonfirmasiOrderEmail from "@/components/KonfirmasiOrderEmail";
import ProdukBoxs from "@/components/ProdukBoxs";

export default function KonfirmasiOrderEmailPage({ params }) {
  const path = params == {} ? "/" : params;
  return (
    <div>
      <div className="wrapper-bg w-full p-4">
        <Header path={path} />
        <main className="py-4">
          <div>
            <KonfirmasiOrderEmail sessionid={params.sessionid} />
            <ProdukBoxs />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
