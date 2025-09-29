/* Path: secure-d-app-frontend/src/components/common/BrandLogos.jsx */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const brandLogos = [
  { src: "/assets/images/clients/Zapit.png", alt: "Zapit" },
  { src: "/assets/images/clients/T-hub.png", alt: "T-Hub" },
  { src: "/assets/images/clients/Tenex-Finanace.png", alt: "Tenex Finance" },
  { src: "/assets/images/clients/STPI.png", alt: "STPI" },
  { src: "/assets/images/clients/IFSCA.png", alt: "IFSCA" },
  { src: "/assets/images/clients/gpu.png", alt: "Gpu" },
  { src: "/assets/images/clients/Evolve-AI.png", alt: "Evolve AI" },
  { src: "/assets/images/clients/Cyseck.png", alt: "Cyseck" },
  { src: "/assets/images/clients/CCOE-Telangana.png", alt: "CCOE Telangana" },
  { src: "/assets/images/clients/C3ihub.png", alt: "C3ihub" },
  { src: "/assets/images/clients/Broadridge.png", alt: "Broadridge" },
  { src: "/assets/images/clients/Blits-Estate.png", alt: "Blits Estate" },
  { src: "/assets/images/clients/Amrita-Tbi.png", alt: "Amrite TBI" },
];

const chainsLogos = [
  { src: "/assets/images/chains/alephzero.webp", alt: "alephzero" },
  { src: "/assets/images/chains/Arbitrum.webp", alt: "Arbitrum" },
  { src: "/assets/images/chains/Aurora.webp", alt: "Aurora" },
  { src: "/assets/images/chains/Avalanche.webp", alt: "Avalanche" },
  { src: "/assets/images/chains/Base.webp", alt: "Base" },
  { src: "/assets/images/chains/Binance Smart Chain.webp", alt: "Binance Smart Chain" },
  { src: "/assets/images/chains/BobaNetwork.webp", alt: "BobaNetwork" },
  { src: "/assets/images/chains/Celo.webp", alt: "Celo" },
  { src: "/assets/images/chains/fantom-logo.webp", alt: "fantom-logo" },
  { src: "/assets/images/chains/full-astar-logo.webp", alt: "full-astar-logo" },
  { src: "/assets/images/chains/full-cronos-logo.webp", alt: "full-cronos-logo" },
  { src: "/assets/images/chains/Gnosis.webp", alt: "Gnosis" },
  { src: "/assets/images/chains/ImmutableX.webp", alt: "ImmutableX" },
  { src: "/assets/images/chains/Linea.webp", alt: "Linea" },
  { src: "/assets/images/chains/mint.webp", alt: "mint" },
  { src: "/assets/images/chains/Monad.webp", alt: "Monad" },
  { src: "/assets/images/chains/NEOX.webp", alt: "NEOX" },
  { src: "/assets/images/chains/OP Optimism.webp", alt: "OP Optimism" },
  { src: "/assets/images/chains/opbnbopbnb.webp", alt: "opbnbopbnb" },
  { src: "/assets/images/chains/Optimism.webp", alt: "Optimism" },
  { src: "/assets/images/chains/Polygon zkEVM.webp", alt: "Polygon zkEVM" },
  { src: "/assets/images/chains/Polygon_blockchain_logo.webp", alt: "Polygon_blockchain_logo" },
  { src: "/assets/images/chains/rari.webp", alt: "rari" },
  { src: "/assets/images/chains/Scroll.webp", alt: "Scroll" },
  { src: "/assets/images/chains/Shardeum.webp", alt: "Shardeum" },
  { src: "/assets/images/chains/Sonic.webp", alt: "Sonic" },
  { src: "/assets/images/chains/tezos.webp", alt: "tezos" },
  { src: "/assets/images/chains/Tron.webp", alt: "Tron" },
  { src: "/assets/images/chains/vanarvanar.webp", alt: "vanarvanar" },
  { src: "/assets/images/chains/Viction.webp", alt: "Viction" },
  { src: "/assets/images/chains/zksynclogo.webp", alt: "zksynclogo" },
];

export default function BrandLogos({ type = "brands" }) {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3, slidesToSlide: 1 },
  };

  const list = type === "brands" ? brandLogos : chainsLogos;

  return (
    <div className="brand-logos mt-[20px] w-full md:px-12" style={{ backgroundColor: "#ffffff05" }}>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite
        autoPlay
        autoPlaySpeed={1}
        keyBoardControl={false}
        transitionDuration={8000}
        arrows={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
        customTransition="all 8s linear"
        draggable={false}
        shouldResetAutoplay={false}
      >
        {list.map((brandLogo, index) => (
          <div key={index} className="w-full flex justify-center items-center py-2">
            <img src={brandLogo.src} alt={brandLogo.alt} className="w-auto max-h-[50px]" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
