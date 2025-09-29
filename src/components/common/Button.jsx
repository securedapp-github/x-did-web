/* Path: secure-d-app-frontend/src/components/common/Button.jsx */

export default function Button({ text, onClick, to, className = "", filled = false, blogButton = false }) {
  const hoverClassName = filled
    ? "bg-tertiary text-secondary hover:bg-transparent dark:hover:text-primary"
    : "hover:bg-tertiary hover:text-secondary";

  const shape = blogButton ? "rounded" : "rounded-lg";
  const base = `px-2 py-1 whitespace-nowrap lg:px-4 lg:py-2 border-2 border-tertiary ${shape} ${hoverClassName} ${className}`;

  const handleClick = (e) => {
    if (to) {
      // Allow native navigation via anchor; prevent if we later hook router
      return;
    }
    onClick && onClick(e);
  };

  if (to) {
    return (
      <a href={to} className={base} onClick={onClick}>
        {text}
      </a>
    );
  }
  return (
    <button className={base} onClick={handleClick}>
      {text}
    </button>
  );
}
