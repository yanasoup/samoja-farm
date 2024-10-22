"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import classes from "./image-slideshow.module.css";
import banner1 from "@/public/images/pexels/chicken-farm-2.jpg";
import banner2 from "@/public/images/pexels/brown-chicken-2.jpg";
import banner3 from "@/public/images/pexels/telur-di-wadah.jpg";
import { usePathname } from "next/navigation";

const images = [
  { path: "doc-petelur", image: banner1, alt: "Daily Old Chicken" },
  { path: "pullet", image: banner2, alt: "Pullet (Ayam Dara)" },
  { path: "telur", image: banner3, alt: "Telur Ayam" },
];

export default function ImageHeader() {
  const [bannerImg, setBannerImg] = useState(images[0]);
  const path = usePathname();
  const arr = path.split("/");
  const segment = arr[arr.length - 1];

  useEffect(() => {
    const tmp = images.filter((item) => item.path === segment);

    setBannerImg(tmp.length !== 0 ? tmp[0] : images[0]);
  }, [segment]);

  return (
    <div className={classes.slideshow}>
      <Image
        src={bannerImg.image}
        className={classes.active}
        alt={bannerImg.alt}
        priority={true}
      />
    </div>
  );
}
