import Image from "next/image";

export default function InfoSection() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Image src="/media/info.jpg" alt="Thông tin AIBI" width={600} height={400} className="rounded-2xl shadow-lg w-full h-auto" />
            <Image src="/media/info 2.jpg" alt="Thông tin chi tiết AIBI" width={600} height={400} className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Thông số kỹ thuật
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Chi Tiết Sản Phẩm</h2>
          </div>
          <Image src="/media/specifications.jpg" alt="Thông số kỹ thuật máy AIBI" width={1000} height={600} className="mx-auto rounded-2xl shadow-xl max-w-full h-auto" />
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Khách hàng tin dùng
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">Cộng Đồng Người Dùng AIBI</h2>
          </div>
          <Image src="/media/Customer.jpg" alt="Khách hàng AIBI" width={1000} height={600} className="mx-auto rounded-2xl shadow-xl max-w-full h-auto" />
        </div>
      </section>
    </>
  );
}
