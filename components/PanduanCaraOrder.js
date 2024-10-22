import Link from "next/link";
export default function PanduanCaraOrder() {
  return (
    <>
      <ul className="text-md font-light list-disc space-y-3">
        <li>
          Cari Produk yang anda butuhkan, kemudian klik tombol{" "}
          <span className="font-bold">Masukkan ke Keranjang</span>.
        </li>
        <li>
          Untuk merubah quantity, Silahkan klik{" "}
          <span className="font-bold">
            tombol Keranjang Belanja Anda di pojok kanan atas halaman
          </span>{" "}
          , kemudian rubah quantity yang diinginkan.
        </li>
        <li>
          Jika sudah selesai memilih barang yang akan dibeli, silahkan klik
          tombol Keranjang Belanja dan pastikan item dan quantity yang akan
          dibeli sudah sesuai. Kemudian klik tombol{" "}
          <span className="font-bold">Checkout</span> untuk mengisi alamat
          pengiriman
        </li>
        <li>
          di halaman Alamat Pengiriman, silahkan isi Nama, Alamat Pengiriman dan
          Nomor HP/Whatsapp/Telegram yang aktif. Jika semua sudah sesuai,
          silahkan klik tombol{" "}
          <span className="font-bold">Konfirmasi Pesanan</span>
        </li>
        <li>
          Setelah anda klik{" "}
          <span className="font-bold">Konfirmasi Pesanan</span>, anda akan
          menerima email detail dan link konfirmasi pesanan untuk memastikan
          bahwa Anda adalah orang yang memesan di web kami. Silahkan klik link
          yang terdapat di dalam email tersebut untuk mengkonfirmasi pesanan
          Anda.
        </li>
        <li>
          Setelah anda mengkonfirmasi pesanan, Kami akan melakukan pengecekan
          Order terlebih dahulu maksimal 1x24 jam. Kami akan mengirimkan Total
          Harga beserta Ongkos Kirim melalui email / nomor HP yang anda masukkan
          di halaman Konfirmasi Order.
        </li>
        <li>
          Silahkan kirim bukti transfer pembayaran pesanan Anda melalui
          Whatsapp/Telegram ke nomor {process.env.NEXT_PUBLIC_MARKETING_PHONE}.
          Setelah pembayan terverifikasi, Kami akan memproses pesanan Anda dalam
          waktu maksimal 1x24 sejak pembayaran anda terverifikasi oleh pihak
          Kami.
        </li>
        <li>
          Kami akan mengirimkan notifikasi progress pesanan anda melalui email
          yang anda masukan di halaman Konfirmasi Order. Anda juga bisa mengecek
          status dan progress pesanan anda melalui menu{" "}
          <Link href="/lacak-order">Lacak Pesanan</Link>
        </li>
      </ul>
    </>
  );
}
