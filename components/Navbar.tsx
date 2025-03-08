"use client"
import { useRef, useEffect } from "react";

interface NavbarProps {
  navOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
      activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
      activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
      activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      initActiveBox(); // Initialize active box on mount

      const handleResize = () => {
        initActiveBox(); // Recalculate on resize
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove("active");
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;

    if (activeBox.current) {
      activeBox.current.style.top = `${event.currentTarget.offsetTop}px`;
      activeBox.current.style.left = `${event.currentTarget.offsetLeft}px`;
      activeBox.current.style.width = `${event.currentTarget.offsetWidth}px`;
      activeBox.current.style.height = `${event.currentTarget.offsetHeight}px`;
    }
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className:
        "grid items-center h-9 px-4 text-sm font-medium tracking-wide text-white md:text-zinc-50 hover:text-black transition-colors duration-500 active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className:
        "grid items-center h-9 px-4 text-sm font-medium tracking-wide text-white md:text-zinc-50 hover:text-black transition-colors",
    },
    {
      label: "Projects",
      link: "#projects",
      className:
        "grid items-center h-9 px-4 text-sm font-medium tracking-wide text-white md:text-zinc-50 hover:text-black transition-colors",
    },
    {
      label: "Contact",
      link: "#contact",
      className:
        "grid items-center h-9 px-4 text-sm font-medium tracking-wide text-white md:text-zinc-50 hover:text-black transition-colors md:hidden",
    },
  ];

  return (
    <nav
      className={`absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-900/90 rounded-2xl ring-inset ring-1 ring-zinc-50/10 scale-90 isolate opacity-0 invisible transition-[opacity,transform,filter] md:static md:flex md:items-center md-mt-0 md:opacity-100 md:blur-0 md:visible md:scale-100 backdrop-blur-2xl ${navOpen ? "active opacity-100 scale-100 blur-0 visible" : ""
        }`}
    >
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={key === 0 ? lastActiveLink : undefined}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div
        className="active-box absolute bg-white/20 rounded-lg -z-10 transition-[top,left] duration-500"
        ref={activeBox}
      ></div>
    </nav>
  );
};

export default Navbar;
