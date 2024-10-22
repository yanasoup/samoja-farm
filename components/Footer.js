import SocialButtons from "./SocialButtons";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="pb-2">
      <div className="md:h-24 w-full md:gap-4 bg-amber-400 flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center flex-row">
          <span>Kontak Marketing: </span>
          <a
            href="/"
            className="inline-block bg-amber-400 p-2 rounded-full cursor-pointer hover:bg-amber-300"
          >
            <div className="relative w-8 h-8 ">
              <Image
                alt="wa-logo"
                fill={true}
                src="/images/whatsapp-svgrepo-com.svg"
                className="text-gray-800 dark:text-white inline-block flip"
              />
            </div>
          </a>
          <span className="inline-block">
            {process.env.NEXT_PUBLIC_MARKETING_PHONE}
          </span>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-block bg-amber-400 p-2 rounded-full cursor-pointer hover:bg-amber-300"
          >
            <div className="relative w-8 h-8 ">
              <Image
                alt="email-logo"
                fill={true}
                src="/images/email.svg"
                className="text-gray-800 dark:text-white inline-block flip"
              />
            </div>
          </a>
          <span className="inline-block">
            {process.env.NEXT_PUBLIC_MARKETING_EMAIL}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <div className="basis-1/3">
          <h1 className="text-2xl text-hijau uppercase">Samoja Farm</h1>
          <div className="text-neutral-500">
            <p>Mitra Terbaik Peternak Unggas.</p>
          </div>
        </div>
        <div className="basis-2/3 md:pl-8 flex flex-col md:flex-row  gap-4">
          <div className="basis-1/3 text-left">
            <h1 className="text-lg">Jam Operasional</h1>
            <div className="text-neutral-500">
              <p>Senin-Jumat: 09.00 - 17.00</p>
              <p>Sabtu: 09.00 - 14.00</p>
              <p>Ahad Tutup</p>
            </div>
          </div>
          <div className="basis-1/3">
            <h1 className="text-lg">Alamat Farm</h1>
            <div className="text-neutral-500">
              <p>Samoja Banjaran, Bandung. Jawa Barat</p>
              <p>Indonesia, 40123 </p>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col">
            <h1 className="text-lg">Follow Media Sosial Kami:</h1>
            <SocialButtons />
          </div>
        </div>
      </div>
      <div className="flex flex-row p-4 border-0 border-t border-neutral-200 justify-center items-center">
        <p className="text-center">SamojaFarm&copy;2024</p>
      </div>
    </footer>
  );
}
