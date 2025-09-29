/* Path: secure-d-app-frontend/src/components/productService/ProductCard.jsx */

export default function ProductCard({ header, description, buttonText, image }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center text-secondary dark:text-primary rounded-2xl p-6 border border-transparent transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-brandLg hover:!border-[#12d576] active:scale-[0.98]">
      {/* Left: Illustration (no border/background) */}
      <div className="flex justify-center md:justify-start">
        <img src={image} alt="Product" className="w-full md:w-[90%] h-auto transition-transform duration-300 hover:scale-105" />
      </div>
      {/* Right: Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold">{header}</h2>
        {description && (
          <div className="mt-4 text-white/80 dark:text-white/80 light:text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {buttonText && (
          <div className="mt-6">
            <button className="inline-flex items-center rounded-full bg-tertiary px-5 py-2 text-sm font-semibold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
