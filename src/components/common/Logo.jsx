/* Path: secure-d-app-frontend/src/components/common/Logo.jsx */

export default function Logo({ isLeft = false, className = "" }) {
  return (
    <a href="/" className={`inline-flex items-center ${className}`}>
      <img
        src="/assets/logo.png"
        alt="SecureDApp Logo"
        className="h-8 w-auto"
      />
    </a>
  );
}
