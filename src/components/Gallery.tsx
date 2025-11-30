"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const images = [
  { src: "/media/Type 1 - 6800/z7235407200846_011a3656ad3a1cf04a612b93e58bb4f5.jpg", label: "AIBI Type 1 - 6800" },
  { src: "/media/Type 2 - 5300 + 500VC/z7235707832287_82d953953f79ae71f38eeaa65e087e7e.jpg", label: "AIBI Type 2" },
  { src: "/media/Type 3 -  7800/z7239390761874_59c0e36514de0644d6b0ad932cef6cf6.jpg", label: "AIBI Type 3 - 7800" },
  { src: "/media/Type 1 - 6800/z7235407232535_e10235efc1a4e34a5bb1d45c6c0d8db0.jpg", label: "Chi tiết sản phẩm" },
  { src: "/media/Type 1 - 6800/z7235407238974_4ba97a04953a0db65cba1f63dd4453df.jpg", label: "Phụ kiện đi kèm" },
  { src: "/media/Type 1 - 6800/z7235407219216_f458d8f412f46cd22a7285169a532420.jpg", label: "AIBI Type 1" },
  { src: "/media/Type 2 - 5300 + 500VC/z7235707846002_57f697998f996779dfa1c47df4fb4914.jpg", label: "AIBI Type 2 - Chi tiết" },
  { src: "/media/Type 3 -  7800/z7239390781864_352f5164724df252d1ba6fa872eac16d.jpg", label: "AIBI Type 3 - Chi tiết" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-center">
            <span className="inline-block bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-semibold mb-4 border border-green-500/30">
              Bộ sưu tập sản phẩm
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Các Dòng Máy AIBI</h2>
            <p className="text-gray-400 text-lg">Đa dạng mẫu mã, phù hợp với mọi nhu cầu sử dụng</p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollSlider("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all border border-white/20"
          >
            <i className="fas fa-chevron-left text-lg"></i>
          </button>

          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-4 md:px-10 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="flex-shrink-0 w-72 md:w-80 cursor-pointer group snap-start"
              >
                <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-semibold">{img.label}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <i className="fas fa-search-plus text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollSlider("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all border border-white/20"
          >
            <i className="fas fa-chevron-right text-lg"></i>
          </button>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </button>

          <div
            className="relative max-w-6xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].label}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain rounded-lg"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-xl font-semibold text-center">{images[currentImage].label}</p>
              <p className="text-gray-400 text-center mt-1">{currentImage + 1} / {images.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? "bg-green-500 w-6" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
