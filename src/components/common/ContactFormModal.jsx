import { useState } from "react";

export default function ContactFormModal({ open, onClose, services = [], onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [subscribeReports, setSubscribeReports] = useState(false);
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [privacyError, setPrivacyError] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    setFullNameError("");
    setMobileError("");
    setCompanyError("");
    setEmailError("");
    setMessageError("");
    setPrivacyError("");

    const trimmedName = fullName.trim();
    if (!trimmedName) {
      setFullNameError("Compulsary Field");
      hasError = true;
    }

    const trimmedMobile = mobile.trim();
    if (!trimmedMobile) {
      setMobileError("Compulsary Field");
      hasError = true;
    } else {
      const digitsOnly = trimmedMobile.replace(/\D/g, "");
      if (digitsOnly.length !== 10 || /^0+$/.test(digitsOnly)) {
        setMobileError("Invalid mobile number");
        hasError = true;
      }
    }

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setEmailError("Compulsary Field");
      hasError = true;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedEmail)) {
        setEmailError("Invalid email");
        hasError = true;
      }
    }

    const trimmedCompany = companyName.trim();
    if (!trimmedCompany) {
      setCompanyError("Compulsary Field");
      hasError = true;
    }

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      setMessageError("Compulsary Field");
      hasError = true;
    }

    if (!agreePrivacy) {
      setPrivacyError("Please accept the Privacy Policy");
      hasError = true;
    }

    if (hasError) return;

    const payload = {
      fullName: trimmedName,
      mobile: trimmedMobile,
      companyName: trimmedCompany,
      email: trimmedEmail,
      message: trimmedMessage,
      agreePrivacy,
      subscribeReports,
    };
    if (onSubmit) onSubmit(payload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0B1B2B] text-white p-5 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Tell us about your Projects</h3>
          <button aria-label="Close" onClick={onClose} className="text-white/80 hover:text-white text-xl">×</button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (fullNameError) setFullNameError("");
                }}
                className={`w-full rounded-xl bg-transparent border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#12d576] ${
                  fullNameError ? "border-red-400" : "border-white/20"
                }`}
              />
              {fullNameError && <span className="text-xs text-red-400">{fullNameError}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                  if (mobileError) setMobileError("");
                }}
                className={`w-full rounded-xl bg-transparent border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#12d576] ${
                  mobileError ? "border-red-400" : "border-white/20"
                }`}
              />
              {mobileError && <span className="text-xs text-red-400">{mobileError}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  if (companyError) setCompanyError("");
                }}
                className={`w-full rounded-xl bg-transparent border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#12d576] ${
                  companyError ? "border-red-400" : "border-white/20"
                }`}
              />
              {companyError && <span className="text-xs text-red-400">{companyError}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className={`w-full rounded-xl bg-transparent border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#12d576] ${
                  emailError ? "border-red-400" : "border-white/20"
                }`}
              />
              {emailError && <span className="text-xs text-red-400">{emailError}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              rows={4}
              placeholder="Project details"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError) setMessageError("");
              }}
              className={`w-full rounded-xl bg-transparent border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#12d576] ${
                messageError ? "border-red-400" : "border-white/20"
              }`}
            />
            {messageError && <span className="text-xs text-red-400">{messageError}</span>}
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#12d576]" checked={agreePrivacy} onChange={(e) => setAgreePrivacy(e.target.checked)} />
              <span>
                I agree with the <a href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp" className="underline" target="_blank" rel="noreferrer">Privacy Policy</a> and information being used to contact me
              </span>
            </label>
            {privacyError && <div className="text-xs text-red-400">{privacyError}</div>}
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#12d576]" checked={subscribeReports} onChange={(e) => setSubscribeReports(e.target.checked)} />
              <span>Get cyber-security research reports.</span>
            </label>
          </div>

          <div className="pt-2 flex justify-center">
            <button type="submit" className="w-full sm:w-auto px-10 py-3 rounded-xl bg-[#12d576] text-black font-semibold hover:opacity-90 transition-transform hover:-translate-y-0.5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
