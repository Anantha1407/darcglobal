"use client";

import Logo from "../assets/navbar.png";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/* ---------- REUSABLE LINKS ---------- */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 font-medium
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-blue-600
        hover:after:w-full after:transition-all after:duration-300"
    >
      {children}
    </Link>
  );
}

/* ---------- SERVICES DROPDOWN ---------- */
function ServicesDropdown() {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-gray-700 font-medium">
        Services
        <span className="transition-transform group-hover:rotate-180">▼</span>
      </button>

      <div
        className="absolute left-0 top-full mt-3 w-52 bg-white rounded-xl shadow-lg
        opacity-0 scale-95 translate-y-2
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
        transition-all duration-200"
      >
        <Link href="/services/occupational" className="block px-4 py-3 hover:bg-gray-100">
          Occupational Therapy
        </Link>
        <Link href="/services/speech" className="block px-4 py-3 hover:bg-gray-100">
          Speech Therapy
        </Link>
        <Link href="/services/special-education" className="block px-4 py-3 hover:bg-gray-100">
          Special Education
        </Link>
        <Link href="/services/sensory-integration" className="block px-4 py-3 hover:bg-gray-100">
          Sensory Integration Therapy
        </Link>
        <Link href="/services/behavioural" className="block px-4 py-3 hover:bg-gray-100">
          Behavioural Therapy
        </Link>
        <Link href="/services/parent-coaching" className="block px-4 py-3 hover:bg-gray-100">
          Parent Coaching
        </Link>
      </div>
    </div>
  );
}

/* ---------- NAVBAR ---------- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* Hide navbar on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setHide(true);
      } else {
        setHide(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <nav
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-9xl 
          bg-white/80 backdrop-blur-md shadow-xl rounded-full
          transition-transform duration-300 ease-in-out 
          ${hide ? "-translate-y-32" : "translate-y-0"}
          ${poppins.className}
        `}
      >
        <div className="flex items-center justify-between h-20 px-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center mt-1">
            <Image
              src={Logo}
              alt="DARC Logo"
              width={75}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/aboutus">About Us</NavLink>
            <ServicesDropdown />
            <NavLink href="/#timeline">How It Works</NavLink>
            <NavLink href="/#testimonials">Success Stories</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contactus">Contact Us</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="relative inline-block h-12 w-64 rounded-full shadow-lg bg-blue-600 text-white font-medium text-lg overflow-hidden group"
            >
              {/* Default text */}
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <span className="mr-2">Book Appointment</span>
                <FaArrowRight className="w-5 h-5" />
              </span>

              {/* Sliding arrow */}
              <span className="absolute inset-0 flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                <FaArrowRight className="w-5 h-5 mr-2" />
                <span className="mr-2">Better Tomorrow</span>
              </span>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ---------- MOBILE OVERLAY ---------- */}
      <div
        className={`
          md:hidden fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* ---------- MOBILE MENU PANEL ---------- */}
      <div
        className={`
          md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-md
          bg-white rounded-2xl shadow-2xl
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}
        `}
      >
        <div className="flex flex-col divide-y">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/aboutus" },
            { label: "Services", href: "/services" },
            { label: "How It Works", href: "/#timeline" },
            { label: "Success Stories", href: "/#testimonials" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/contactus" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-gray-800 font-medium hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="px-6 py-4 text-center font-semibold text-white
              bg-blue-600 hover:bg-blue-700 rounded-b-2xl"
          >
            Book Appointment →
          </Link>
        </div>
      </div>
    </>
  );
}
