/* Path: secure-d-app-frontend/src/data/web3kyc.js */

// Placeholder reviews; replace when real testimonials are available
export const reviews = [
  { text: "SecureX-ID streamlined our onboarding while keeping us compliant.", author: "CTO, DeFi Protocol" },
  { text: "KYC that actually works for Web3.", author: "Founder, NFT Marketplace" },
];

// Benefits (from provided data)
export const benefits = [
  {
    header: "Private by Design",
    description:
      "Leverages Zero Knowledge Proofs (ZKPs) to prove credentials (e.g., age, license) without exposing underlying data. Ensures true anonymity, prevents unnecessary data exposure, and guarantees tamper-proof security.",
    image: "/assets/images/Private_By_Design.png",
  },
  {
    header: "Control and Ownership",
    description:
      "Your Decentralized Identity is fully user-owned and stored in a secure digital wallet. Share credentials selectively with explicit consent, redefining the user–service relationship and putting you in charge of personal data.",
    image: "/assets/images/Control-and-Ownership.png",
  },
  {
    header: "Frictionless Verification",
    description:
      "Say goodbye to repetitive checks and multiple passwords. With Blockchain Authentication, prove once and reuse credentials across services within the SecureX-DID framework for seamless onboarding.",
    image: "/assets/images/Frictionless_Verification.png",
  },
  {
    header: "Unmatched Security",
    description:
      "Identity data is distributed across a decentralized network, removing single points of failure. Secured with cryptography and an immutable blockchain record, ensuring resilience and verifiable protection.",
    image: "/assets/images/Unmatched_Security.png",
  },
];

// Services (from provided data). Descriptions include HTML line breaks.
export const services = [
  {
    header: "Empowering the Individual",
    description: `SecureX-DID fundamentally changes how individuals interact online by giving them full control and ownership of their digital identity. With a single, unified decentralized identity, users can eliminate password fatigue and simplify access to a wide range of services through seamless, passwordless authentication.<br/><br/>
                  Zero Knowledge Proofs enable selective disclosure — prove a specific attribute (like legal age or certification) without exposing unnecessary personal details. Multiple DIDs for different personas prevent tracking and correlation, offering genuine anonymity and privacy-first interactions.`,
  },
  {
    header: "Transforming Business Operations",
    description: `Enterprises gain significant efficiency by accepting pre-verified credentials, dramatically reducing friction and operational overhead in onboarding. By not storing sensitive PII, organizations lower compliance burden and risk exposure across frameworks like GDPR and HIPAA.<br/><br/>
                  Portable, reusable credentials eliminate identity silos and align with zero-trust security. A consistent, secure identity follows the user across systems, improving resilience and reducing single points of failure.`,
  },
  {
    header: "Building a New Identity Layer",
    description: `Built on open standards (W3C DIDs and Verifiable Credentials), SecureX-DID offers SDKs and well-documented APIs for rapid integration. Developers can implement passwordless authentication and privacy-preserving flows without building identity infrastructure from scratch.<br/><br/>
                  Leveraging blockchain authentication unlocks new possibilities — from streamlined KYC and sybil resistance to authenticating digital assets — providing the foundational identity layer for next‑gen dApps and enterprise solutions.`,
  },
  {
    header: "A Vision for Scalable Trust",
    description: `SecureX-DID is a cornerstone for a decentralized trust model. It enables cross-border verification, reduces dependency on intermediaries, and supports safer, more private online experiences. Imagine travelers using digital credentials instead of physical documents, or citizens accessing services securely and anonymously.<br/><br/>
                  Designed for interoperability and broad adoption, SecureX-DID moves us from account-based to verifiable, credential-based interactions — empowering individuals and enabling a more democratic, user-centric digital future.`,
  },
];

// FAQs (provided as nested array). Export flattened array for our component.
export const faqsData = [
  {
    q: "What is Decentralized Identity (DID)?",
    a: "A Decentralized Identity is a unique, user-controlled identifier that doesn't rely on a central company or government to exist. Unlike a traditional identifier like a passport or driver's license, a DID gives you full control over your digital identity. It's a way to prove who you are online without handing over personal data to every website, and you can create as many DIDs as you want for different purposes, preventing user tracking and data correlation.",
  },
  {
    q: "How is SecureX-DID different from a regular login?",
    a: "Traditional logins require you to create a new account and password for every service. This leads to password fatigue and an increased risk of credential theft. SecureX-DID uses a single D**ecentralized Identity** that you own. Instead of typing a password, you use a cryptographic proof to log in, which is a far more secure and efficient method. This process is passwordless, creating a much better user experience and protecting you from common threats like phishing and credential theft.",
  },
  {
    q: "What is a Zero Knowledge Proof (ZKP)?",
    a: "A Zero Knowledge Proof is a powerful cryptographic tool that allows you to prove a statement is true without revealing the information itself. For example, you can prove you are over the age of 21 without showing your date of birth or a photo of your ID. The verifier is convinced that the statement is true, but learns nothing else about you. This technology is a cornerstone of SecureX-DID, ensuring your  digital privacy is protected while still enabling secure and verifiable interactions.",
  },
  {
    q: "How does SecureX-DID protect my data?",
    a: "SecureX-DID does not store your personal data on a central server, which is the primary cause of large-scale data breaches. Instead, your data is stored on your own device in a secure digital wallet. We use a decentralized network and blockchain authentication for identity verification to create a tamper-proof record of credentials without ever holding your sensitive information. This model reduces the risk of mass data breaches and gives you full ownership and control.",
  },
  {
    q: "Is SecureX-DID only for Web3 experts?",
    a: "No. While SecureX-DID is built on Web3 security principles, our mission is to make Self-Sovereign Identity easy for everyone. We provide a simple, user-friendly interface that feels intuitive, and a secure login process that is faster and safer than traditional methods. Our solution is designed for mainstream adoption, ensuring that anyone can benefit from enhanced privacy and control.",
  },
];
