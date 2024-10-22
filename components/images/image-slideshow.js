// karena di nextjs defaultnya setiap component itu ada server side component,
// maka di butuhkan directive "use client" untuk memberi tahu nextJS bahwa component ini adalah client side component
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import slide1 from "@/public/images/chicken-farm-1.jpeg";
import slide2 from "@/public/images/pexels/brown-chicken.jpg";
import slide3 from "@/public/images/pexels/telur-landscape.jpg";
import slide4 from "@/public/images/kandang-3.jpeg";
import slide5 from "@/public/images/telur-1.jpeg";

import classes from "./image-slideshow.module.css";

const images = [
  { image: slide1, alt: "peternakan ayam samoja" },
  { image: slide2, alt: "hy line brown" },
  { image: slide3, alt: "telur diwadah" },
  { image: slide4, alt: "kandang" },
  { image: slide5, alt: "telur ayam" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
          priority={true}
        />
      ))}
    </div>
  );
}
