/* Path: secure-d-app-frontend/src/components/footer/Footer.jsx */
import { useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import CustomHr from "../common/CustomHr";

const navigationItems = [
  {
    title: "Product",
    items: [
      { name: "Solidity Shield", to: "/solidity-shield" },
      { name: "Secure Watch", to: "/secure-watch" },
      { name: "Audit Express", to: "/auditexpress/home" },
      { name: "Secure Trace", to: "/secure-trace" },
      { name: "Secure Pad", to: "/secure-pad" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Audit", to: "/smart-contract-audit" },
      { name: "Security", to: "/web3-security" },
      { name: "Regulatory Solutions", to: "/crypto-compliance-aml" },
      { name: "Training & Education", to: "/levelup-academy" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", to: "/about" },
      { name: "Authors", to: "/authors" },
      { name: "Media", to: "/media" },
      { name: "Career", to: "https://securedapp.gitbook.io/securedapp-launchpad/careers" },
      { name: "Contact Us", to: "https://securedapp.gitbook.io/securedapp-launchpad/contact-us" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Blogs", to: "/blog" },
      { name: "Audits", to: "/audits" },
      { name: "Vulnerabilities", to: "/solidity-shield-vulnerabilities" },
      { name: "Github", to: "https://github.com/securedapp-github" },
      { name: "Workplace Policy", to: "https://securedapp.gitbook.io/securedapp-launchpad/workplace-policy" },
      { name: "Shipping & Delivery Policy", to: "https://securedapp.gitbook.io/securedapp-launchpad/shipping-and-delivery-policy" },
      { name: "Pricing Policy", to: "https://securedapp.gitbook.io/securedapp-launchpad/pricing-policy" },
      { name: "Cancellation & Refunds", to: "https://securedapp.gitbook.io/securedapp-launchpad/cancellation-and-refund-policy" },
      { name: "Whitepaper", to: "https://securedapp.gitbook.io/securedapp-launchpad" },
    ],
  },
];

const socials = [
  { to: "https://discord.com/invite/pqDC8ddnYQ", icon: <i className="fa-brands fa-discord text-xl"></i> },
  { to: "https://x.com/secure_dapp", icon: (
      <svg width="20" height="20" className="text-black dark:text-white hover:text-tertiary" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
      </svg>
    ) },
  { to: "https://www.linkedin.com/company/securedapp/", icon: <i className="fa-brands fa-linkedin text-xl"></i> },
  { to: "https://telegram.me/securedappcommunity", icon: <i className="fa-brands fa-telegram text-xl"></i> },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  async function subscribe() {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Invalid Email");
      return;
    }
    try {
      const res = await fetch("https://139-59-5-56.nip.io:3443/addSecurewatchUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail: email }),
      });
      if (res.ok) {
        alert("Successfully Subscribed!");
        setEmail("");
      } else {
        alert("Unexpected error! Try again.");
      }
    } catch (e) {
      alert("Unexpected error! Try again.");
    }
  }

  return (
    <footer className="w-full font-nunitoSans text-secondary dark:text-primary">
      <div className="px-4 sm:px-6 lg:px-32 pt-16 sm:pt-24 lg:pt-48 pb-8 sm:pb-12 flex flex-col space-y-12 sm:space-y-16">
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 flex flex-col space-y-2 text-center lg:text-left">
            <div className="text-lg sm:text-xl font-bold">Join our newsletter</div>
            <div className="font-light text-sm sm:text-base">Stay up to date with latest news and updates from SecureDApp</div>
          </div>
          <div className="flex-1 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end">
            <input
              className="py-2 px-4 border w-full sm:flex-1 lg:w-2/3 rounded-xl border-[#A4CDFF] bg-cardBackgroundLight dark:bg-cardBackgroundDark text-sm sm:text-base"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button text="Subscribe" filled onClick={subscribe} />
          </div>
        </div>

        <CustomHr />

        {/* About + Navigation */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          {/* Brand and Social - Mobile First */}
          <div className="flex flex-col items-center lg:items-start lg:flex-1 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="SecureDApp Logo" className="h-6 sm:h-8 w-auto" />
              <span className="text-base sm:text-lg font-semibold tracking-wide">SecureDApp</span>
            </div>
            <div className="flex space-x-4 sm:space-x-5">
              {socials.map((s, idx) => (
                <div key={idx} className="cursor-pointer hover:text-tertiary transition-colors" onClick={() => window.open(s.to)}>
                  {s.icon}
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:flex lg:flex-row lg:space-x-8 xl:space-x-12">
            {navigationItems.map((nav, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-bold text-base sm:text-lg pb-3 sm:pb-4 lg:pb-5">{nav.title}</div>
                <div className="font-light text-sm space-y-2">
                  {nav.items.map((item, j) => (
                    <a key={j} href={item.to} className="block hover:underline hover:text-[#12d576] transition-colors">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <CustomHr />

        {/* Legal Footer */}
        <div className="opacity-70 flex flex-col space-y-4 sm:space-y-2 lg:flex-row lg:justify-between items-center text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
              className="hover:underline hover:text-[#12d576] transition-colors"
            >
              SecureX-DID Privacy Policy
            </a>
            <i className="fa-solid fa-circle text-[8px] hidden sm:block" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://securedapp.gitbook.io/securedapp-launchpad/disclaimer-and-risk-securedapp"
              className="hover:underline hover:text-[#12d576] transition-colors"
            >
              SecureX-DID Terms of Service
            </a>
          </div>
          <div className="text-sm">© {new Date().getFullYear()}, Vettedcode Technologies India Pvt. Ltd.. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
