/* Path: secure-d-app-frontend/src/components/navbar/NavbarSmallScreen.jsx */

import { useState } from "react";

export default function NavbarSmallScreen({ handleNavigation, nextPath, darkMode, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-emerald-400" />
          <span className="font-semibold">SecureDApp</span>
        </a>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 hover:text-white">{darkMode ? 'Light' : 'Dark'}</button>
          <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 hover:text-white">
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-64 bg-neutral-950 border-l border-white/10 p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="text-white/70">✕</button>
            </div>
            <nav className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#benefits" onClick={() => setOpen(false)} className="hover:text-white/100 text-white/80">Benefits</a>
              <a href="#services" onClick={() => setOpen(false)} className="hover:text-white/100 text-white/80">Services</a>
              <a href="#faqs" onClick={() => setOpen(false)} className="hover:text-white/100 text-white/80">FAQs</a>
            </nav>
            <button onClick={() => { setOpen(false); handleNavigation(); }} className="mt-auto inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400">
              {nextPath ? 'Open App' : 'Request Quote'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
