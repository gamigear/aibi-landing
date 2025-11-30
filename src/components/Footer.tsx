import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image src="/media/logo/logo aibi.png" alt="AIBI Logo" width={150} height={50} className="mb-4 brightness-0 invert" />
            <h3 className="text-xl font-bold text-green-500 mb-3">AIBI Vietnam</h3>
            <p className="text-gray-400 mb-6">Máy Năng Lượng Cộng Hưởng Sinh Học - Giải pháp chăm sóc sức khỏe toàn diện cho gia đình Việt</p>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2"><i className="fas fa-phone-alt text-green-500"></i> 0981 237 386</p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-green-500"></i> contact@aibi.vn</p>
              <p className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-green-500"></i> Số 8 Ngõ 121 Thái Hà, Đống Đa, Hà Nội</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/aibi.vn" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/@AIBIVietnam" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-youtube"></i></a>
              <a href="https://zalo.me/0981237386" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fas fa-comment-dots"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-5">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {[
                { href: "#features", label: "Tính năng" },
                { href: "#benefits", label: "Lợi ích" },
                { href: "#testimonials", label: "Đánh giá" },
                { href: "#contact", label: "Liên hệ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-green-500 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-5">Chính sách</h4>
            <ul className="space-y-3">
              {["Chính sách bảo hành", "Chính sách đổi trả", "Chính sách vận chuyển", "Điều khoản sử dụng"].map((policy) => (
                <li key={policy}>
                  <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">{policy}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 AIBI Vietnam. All rights reserved. | Website: <a href="https://aibi.vn" target="_blank" className="text-green-500 hover:underline">aibi.vn</a></p>
        </div>
      </div>
    </footer>
  );
}
