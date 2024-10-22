import SocialButtons from "./SocialButtons";
export default function FooterBottom() {
  return (
    <div className="flex flex-row p-4">
      <div className="basis-1/3">
        <h1 className="text-2xl mb-4">Samoja Farm</h1>
        <p>Mitra Terbaik Peternak Unggas.</p>
        <SocialButtons />
      </div>
      <div className="basis-2/3 pl-8 flex">
        <div className="basis-1/2">
          <h1 className="text-lg">Jam Operasional</h1>
          <p>Senin-Jumat: 09.00 - 17.00</p>
          <p>Sabtu: 09.00 - 14.00</p>
          <p>Ahad Tutup</p>
        </div>
        <div className="basis-1/2">
          <h1 className="text-lg">Alamat Farm</h1>
          <p>Samoja Banjaran, Bandung</p>
          <p>Indonesia, 40123 </p>
        </div>
      </div>
    </div>
  );
}
