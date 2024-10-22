import Image from "next/image";
import Link from "next/link";

export default function TentangKami() {
  return (
    <section className="about-us flex justify-center">
      <div className="about-us-wrapper p-6 overflow-hidden w-full xl:w-[75%]">
        <div className="flex flex-col md:flex-row mb-4">
          <div className="relative min-h-[300px] flex w-full md:w-[50%] rounded-xl overflow-hidden">
            <Image
              fill={true}
              alt=""
              src="/images/man-in-the-farm.jpeg"
              className="object-cover object-top "
            />
          </div>
          <div className="w-full md:w-[50%] pl-8 mt-8">
            <span className="font-signika bg-white rounded-xl px-6 py-2">
              Siapa Kami
            </span>
            <h2 className="mt-8 text-xl">
              Kami adalah penyedia terpercaya DOC (Day-Old Chick), ayam pullet,
              dan pakan berkualitas tinggi untuk peternakan Anda. Dengan
              pengalaman bertahun-tahun di industri peternakan unggas, kami
              berkomitmen untuk menyediakan produk dan layanan terbaik bagi para
              peternak di seluruh Indonesia.
            </h2>
            <div className="mt-8">
              <p>
                Kami berdedikasi untuk mendukung peternak unggas dengan
                menyediakan produk berkualitas tinggi dan layanan yang handal.
                Misi kami adalah membantu peternak unggas meningkatkan
                produktivitas dan kesejahteraan ternak mereka melalui
                produk-produk unggulan yang kami tawarkan.
              </p>
            </div>
            <div className="flex flex-col md:flex-row mt-8 gap-4 md:gap-8 justify-between">
              <div className="flex flex-col basis-1/2">
                <h1 className="text-xl md:min-h-16">
                  Pengiriman ke Seluruh Indonesia
                </h1>
                <p>
                  Kami akan pilihkan layanan pengiriman cargo yang sudah
                  terpercaya
                </p>
              </div>
              <div className="flex flex-col basis-1/2">
                <h1 className="text-xl md:min-h-16">Lacak Order</h1>
                <p>
                  Lacak status pesanan anda di menu{" "}
                  <a href="/lacak-pesanan">Lacak Pesanan</a>
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-md md:text-xl my-4">
                <Link
                  href="/cara-pemesanan"
                  className="rounded-md no-underline bg-hijau text-white p-2 hover:bg-green-600"
                >
                  Panduan Cara Pemesanan
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
