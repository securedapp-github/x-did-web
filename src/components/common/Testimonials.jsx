/* Path: secure-d-app-frontend/src/components/common/Testimonials.jsx */
import { useState, useMemo, useRef, useEffect } from "react";
import SectionTitle from "./SectionTitle";

export default function Testimonials({ reviews = [] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const normalized = useMemo(
    () =>
      reviews.map((r, i) => ({
        id: r.id ?? i,
        testimonial: r.testimonial || r.text || r.reviewText || "",
        name: r.name || r.author || r.reviewer || "",
        designation: r.designation || r.role || "",
      })),
    [reviews]
  );

  // Extend to 8 items by repeating cyclically, for a fuller carousel
  const normalizedExtended = useMemo(() => {
    if (!normalized.length) return [];
    const target = 8;
    const out = [];
    for (let i = 0; i < Math.max(target, normalized.length); i++) {
      out.push({ ...normalized[i % normalized.length], id: `${normalized[i % normalized.length].id}-${i}` });
    }
    return out;
  }, [normalized]);

  const max = normalizedExtended.length;
  const canLeft = active > 0;
  const canRight = active < max - 1;

  // Default to the middle card as active whenever data size changes
  useEffect(() => {
    if (max > 0) setActive(Math.floor(max / 2));
  }, [max]);

  if (!normalizedExtended.length) return null;

  // Scroll active card into center view
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`[data-index="${active}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  return (
    <div className="w-full">
      <div className="text-center mb-12 sm:mb-16">
        <SectionTitle
          name="What clients say"
          title="Client Experiences"
          description="Explore a wide range of topics, including innovative business strategies, technological advancements, and best practices."
        />
      </div>

      {/* Cards - horizontal carousel with snap and active emphasis */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex overflow-x-auto overflow-y-visible no-scrollbar snap-x snap-mandatory gap-6 sm:gap-8 px-6 sm:px-8 lg:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {normalizedExtended.map((r, i) => (
            <div
              key={r.id}
              data-index={i}
              onClick={() => setActive(i)}
              className={[
                // Responsive sizing - mobile first
                "snap-center flex-none w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px]",
                "min-h-[400px] sm:min-h-[420px] lg:min-h-[450px]",
                // Card styling
                "p-6 sm:p-8 lg:p-10 flex flex-col justify-between cursor-pointer relative",
                "rounded-3xl border-2 transition-all duration-500 ease-out",
                "bg-gradient-to-br from-cardBgLight to-white/10 dark:from-cardBgDark dark:to-white/10 backdrop-blur-sm",
                // Active/inactive states
                i === active
                  ? [
                      "border-green-500 shadow-2xl shadow-green-500/20",
                      "scale-105 -translate-y-2 z-20",
                      "bg-gradient-to-br from-green-500/10 to-green-500/5"
                    ].join(" ")
                  : [
                      "border-gray-200 dark:border-gray-700",
                      "hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10",
                      "hover:scale-102 hover:-translate-y-1 opacity-80 hover:opacity-100"
                    ].join(" ")
              ].join(" ")}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <div className={[
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center",
                  i === active 
                    ? "bg-[#12d576]/20 text-[#12d576]" 
                    : "bg-white/10 text-white/60"
                ].join(" ")}>
                  <i className="fa-solid fa-quote-right text-sm sm:text-base" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 flex flex-col justify-start pt-8 sm:pt-10">
                <p className={[
                  "text-sm sm:text-base lg:text-lg leading-relaxed text-left whitespace-pre-line",
                  "font-light tracking-wide",
                  i === active ? "text-white" : "text-white/90 dark:text-white/90 light:text-gray-700"
                ].join(" ")}>
                  "{r.testimonial}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 sm:mt-10 text-center">
                <div className={[
                  "font-semibold text-base sm:text-lg mb-1",
                  i === active ? "text-[#12d576]" : "text-white dark:text-white light:text-gray-800"
                ].join(" ")}>
                  {r.name}
                </div>
                <div className="text-xs sm:text-sm font-light text-white/70 dark:text-white/70 light:text-gray-600">
                  {r.designation}
                </div>
              </div>

              {/* Active indicator */}
              {i === active && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-3 h-3 bg-[#12d576] rounded-full shadow-lg shadow-[#12d576]/50"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-8 sm:mt-12">
          <button
            onClick={() => canLeft && setActive((v) => v - 1)}
            disabled={!canLeft}
            className={[
              "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
              "border-2 backdrop-blur-sm",
              canLeft 
                ? "border-[#12d576] bg-[#12d576]/10 text-[#12d576] hover:bg-[#12d576] hover:text-white shadow-lg hover:shadow-[#12d576]/30" 
                : "border-white/20 bg-white/5 text-white/30 cursor-not-allowed"
            ].join(" ")}
          >
            <i className="fa-solid fa-chevron-left text-sm" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {normalizedExtended.slice(0, 5).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={[
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === active 
                    ? "bg-[#12d576] w-6" 
                    : "bg-white/30 hover:bg-white/50"
                ].join(" ")}
              />
            ))}
          </div>

          <button
            onClick={() => canRight && setActive((v) => v + 1)}
            disabled={!canRight}
            className={[
              "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
              "border-2 backdrop-blur-sm",
              canRight 
                ? "border-[#12d576] bg-[#12d576]/10 text-[#12d576] hover:bg-[#12d576] hover:text-white shadow-lg hover:shadow-[#12d576]/30" 
                : "border-white/20 bg-white/5 text-white/30 cursor-not-allowed"
            ].join(" ")}
          >
            <i className="fa-solid fa-chevron-right text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
