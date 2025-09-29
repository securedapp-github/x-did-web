/* Path: secure-d-app-frontend/src/components/modal/RequestQuoteModal.jsx */

import { useState } from "react";

const services = [
  "Dapp Development",
  "Smart Contract Audit",
  "Dapp Security Audit",
  "Token Audit",
  "Web3 KYC",
  "Web3 security",
  "Blockchain Forensic",
  "RWA Audit",
  "Crypto Compliance & AMl",
  "Decentralized Identity (DID)",
  "NFTs Development",
  "DeFi Development",
  "LevelUp Academy",
];

export default function RequestQuoteModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState("");
  const [fullNameWarning, setFullNameWarning] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberWarning, setMobileNumberWarning] = useState("");

  const [selectedService, setSelectedService] = useState("Choose a Service...");
  const [dropDown, setDropDown] = useState(false);

  const [email, setEmail] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const [message, setMessage] = useState("");

  const onFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    if (value.length === 0) {
      setFullNameWarning("* Compulsory Field");
    } else {
      setFullNameWarning("");
    }
  };

  const onMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (value.length === 0) {
      setMobileNumberWarning("* Compulsory Field");
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberWarning("Invalid Mobile Number");
    } else {
      setMobileNumberWarning("");
    }
  };

  const handleSelectedService = (e) => {
    setSelectedService(e.target.value);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const onEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length === 0) {
      setEmailWarning("* Compulsory Field");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setEmailWarning("Invalid Email");
    } else {
      setEmailWarning("");
    }
  };

  const onMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const sendMail = async ({ name, email, mobile, description, service }) => {
    if (name === "" || email === "" || service === "Choose a Service..." || mobile === "") {
      alert("Please fill in the details");
      return;
    } else if (document.getElementById("request-quote-check-privacy").checked === false) {
      alert("Please accept our privacy policy to continue");
      return;
    }
    try {
      const response = await fetch("https://139-59-5-56.nip.io:3443/contactMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          mail: email,
          number: mobile,
          msg: service + "---" + description,
        }),
      });
      if (response.ok) {
        alert("Submitted. Will soon reach out to you!");
        onClose();
      } else {
        alert("Error in sending mail");
      }
    } catch (error) {
      alert("Error in sending mail");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 lg:p-8 m-2 lg:m-0 bg-primary dark:bg-secondary rounded-lg shadow-xl w-full lg:w-5/12 flex flex-col items-center gap-y-8 border border-[#A4CDFF]">
        <div className="w-full flex justify-end items-center">
          <button onClick={onClose} className="cursor-pointer text-xl">
            &times;
          </button>
        </div>
        <div className="text-lg lg:text-2xl font-bold">Tell us about your Projects</div>
        <div className="font-light w-full grid grid-cols-2 lg:gap-y-2 gap-x-2 lg:gap-x-8 text-sm justify-center items-center">
          <div className="flex flex-col items-end justify-start gap-y-2 h-20">
            <input
              value={fullName}
              onChange={onFullNameChange}
              className="py-2 px-4 border w-full rounded-xl border-[#A4CDFF] bg-cardBackgroundLight dark:bg-cardBackgroundDark"
              placeholder="Full Name"
              type="text"
            />
            <div className="text-[#FC5A5A]">{fullNameWarning}</div>
          </div>
          <div className="flex flex-col items-end justify-start gap-y-2 h-20">
            <input
              value={mobileNumber}
              onChange={onMobileNumberChange}
              className="py-2 px-4 border w-full rounded-xl border-[#A4CDFF] bg-cardBackgroundLight dark:bg-cardBackgroundDark"
              placeholder="Mobile Number"
              type="text"
            />
            <div className="text-[#FC5A5A]">{mobileNumberWarning}</div>
          </div>
          <div className="relative flex flex-col gap-y-1 h-20 justify-start">
            <div
              onClick={toggleDropDown}
              className="cursor-pointer py-2 px-4 text-secondary dark:text-primary rounded-xl border border-[#A4CDFF] bg-cardBackgroundLight dark:bg-cardBackgroundDark"
            >
              <div>{selectedService}</div>
              {dropDown && (
                <div className="h-[250px] overflow-y-auto text-sm w-full absolute left-0 text-secondary dark:text-primary rounded border border-[#A4CDFF] bg-primary dark:bg-secondary">
                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className="py-1 lg:py-3 px-4 hover:border border-[#A4CDFF]"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-y-2 h-20">
            <input
              value={email}
              onChange={onEmailChange}
              className="py-2 px-4 border w-full rounded-xl border-[#A4CDFF] bg-cardBackgroundLight dark:bg-cardBackgroundDark"
              placeholder="Email"
              type="email"
            />
            <div className="text-[#FC5A5A]">{emailWarning}</div>
          </div>
          <div className="w-full col-span-2">
            <textarea
              onChange={onMessageChange}
              className="py-2 px-4 w-full rounded border border-[#A4CDFF] bg-cardBackgroundLight dark:bg-cardBackgroundDark"
            />
          </div>
          <div className="flex gap-x-2 col-span-2">
            <input id="request-quote-check-privacy" type="checkbox" />
            <div>
              I agree with the{" "}
              <a
                className="text-[#A4CDFF] font-bold"
                target="_blank"
                rel="noreferrer"
                href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
              >
                Privacy Policy
              </a>{" "}
              and information being used to contact me
            </div>
          </div>
          <div className="flex gap-x-2 col-span-2">
            <input type="checkbox" />
            <div>Get cyber-security research reports.</div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={async () => {
              await sendMail({
                name: fullName,
                email: email,
                number: mobileNumber,
                service: selectedService,
                description: message,
              });
            }}
            className="w-1/4 bg-tertiary text-secondary rounded-lg px-4 py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
