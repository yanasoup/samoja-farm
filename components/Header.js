import HeaderTop from "./HeaderTop";
import ImageSlideshow from "./images/image-slideshow";
import ImageHeader from "./images/image-header";
import KeranjangBelanja from "./KeranjangBelanja";
import Loader from "./Loader";

export default function Header({ path }) {
  console.log("path", path);
  const cssClasses =
    path === "/"
      ? `flex relative h-[400px] lg:h-[650px] rounded-2xl overflow-hidden bg-green-950 bg-opacity-25`
      : `flex relative h-[400px] lg:h-[525px] rounded-2xl overflow-hidden bg-green-950 bg-opacity-25`;
  const isHome = path === "/";

  return (
    <>
      <header className={cssClasses}>
        <Loader />
        <KeranjangBelanja />
        <HeaderTop />
        <div className={`w-full`}>
          {isHome ? <ImageSlideshow /> : <ImageHeader />}
        </div>
      </header>
    </>
  );
}
