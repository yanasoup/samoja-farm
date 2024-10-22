import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/FormContactUs";
import ProdukBoxs from "@/components/ProdukBoxs";
import DebugBox from "@/components/DebugBox";

export default function KontakPage() {
  return (
    <div>
      <div className="wrapper-bg w-full p-4">
        <DebugBox />
        <Header />
        <main className="py-4 mt-8">
          <h2 className="text-2xl mb-8">Hubungi Kami</h2>
          <section>
            <ContactUs />
          </section>
          <ProdukBoxs />
        </main>
      </div>
      <Footer />
    </div>
  );
}
