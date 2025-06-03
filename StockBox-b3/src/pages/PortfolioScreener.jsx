import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainScreener from "../components/portfolio/MainContent";
import UspScreener from "../components/portfolio/UspScreener";

const PortfolioScreener = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".main", {
      opacity: 0,
      x: -30,
      duration: 0.9,
      ease: "power2.in",
      stagger: 0.4,
    });

    gsap.from(".main1", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.in",
      stagger: 0.2,
    });
  });

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-12 overflow-hidden ">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 lg:mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="main block mb-4">Portfolio</span>
              <span className="main flex items-center justify-center lg:justify-start gap-3">
                <span className="bg-gradient-to-r from-[#ebff86] to-[#ddff32] bg-clip-text text-transparent">
                  Screener
                </span>
              </span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="main1 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                Get a comprehensive evaluation of your portfolio's quality and performance with our{" "}
                <span className="font-semibold text-[#ebff86]">AI-powered analysis tool</span> that 
                delivers actionable insights through sophisticated algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <MainScreener />
        <UspScreener />
      </div>
    </div>
  );
};

export default PortfolioScreener;