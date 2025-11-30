import Image from "next/image";

const steps = [
  { num: "01", title: "Phát sóng cộng hưởng", desc: "Máy phát ra các sóng năng lượng sinh học với tần số phù hợp với cơ thể người" },
  { num: "02", title: "Kích hoạt tế bào", desc: "Sóng năng lượng thâm nhập sâu, kích hoạt các tế bào và cải thiện chức năng" },
  { num: "03", title: "Tái tạo và phục hồi", desc: "Cơ thể tự phục hồi, tái tạo năng lượng và cải thiện sức khỏe tổng thể" },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Cách hoạt động
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Nguyên Lý Cộng Hưởng Sinh Học</h2>
          <p className="text-gray-600 text-lg">
            Hiểu rõ cách máy AIBI hoạt động để mang lại hiệu quả tối ưu cho sức khỏe của bạn
          </p>
        </div>
        <div className="mb-16">
          <Image src="/media/function.png" alt="Chức năng máy AIBI" width={1000} height={500} className="mx-auto rounded-2xl shadow-xl max-w-full h-auto" />
        </div>
        <div className="relative flex flex-col md:flex-row justify-between gap-8">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-green-600 to-green-500 z-0" />
          {steps.map((step) => (
            <div key={step.num} className="flex-1 text-center relative z-10">
              <div className="w-24 h-24 btn-gradient rounded-full flex items-center justify-center text-white text-3xl font-extrabold mx-auto mb-6 shadow-lg shadow-green-500/30">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
