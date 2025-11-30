const features = [
  { icon: "fa-heartbeat", title: "Cải thiện tuần hoàn máu", desc: "Tăng cường lưu thông máu, cung cấp oxy và dưỡng chất đến các tế bào hiệu quả hơn" },
  { icon: "fa-bolt", title: "Kích hoạt năng lượng tế bào", desc: "Công nghệ cộng hưởng giúp kích hoạt và tái tạo năng lượng cho các tế bào trong cơ thể" },
  { icon: "fa-spa", title: "Giảm đau nhức cơ xương", desc: "Hỗ trợ giảm các triệu chứng đau nhức xương khớp, cơ bắp một cách tự nhiên" },
  { icon: "fa-moon", title: "Cải thiện giấc ngủ", desc: "Giúp thư giãn hệ thần kinh, cải thiện chất lượng giấc ngủ và giảm stress" },
  { icon: "fa-shield-virus", title: "Tăng cường miễn dịch", desc: "Hỗ trợ hệ miễn dịch hoạt động hiệu quả, tăng sức đề kháng cho cơ thể" },
  { icon: "fa-battery-full", title: "Tăng năng lượng sống", desc: "Giúp cơ thể tràn đầy năng lượng, tinh thần sảng khoái và minh mẫn hơn" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Tính năng nổi bật
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Công Nghệ Cộng Hưởng Sinh Học Tiên Tiến</h2>
          <p className="text-gray-600 text-lg">
            Máy AIBI sử dụng công nghệ cộng hưởng sinh học từ Đức, giúp kích hoạt năng lượng tế bào và cải thiện sức khỏe toàn diện
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-500 transition-all">
                <i className={`fas ${feature.icon} text-3xl text-green-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
