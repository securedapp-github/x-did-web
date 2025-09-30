/* Path: secure-d-app-frontend/src/components/navbar/NavbarLargeScreen.jsx */

import { navItems } from "./navItems";

export default function NavbarLargeScreen({ handleNavigation, nextPath, darkMode, toggleTheme }) {
  return (
    <header className="w-full font-nunitoSans text-secondary dark:text-primary">
      <div className="container mx-auto px-6 lg:px-10 py-4 lg:py-6 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="SecureDApp" className="h-9 w-auto" />
            <span className="text-base md:text-lg font-semibold tracking-wide">SecureDApp</span>
          </a>
        </div>

        {/* Center: Pill nav - Only visible on lg+ screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <nav>
            <div className="rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2">
              <ul className="flex items-center gap-3 text-[0.95rem] leading-none">
                {navItems.map((group) => (
                  <li key={group.label}>
                    <a
                      href={group.to || "#"}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <span className="opacity-90">{group.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Right: Controls - Always on the right */}
        <div className="flex-shrink-0 flex items-center gap-4">
          {/* Theme icon button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-cardBorderColorLight dark:border-cardBorderColorDark hover:bg-cardBackgroundLight dark:hover:bg-cardBackgroundDark transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={`${darkMode ? "fa-regular fa-moon" : "fa-regular fa-sun"} text-base`} />
          </button>
          {/* Login outlined button */}
          <a
            href="https://client.securexdid.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium border border-[#12d576] text-[#12d576] hover:bg-[#12d576]/10 transition-colors min-w-[80px] h-10"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
