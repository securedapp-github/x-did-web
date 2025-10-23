/* Path: secure-d-app-frontend/src/components/common/GetStartedButton.jsx */

import Button from "./Button";

export default function GetStartedButton({ to = "#book", onClick, filled = true, className = "" }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <a href={to} onClick={handleClick} className={className}>
      <Button text="Contact Us" filled={filled} />
    </a>
  );
}
