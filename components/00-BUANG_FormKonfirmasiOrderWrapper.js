import FormKonfirmasiOrder from "./FormKonfirmasiOrder";

export default function FormKonfirmasiOrderWrapper() {
  return (
    <section className="checkout-wrapper mt-8">
      <h1 className="text-3xl mb-4">Konfirmasi Pesanan</h1>
      <FormKonfirmasiOrder />
    </section>
  );
}
