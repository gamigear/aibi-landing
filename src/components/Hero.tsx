"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const sliderImages = [
  "/media/Type 1 - 6800/z7235407219216_f458d8f412f46cd22a7285169a532420.jpg",
  "/media/Type 1 - 6800/z7235407200846_011a3656ad3a1cf04a612b93e58bb4f5.jpg",
  "/media/Type 2 - 5300 + 500VC/z7235707832287_82d953953f79ae71f38eeaa65e087e7e.jpg",
  "/media/Type 3 -  7800/z7239390761874_59c0e36514de0644d6b0ad932cef6cf6.jpg",
  "/media/Type 1 - 6800/z7235407232535_e10235efc1a4e34a5bb1d45c6c0d8db0.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {sliderImages.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={src}
              alt={`Máy AIBI ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-block bg-green-500/20 backdrop-blur-sm text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-500/30">
            🏆 Công nghệ Đức - Chất lượng hàng đầu
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Máy Năng Lượng <span className="text-green-400">Cộng Hưởng Sinh Học</span> AIBI
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
            Giải pháp chăm sóc sức khỏe toàn diện với công nghệ cộng hưởng sinh học tiên tiến.
            Hỗ trợ cải thiện tuần hoàn máu, giảm đau nhức và tăng cường sức khỏe tổng thể.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-10 mb-10">
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-extrabold text-green-400 drop-shadow">10,000+</span>
              <span className="text-sm text-gray-300">Khách hàng tin dùng</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-extrabold text-green-400 drop-shadow">98%</span>
              <span className="text-sm text-gray-300">Hài lòng</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-extrabold text-green-400 drop-shadow">5 năm</span>
              <span className="text-sm text-gray-300">Bảo hành</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#order"
              className="btn-gradient text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all text-lg"
            >
              <i className="fas fa-shopping-cart"></i> Đặt mua ngay
            </Link>
            <a
              href="tel:0981237386"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 hover:border-white/60 transition-all text-lg"
            >
              <i className="fas fa-phone-alt"></i> 0981 237 386
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={goToPrev}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all border border-white/20"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>
        <div className="flex gap-3">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-green-500 w-10"
                  : "bg-white/50 w-3 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all border border-white/20"
        >
          <i className="fas fa-chevron-right text-lg"></i>
        </button>
      </div>
    </section>
  );
}
