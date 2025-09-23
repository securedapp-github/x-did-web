/* Path: secure-d-app-frontend/src/components/productService/HowItWorksCard.jsx */

export default function HowItWorksCard({ image, imageAlt, title, description, iconClass }) {
  return (
    <div className="rounded-lg border border-transparent p-6 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand hover:border-brandGreen/30 group">
      {image ? (
        <img src={image} alt={imageAlt || title} className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110" />
      ) : iconClass ? (
        <div className="h-12 w-12 rounded-full bg-brandGreen/20 text-brandGreen flex items-center justify-center transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <i className={`${iconClass} text-lg`} />
        </div>
      ) : (
        <div className="h-12 w-12 rounded bg-emerald-500 transition-transform duration-300 group-hover:scale-110" />
      )}
      <h4 className="mt-4 text-lg font-semibold group-hover:text-brandGreen transition-colors duration-300">{title}</h4>
      <p className="mt-2 text-sm text-white/70 dark:text-white/70 light:text-gray-600">{description}</p>
    </div>
  );
}
