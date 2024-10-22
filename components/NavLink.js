"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navlink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href ? `${classes.navlink} ${classes.active}` : classes.navlink
      }
    >
      {children}
    </Link>
  );
}
