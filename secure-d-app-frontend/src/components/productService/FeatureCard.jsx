/* Path: secure-d-app-frontend/src/components/productService/FeatureCard.jsx */

export function FeatureCards({ featureData = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featureData.map((item, idx) => (
        <div
          key={(item.header || item.title || 'feature') + idx}
          className="rounded-xl border border-transparent p-6 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-brand hover:border-brandGreen/40 group"
        >
          <h5 className="text-lg font-semibold group-hover:text-brandGreen transition-colors duration-300">{item.header || item.title}</h5>
          {item.description && (
            <div
              className="mt-3 text-sm text-white/80 dark:text-white/80 light:text-gray-600 space-y-1 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:my-1"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
