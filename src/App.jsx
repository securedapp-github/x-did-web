/* Path :- secure-d-app-frontend/src/App.jsx */

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Web3KYC from './pages/Web3KYC'
import AccountDeleteRequest from './pages/AccountDeleteRequest'

function App() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Apply theme class to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <div
        className={`App min-h-screen ${
          darkMode
            ? 'dark bg-navy text-foregroundLight'
            : 'bg-white text-foregroundDark'
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={<Web3KYC darkMode={darkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/account-delete-request"
            element={<AccountDeleteRequest darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App