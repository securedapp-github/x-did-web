/* Path: secure-d-app-frontend/src/components/common/SectionTitle.jsx */

export default function SectionTitle({ name, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {name && (
        <p className="text-emerald-400 tracking-wide uppercase text-xs font-semibold opacity-90">{name}</p>
      )}
      {title && (
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
      )}
      {description && (
        <p className="mt-4 text-white/80 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
