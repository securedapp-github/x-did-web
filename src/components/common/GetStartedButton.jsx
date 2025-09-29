/* Path: secure-d-app-frontend/src/components/common/GetStartedButton.jsx */

import Button from "./Button";

export default function GetStartedButton({ to = "#book", onClick, filled = true, className = "" }) {
  return (
    <a href={to} onClick={onClick} className={className}>
      <Button text="Get Started" filled={filled} />
    </a>
  );
}
