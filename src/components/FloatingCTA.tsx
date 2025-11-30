"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 flex flex-col gap-3 z-50 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
      <a href="tel:0981237386" className="w-14 h-14 btn-gradient rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" aria-label="Gọi điện">
        <i className="fas fa-phone-alt text-xl"></i>
      </a>
      <a href="https://zalo.me/0981237386" target="_blank" className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" aria-label="Zalo">
        <i className="fas fa-comment-dots text-xl"></i>
      </a>
      <Link href="#contact-form" className="bg-orange-500 text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
        <i className="fas fa-shopping-cart"></i>
        <span className="hidden sm:inline">Đặt hàng</span>
      </Link>
    </div>
  );
}
