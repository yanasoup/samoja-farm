import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PanduanCaraOrder from "@/components/PanduanCaraOrder";

export default function CaraOrderPage({ params }) {
  const path = params == {} ? "/" : params;
  return (
    <div>
      <div className="wrapper-bg w-full p-4">
        <Header path={path} />
        <main className="py-4 mt-8">
          <h2 className="text-2xl mb-8 underline">Cara Pemesanan:</h2>
          <section className="pl-8">
            <PanduanCaraOrder />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
