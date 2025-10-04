// secure-d-app-frontend/src/pages/AccountDeleteRequest.jsx
import { useState } from 'react'

export default function AccountDeleteRequest({ darkMode }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.securexdid.com/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-10">
      {/* Brand Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-red-600">
          SecureX DID
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mt-2">
          Account Deletion Request
        </h2>
      </div>

      {/* Info Text */}
      <p className="mb-6 max-w-lg text-center text-base sm:text-lg">
        Enter your email to request deletion of your account and associated data.  
        We will process your request in line with our data retention policy.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
      >
        <label className="block mb-2 font-medium text-sm sm:text-base">
          Email Address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 mb-4 
          text-white placeholder-white 
          focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent"        />
        <button
          type="submit"
          className="w-full p-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg transition-colors disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Request Deletion'}
        </button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="mt-4 text-green-600 font-medium text-center">
          ✅ Your deletion request has been submitted.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 font-medium text-center">
          ❌ Something went wrong. Please try again later.
        </p>
      )}
       <p className="mb-6 max-w-lg text-center text-base sm:text-lg">
        A confirmation email will be shared with the user before final deletion.     <a
  href="https://docs.google.com/document/d/10Ls61RNto3RhaJr_ovHkJ-DQUNA0_ukA1V1A2Zr87Nw/edit?tab=t.0"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-500 hover:underline"
>
  Privacy Policy
</a>
      </p>
     
    </div>
  )
}
