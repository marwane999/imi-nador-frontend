export default function TrustBadges() {
  return (
    <div className="bg-primary-500 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
          <span className="flex items-center gap-1">
            <span className="text-secondary-500">★★★★★</span> 4.9/5 تقييم
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>+3000 طالب متخرج</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>+15 سنة خبرة</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>6 لغات</span>
        </div>
      </div>
    </div>
  );
}
