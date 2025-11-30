export default function VideoSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Video giới thiệu
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Xem Máy AIBI Hoạt Động</h2>
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <video 
            controls 
            poster="/media/4.jpg" 
            className="w-full"
            preload="metadata"
          >
            <source src="/media/Type 3 -  7800/6edc3dbab2ca447cd99b111fa59ed229.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      </div>
    </section>
  );
}
