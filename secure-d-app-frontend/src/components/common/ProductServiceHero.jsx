/* Path: secure-d-app-frontend/src/components/common/ProductServiceHero.jsx */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import GetStartedButton from "./GetStartedButton";
import BrandLogos from "./BrandLogos";

export default function ProductServiceHero({ name, title, tagline, image, cta, onClick }) {
  return (
    <section className="w-full text-secondary dark:text-primary">
      {/* Grid only on hero area */}
      <div className="bg-grid-navy">
        <div className="container mx-auto px-4 lg:px-24 pt-16 lg:pt-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: stacked content */}
            <div className="space-y-4 md:space-y-6">
              {name && (
                <div className="text-sm md:text-base opacity-80">
                  {name}
                </div>
              )}
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl">
                {title}
              </h1>
              {tagline && (
                <p className="text-sm md:text-base opacity-80 max-w-2xl">
                  {tagline}
                </p>
              )}
              <div className="flex items-center gap-2 text-[#FACC15]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <div className="opacity-80">Trusted by more than <b>120+</b> companies</div>
              <div>
                <GetStartedButton to={cta || "#book"} filled onClick={onClick} className="rounded-full" />
              </div>
            </div>

            {/* Right: image, no border */}
            <div className="flex justify-center md:justify-end">
              {image ? (
                <img src={image} alt="hero" className="w-full md:w-[90%] rounded-xl" />
              ) : (
                <div className="aspect-video w-full rounded-xl bg-cardBackgroundLight dark:bg-cardBackgroundDark" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <BrandLogos />
      </div>
    </section>
  );
}
