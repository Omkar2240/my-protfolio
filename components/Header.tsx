"use client"
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 ">
      <div className="max-w-screen-2xl  w-full mx-auto px-4 py-2 flex justify-between items-center md:px-6 md:py-2.5  md:grid md:grid-cols-[1fr_3fr_1fr] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
        <h1>
          <Link href="/" className="logo">
            <Image src="/logo.png" width={200} height={200} alt="Omkar Ramgirwar" />
          </Link>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden w-10 h-10 grid place-items-center bg-zinc-50/50 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span>{navOpen ? <CloseIcon /> : <MenuIcon />}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end max-w-max h-9 flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] bg-zinc-50 text-zinc-900 active:bg-zinc-50/8-">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
