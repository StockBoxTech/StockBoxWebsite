import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import portfoliobasket from "/assets/portfoliobasket.png";

gsap.registerPlugin(ScrollTrigger);

const UspScreener = () => {
  useGSAP(() => {
    gsap.from(".usp-point", {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".usp-container",
        start: "top 70%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".usp-image", {
      opacity: 0,
      x: 30,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".usp-container",
        start: "top 70%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="usp-container  py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 md:justify-between w-full">

          <div className="w-full md:w-1/2 flex justify-center usp-image md:hidden">
          <img 
            src={portfoliobasket} 
            alt="Portfolio analysis dashboard" 
            className="w-full max-w-[500px] rounded-xl " 
          />
        </div>
        {/* Text content - now appears first on mobile */}
        <div className="w-full md:w-1/2 usp-content">
          <h2 className="font-bold text-2xl md:text-3xl mb-6 text-white">
            Key Features of Our Portfolio Screener
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-white text-base md:text-lg">
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">Comprehensive Evaluation:</span> Generates detailed portfolio assessment reports
            </li>
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">Smart Recommendations:</span> Suggests selling underperforming stocks and better alternatives
            </li>
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">Optimized Results:</span> Shows final report after proposed portfolio changes
            </li>
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">User-Friendly:</span> Simple interface requiring just a few steps
            </li>
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">Fast Processing:</span> Produces evaluation reports quickly
            </li>
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">Objective Analysis:</span> Free from personal bias using algorithmic approach
            </li>
            <li className="usp-point">
              <span className="font-semibold text-[#ebff86]">Data-Driven:</span> Pure logic-based calculations without human intervention
            </li>
          </ul>
        </div>

        {/* Image - appears second on mobile */}
        <div className="w-full md:w-1/2 flex justify-center usp-image hidden md:block">
          <img 
            src={portfoliobasket} 
            alt="Portfolio analysis dashboard" 
            className="w-full max-w-[400px] rounded-xl " 
          />
        </div>
      </div>
    </div>
  );
};

export default UspScreener;