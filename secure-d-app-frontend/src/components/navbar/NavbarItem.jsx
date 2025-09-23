/* Path: secure-d-app-frontend/src/components/navbar/NavbarItem.jsx */

// Dropdowns disabled (per requirement: header without dropdown)
// This component renders a simple top-level nav label as a link or button

export default function NavbarItem({ to = "", children }) {
  const isHash = to?.startsWith("#");
  const onClick = (e) => {
    if (!to) return;
    if (isHash) return; // let anchor behave normally
    if (typeof window !== "undefined") {
      e.preventDefault();
      window.location.href = to;
    }
  };

  return (
    <a
      href={to || "#"}
      onClick={onClick}
      className="py-3 px-2 text-sm text-white/80 hover:text-white"
    >
      {children}
    </a>
  );
}
