const badges = [
  { icon: "fa-certificate", label: "Chứng nhận CE" },
  { icon: "fa-shield-alt", label: "An toàn tuyệt đối" },
  { icon: "fa-award", label: "Công nghệ Đức" },
  { icon: "fa-truck", label: "Giao hàng toàn quốc" },
  { icon: "fa-undo", label: "Đổi trả 30 ngày" },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 text-gray-600">
              <i className={`fas ${badge.icon} text-2xl text-green-600`}></i>
              <span className="font-medium text-sm">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
