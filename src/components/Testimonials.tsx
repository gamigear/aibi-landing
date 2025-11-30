const testimonials = [
  { text: "Sau 2 tuần sử dụng máy AIBI, tôi cảm thấy giấc ngủ được cải thiện rõ rệt. Không còn tình trạng mất ngủ như trước nữa.", name: "Nguyễn Thị Hoa", info: "55 tuổi, Hà Nội", initials: "NT" },
  { text: "Bị đau lưng nhiều năm, dùng máy AIBI được 1 tháng thấy đỡ hẳn. Rất hài lòng với sản phẩm này.", name: "Trần Văn Minh", info: "62 tuổi, TP.HCM", initials: "TV" },
  { text: "Mua cho bố mẹ dùng, cả hai đều rất thích. Bố tôi nói cảm thấy khỏe hơn, đi lại dễ dàng hơn trước.", name: "Lê Hoàng Nam", info: "38 tuổi, Đà Nẵng", initials: "LH" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Đánh giá khách hàng
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Khách Hàng Nói Gì Về AIBI?</h2>
          <p className="text-gray-600 text-lg">Hàng nghìn khách hàng đã tin tưởng và hài lòng với sản phẩm</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex gap-1 mb-5 text-yellow-400">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 btn-gradient rounded-full flex items-center justify-center text-white font-bold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.info}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
