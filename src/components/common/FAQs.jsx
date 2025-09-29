/* Path: secure-d-app-frontend/src/components/common/FAQs.jsx */

import { useState } from "react";

export default function FAQs({ faqsData = [] }) {
  const [active, setActive] = useState(null);

  const toggle = (idx) => {
    setActive(active === idx ? null : idx);
  };

  return (
    <div id="faqs" className="space-y-3 sm:space-y-4">
      {faqsData.map((faq, idx) => (
        <div 
          key={idx} 
          className={`rounded-xl sm:rounded-2xl border transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.005] sm:hover:scale-[1.01] ${
            active === idx 
              ? "border-[#12d576] bg-[#12d576]/10 shadow-lg shadow-[#12d576]/20" 
              : "border-white/10 bg-white/5 hover:border-[#12d576]/50"
          }`}
        >
          <button
            onClick={() => toggle(idx)}
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left rounded-xl sm:rounded-2xl transition-all duration-300 ${
              active === idx 
                ? "text-white" 
                : "hover:bg-white/10"
            }`}
          >
            <span className="font-semibold text-sm sm:text-base pr-4">{faq.q}</span>
            <span 
              className={`text-lg sm:text-xl font-bold transition-all duration-300 flex-shrink-0 ${
                active === idx 
                  ? "text-[#12d576] rotate-45 scale-110" 
                  : "text-white/60 hover:text-[#12d576]"
              }`}
            >
              +
            </span>
          </button>
          {active === idx && (
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2 text-white/90 dark:text-white/90 light:text-gray-700 text-xs sm:text-sm leading-relaxed animate-fade-in">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
