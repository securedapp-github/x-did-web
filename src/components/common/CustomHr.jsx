/* Path: secure-d-app-frontend/src/components/common/CustomHr.jsx */

export default function CustomHr({ className = "" }) {
  return (
    <div
      style={{
        opacity: 0.2,
        background:
          "linear-gradient(180deg, #A9ACE7 0%, rgba(138, 142, 220, 0.40) 100%)",
      }}
      className={`w-full h-0.5 ${className}`}
    />
  );
}
