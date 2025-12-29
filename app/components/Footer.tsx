"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/navbar.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogle, FaWhatsapp } from "react-icons/fa6";

import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`bg-gray-100 text-gray-700 ${poppins.className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* BRAND & ABOUT */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={Logo}
            alt="Clinic Logo"
            width={150}
            height={80}
            className="object-contain mb-4"
          />
          <p className="mt-2 text-sm leading-relaxed text-center md:text-left">
            Dr. Aaditya’s Rehab Centre (DARC) — Dedicated to helping children
            with developmental delays, autism, speech & occupational challenges
            reach their full potential.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-700">
            <FooterLink href="#">Occupational Therapy</FooterLink>
            <FooterLink href="#">Physiotherapy</FooterLink>
            <FooterLink href="#">Speech Therapy</FooterLink>
            <FooterLink href="#">Developmental Support</FooterLink>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/aboutus">About Us</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/book">Book Appointment</FooterLink>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          {/* Location */}
          <p className="text-sm">
            📍{" "}
            <a
              href="https://www.google.com/maps/place/Sona+Complex,+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Sona Complex, 1st Floor, 52nd St, Sarvamangala Colony, Ashok Nagar, Chennai, TN 600083
            </a>
          </p>

          {/* Phone */}
          <p className="text-sm mt-2">
            📞{" "}
            <a
              href="tel:+918015152682"
              className="hover:text-blue-600 transition-colors"
            >
              +91 8015152682
            </a>
          </p>

          {/* Email */}
          <p className="text-sm mt-2">
            ✉️{" "}
            <a
              href="mailto:themomscare365@gmail.com"
              className="hover:text-blue-600 transition-colors"
            >
              themomscare365@gmail.com
            </a>
          </p>

          {/* Timing */}
          <p className="text-sm mt-2">🕒 Mon–Sat: 9 AM – 9 PM</p>

          {/* SOCIAL MEDIA */}
          {/* SOCIAL MEDIA */}
<div className="flex flex-wrap gap-3 mt-4">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/people/Dr-Aadityas-Rehab-Centre/61555006747645/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white p-2 rounded-full transition transform hover:scale-110"
  >
    <FaFacebookF size={20} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/darcglobal/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 hover:bg-pink-500 text-gray-600 hover:text-white p-2 rounded-full transition transform hover:scale-110"
  >
    <FaInstagram size={20} />
  </a>

  {/* Google Maps */}
  <a
    href="https://www.google.com/maps/place/Sona+Complex,+Chennai"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white p-2 rounded-full transition transform hover:scale-110"
  >
    <FaGoogle size={20} />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@darcglobal"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 hover:bg-red-600 text-gray-600 hover:text-white p-2 rounded-full transition transform hover:scale-110"
  >
    <FaYoutube size={20} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918015152682"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 hover:bg-green-500 text-gray-600 hover:text-white p-2 rounded-full transition transform hover:scale-110"
  >
    <FaWhatsapp size={20} />
  </a>
</div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Dr. Aaditya’s Rehab Centre. All rights reserved.
      </div>
    </footer>
  );
}

/* Footer Link Component */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-blue-600 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}


