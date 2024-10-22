import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormKonfirmasiOrder from "@/components/FormKonfirmasiOrder";
import DebugBox from "@/components/DebugBox";

export default function KonfirmasiOrderPage({ params }) {
  const path = params == {} ? "/" : params;
  return (
    <div>
      <DebugBox />
      <div className="wrapper-bg w-full p-4">
        <Header path={path} />
        <main className="py-4">
          <FormKonfirmasiOrder />
        </main>
      </div>
      <Footer />
    </div>
  );
}
