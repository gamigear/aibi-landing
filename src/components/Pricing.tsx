import Image from "next/image";

const products = [
  {
    name: "AIBI Type 2 - 5300 + 500VC",
    image: "/media/Type 2 - 5300 + 500VC/z7235707846002_57f697998f996779dfa1c47df4fb4914.jpg",
    badge: "Phổ biến",
    features: ["Máy AIBI chính hãng", "Bảo hành 5 năm", "Giao hàng miễn phí"],
    featured: false,
  },
  {
    name: "AIBI Type 1 - 6800",
    image: "/media/Type 1 - 6800/z7235407213515_8504349ca6b68a4bac34f49fdb48a268.jpg",
    badge: "Bán chạy nhất",
    features: ["01 Máy AIBI chính hãng", "Bảo hành 5 năm", "Hướng dẫn sử dụng chi tiết", "Hỗ trợ kỹ thuật 24/7", "Giao hàng miễn phí toàn quốc", "Đổi trả trong 30 ngày"],
    featured: true,
  },
  {
    name: "AIBI Type 3 - 7800",
    image: "/media/Type 3 -  7800/z7239390781864_352f5164724df252d1ba6fa872eac16d.jpg",
    badge: "Cao cấp",
    badgeColor: "bg-orange-500",
    features: ["Máy AIBI cao cấp nhất", "Bảo hành 5 năm", "Nhiều tính năng nâng cao"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="order" className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Ưu đãi đặc biệt
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Đặt Hàng Ngay Hôm Nay</h2>
          <p className="text-gray-300 text-lg">Nhận ngay ưu đãi hấp dẫn khi đặt mua máy AIBI</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <div key={product.name} className={`bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-2 ${product.featured ? "ring-4 ring-green-500 scale-105" : ""}`}>
              <div className="relative h-48">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
                <span className={`absolute top-4 right-4 ${product.badgeColor || "bg-green-600"} text-white px-4 py-1 rounded-full text-xs font-bold`}>
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-extrabold text-green-600 mb-4">Liên hệ</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-check text-green-600"></i>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:0981237386" className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${product.featured ? "btn-gradient text-white hover:shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  <i className={`fas ${product.featured ? "fa-shopping-cart" : "fa-phone"}`}></i>
                  {product.featured ? "Đặt mua ngay" : "Liên hệ tư vấn"}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white text-lg">
          Hotline tư vấn: <strong className="text-yellow-400 text-2xl">0981 237 386</strong>
        </p>
      </div>
    </section>
  );
}
