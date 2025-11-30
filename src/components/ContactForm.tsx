"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 10000);
      } else {
        setError(data.error || "Có lỗi xảy ra, vui lòng thử lại");
      }
    } catch (err) {
      console.error(err);
      setError("Không thể kết nối server, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Liên Hệ Tư Vấn</h2>
            <p className="text-gray-600 mb-8">Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và giải đáp mọi thắc mắc của bạn</p>
            <div className="space-y-6">
              {[
                { icon: "fa-phone-alt", label: "Hotline", value: "0981 237 386", href: "tel:0981237386" },
                { icon: "fa-envelope", label: "Email", value: "contact@aibi.vn", href: "mailto:contact@aibi.vn" },
                { icon: "fa-globe", label: "Website", value: "https://aibi.vn", href: "https://aibi.vn" },
                { icon: "fa-map-marker-alt", label: "Địa chỉ", value: "Số 8 Ngõ 121 Thái Hà, Đống Đa, Hà Nội" },
                { icon: "fa-clock", label: "Giờ làm việc", value: "8:00 - 20:00 (Thứ 2 - CN)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className={`fas ${item.icon} text-green-600`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-green-600 transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="font-semibold mb-4">Kết nối với chúng tôi</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/aibi.vn" target="_blank" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://zalo.me/0981237386" target="_blank" className="bg-blue-500 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-600 transition-colors">
                  <i className="fas fa-comment-dots"></i> Zalo
                </a>
              </div>
            </div>
          </div>
          <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Đăng Ký Nhận Tư Vấn</h3>
            {success && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
                <i className="fas fa-check-circle"></i>
                Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.
              </div>
            )}
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 flex items-center gap-2">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Họ và tên *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nhập họ và tên" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Số điện thoại *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Nhập số điện thoại" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Nhập email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Nội dung</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Nhập nội dung cần tư vấn" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none" />
              </div>
              <button type="submit" disabled={loading} className="w-full btn-gradient text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50">
                {loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
                {loading ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
