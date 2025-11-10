/* Path: secure-d-app-frontend/src/pages/Web3KYC.jsx */

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import MetaTags from "../components/common/MetaTags";
import SectionTitle from "../components/common/SectionTitle";
import ProductServiceHero from "../components/common/ProductServiceHero";
import ProductCard from "../components/productService/ProductCard";
import HowItWorksCard from "../components/productService/HowItWorksCard";
import { FeatureCards } from "../components/productService/FeatureCard";
import Testimonials from "../components/common/Testimonials";
import FAQs from "../components/common/FAQs";
import ContactFormModal from "../components/common/ContactFormModal";

import { services, benefits, faqsData, reviews } from "../data/web3kyc";

function Web3KYC({ darkMode, toggleTheme }) {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div id="top" className="service-container">
      <MetaTags
        data={{
          title: "Blockchain Identity Verification for Secure KYC & Compliance",
          desc: "Secure your business with Blockchain Identity Verification for KYC and compliance. Trusted by 120+ companies in DeFi, NFTs, and crypto exchanges.",
          keywords:
            "Decentralized Identity, Zero Knowledge Proof, Self-Sovereign Identity, Web3 Security, Digital Privacy, Blockchain Authentication, Identity Verification, Data Protection, Secure Login, User Anonymity, KYC, Compliance, Decentralized Finance, NFT Marketplaces, Cryptocurrency Exchanges",
          image: "/assets/images/ServicePages/s5-hero.webp",
        }}
      />

      <div className="bg-grid-navy">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="service">
          <ProductServiceHero
            name={
              <>
                <span className="white-text">SecureX</span>
                <span className="green-x">-DiD: </span>
                <span className="white-text">
                  Proof without exposure decentralised ID solution.
                </span>
              </>
            }
            title="Your Gateway to Compliant and Secure Decentralized World"
            tagline="Your Identity, Your Proof, Your Control."
            image={"/assets/images/ServicePages/s5-hero.webp"}
            service={true}
            onClick={openContact}
          />
        </main>
      </div>
      <section id="benefits" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCard
            header={"What is SecureX-DID?"}
            description={
              "SecureX-DID is a next-generation Decentralized Identity solution powered by Zero Knowledge Proof technology. It gives people and businesses full ownership of their digital identity, removing the risks of centralized logins, data leaks, and password fatigue. With SecureX-DID, you can verify “who you are” without oversharing personal details. This means safer logins, stronger digital privacy, and a foundation for a new era of Web3 security."
            }
            buttonText={"Request Quote"}
            image={"/assets/images/ServicePages/s5-1.webp"}
            onButtonClick={openContact}
          />
        </div>
      </section>

      {/* Why is SecureX-DID Needed? */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            name="Why SecureX-DID?"
            title="Why is SecureX-DID Needed?"
          />
          <div className="mt-6 sm:mt-8">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-cardBgLight dark:bg-cardBgDark p-6 sm:p-8 lg:p-10 transition-all duration-300 cursor-pointer hover:!border-[#12d576] hover:shadow-brandLg hover:-translate-y-2 active:scale-[0.98]">
              <p className="text-white/90 dark:text-white/90 light:text-gray-700 leading-relaxed">
                Today’s digital world is broken when it comes to identity. Every
                new service asks for fresh accounts, passwords, and sensitive
                data; creating huge risks of breaches, identity theft, and user
                tracking. Enterprises carry massive compliance and liability
                burdens by storing personal information they don’t even need.
              </p>
              <p className="mt-4 text-white/90 dark:text-white/90 light:text-gray-700 leading-relaxed">
                SecureX-DID flips this model. By decentralizing identity, it
                eliminates single points of failure, cuts down on redundant
                verifications, and ensures privacy by design. It’s not just a
                product, it’s a shift toward{" "}
                <span className="font-semibold">self-sovereign identity</span>,
                where individuals own their data and businesses can trust
                verified credentials without storing them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Does SecureX-DID Help? */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            name="How it helps"
            title="How Does SecureX-DID Help?"
            description={
              "Purpose-built value for Individuals, Enterprises, and Developers—aligned to privacy-first, passwordless, and standards-based identity."
            }
          />
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <HowItWorksCard
              iconClass="fa-solid fa-user-shield"
              title="For Individuals"
              description={
                "Private by design with selective disclosure using Zero Knowledge Proofs; full control and ownership in your wallet; frictionless, passwordless login that works across services; and no centralized storage—reducing breach risks."
              }
            />
            <HowItWorksCard
              iconClass="fa-solid fa-building"
              title="For Enterprises"
              description={
                "Accelerate onboarding by accepting verified credentials; lower compliance burden by avoiding PII storage; align with zero‑trust and eliminate identity silos with portable credentials that follow users across systems."
              }
            />
            <HowItWorksCard
              iconClass="fa-solid fa-code"
              title="For Developers"
              description={
                "Built on W3C DIDs and Verifiable Credentials for interoperability; SDKs/APIs enable passwordless authentication and privacy‑preserving flows; blockchain authentication supports KYC, sybil resistance, and digital asset verification."
              }
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            name={"Benefits"}
            title="Benefits of SecureX-DID"
            description={
              "SecureX-DID transforms the way you interact online, putting you in complete control. Our Self-Sovereign Identity model is designed for a digital world where data protection is paramount. It shifts power from centralized institutions back to the individual, creating a more secure, efficient, and private online experience."
            }
          />
          <div className="how-it-works-section grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {benefits.map((data) => (
              <HowItWorksCard
                key={data.header}
                image={data.image}
                imageAlt={data.imageAlt || data.header}
                title={data.header}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            name={"Services"}
            title={"Deep Dive into our Services"}
          />
          <div className="features-section mt-8">
            <FeatureCards featureData={services} />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials reviews={reviews} />
        </div>
      </section>

      <section id="faqs" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle name="FAQs" title="Frequently Asked Questions" />
          <div className="mt-8">
            <FAQs faqsData={faqsData} />
          </div>
        </div>
      </section>

      <ContactFormModal
        open={contactOpen}
        onClose={closeContact}
        services={services}
        darkMode={darkMode}
        onSubmit={() => {
          closeContact();
        }}
      />

      <Footer />
    </div>
  );
}

export default Web3KYC;
