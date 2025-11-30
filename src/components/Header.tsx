"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/media/logo/logo aibi.png" alt="AIBI Logo" width={120} height={45} className="h-10 w-auto" priority />
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            { href: "#features", label: "Tính năng" },
            { href: "#benefits", label: "Lợi ích" },
            { href: "#testimonials", label: "Đánh giá" },
            { href: "#contact", label: "Liên hệ" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-700 font-medium hover:text-green-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="tel:0981237386" className="btn-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <i className="fas fa-phone-alt"></i>
          <span className="hidden sm:inline">0981 237 386</span>
        </a>
      </div>
    </header>
  );
}
