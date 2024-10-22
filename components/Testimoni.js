import TestimoniBox from "./TestimoniBox";
export default function Testimoni() {
  return (
    <section className="testimoni mt-8">
      <h1 className="text-2xl mb-4">Testimoni Pelanggan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <TestimoniBox
          img="https://via.placeholder.com/150"
          nama="Agus Supriyanto"
          jabatan="Owner Mitra Pullet Nusantara"
          testimoni="Layanan di Samoja Farm sangat memuaskan! DOC yang saya pesan tiba dengan kondisi sehat dan tepat waktu. Terima kasih banyak!"
          rating={4}
        />
        <TestimoniBox
          img="https://via.placeholder.com/150"
          nama="Poniman"
          jabatan="Peternak"
          testimoni="Kualitas pakan ayam di sini benar-benar luar biasa. Ayam-ayam saya terlihat lebih sehat dan produktif sejak menggunakan pakan dari Samoja Farm."
          rating={5}
        />
        <TestimoniBox
          img="https://via.placeholder.com/150"
          nama="Tito Sugiono"
          jabatan="Manager Bina Ternak Unggul"
          testimoni="Kualitas pakan ayam di sini benar-benar luar biasa. Ayam-ayam saya terlihat lebih sehat dan produktif sejak menggunakan pakan dari Samoja Farm."
          rating={4.5}
        />
        <TestimoniBox
          img="https://via.placeholder.com/150"
          nama="Wawan Cokro"
          jabatan="Founder Harapan Tani Unggas"
          testimoni="Pelayanan pelanggan yang ramah dan profesional. Saya sangat puas dengan informasi dan bantuan yang diberikan oleh tim Samoja Farm."
          rating={5}
        />
      </div>
    </section>
  );
}
