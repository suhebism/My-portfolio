"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const menu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Projects", path: "/projects" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
];
const Navbar = () => {
  return (
    <div className="flex px-10 justify-between items-center w-full h-10 fixed  backdrop-filter backdrop-blur-sm bg-opacity-10 z-50">
      <Link href="/" className="text-[#80E7C3] text-4xl">
        سحب
      </Link>
      <div className="flex gap-10">
        {menu.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className="text-[#FAE9D0] hover:underline underline-offset-2 transition-all duration-500 ease-in-out">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
