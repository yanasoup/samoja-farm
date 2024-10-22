import ArtikelBox from "./ArtikelBox";
export default function ArtikelHeadlineBox() {
  return (
    <section className="blog-post-headline mt-8">
      <h1 className="text-2xl mb-4">Artikel Unggas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ArtikelBox
          img="/images/chicken-on-grass.jpg"
          created_by="Admin"
          created_at="15 Juni 2024"
          title="Mengenal Lebih Dekat Ayam Petelur: Jenis, Perawatan, dan
                Keuntungan"
        />
        <ArtikelBox
          img="/images/chicken-frame.jpeg"
          created_by="Admin"
          created_at="21 Juni 2024"
          title="Inovasi Teknologi dalam Peternakan Unggas: Meningkatkan Produktivitas dan Efisiensi"
        />
        <ArtikelBox
          img="/images/chicken-farm-2.jpeg"
          created_by="Admin"
          created_at="25 Juni 2024"
          title="Strategi Efektif Mengatasi Penyakit pada Unggas di Musim Hujan"
        />
        <ArtikelBox
          img="/images/hy-line-brown-max.jpeg"
          created_by="Admin"
          created_at="2 Juli 2024"
          title="Mengapa Memilih Hy-Line Brown Max"
        />
      </div>
    </section>
  );
}
