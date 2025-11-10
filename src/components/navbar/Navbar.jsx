/* Path: secure-d-app-frontend/src/components/navbar/Navbar.jsx */

import { useState } from "react";
import NavbarLargeScreen from "./NavbarLargeScreen";
import RequestQuoteModal from "../modal/RequestQuoteModal";

export default function Navbar({ darkMode, toggleTheme }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <NavbarLargeScreen 
        handleNavigation={handleNavigation} 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
      />
      <RequestQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        darkMode={darkMode}
      />
    </>
  );
}
