import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div>
      <div className="wrapper-bg w-full p-4">
        <Header />
        <main className="py-4 mt-8">
          <h2 className="text-3xl font-bold mb-8 uppercase">Blog</h2>
          <section className="pl-8">
            <p>Halaman ini masih dalam tahap pengembangan</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
