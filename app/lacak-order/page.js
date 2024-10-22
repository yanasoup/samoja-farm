"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormLacakOrder from "@/components/FormLacakOrder";

export default function LacakOrderPage() {
  return (
    <div>
      <div className="wrapper-bg w-full p-4">
        <Header />
        <main className="py-4 mt-8">
          <h2 className="text-2xl mb-8">Lacak Pesanan</h2>
          <section className="">
            <FormLacakOrder />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
