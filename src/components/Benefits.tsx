import Image from "next/image";

const benefits = [
  { title: "Không xâm lấn, không tác dụng phụ", desc: "Phương pháp tự nhiên, an toàn cho mọi đối tượng sử dụng" },
  { title: "Dễ dàng sử dụng tại nhà", desc: "Thiết kế nhỏ gọn, thao tác đơn giản, phù hợp mọi gia đình" },
  { title: "Tiết kiệm chi phí điều trị", desc: "Đầu tư một lần, sử dụng lâu dài cho cả gia đình" },
  { title: "Hiệu quả được chứng minh", desc: "Hàng nghìn khách hàng đã trải nghiệm và hài lòng" },
  { title: "Bảo hành 5 năm", desc: "Cam kết chất lượng với chế độ bảo hành dài hạn" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-last lg:order-first">
            <Image src="/media/effective.jpg" alt="Hiệu quả máy AIBI" width={600} height={500} className="rounded-2xl shadow-2xl w-full h-auto" />
          </div>
          <div>
            <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Lợi ích vượt trội
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Tại Sao Chọn Máy AIBI?</h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-2xl text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
