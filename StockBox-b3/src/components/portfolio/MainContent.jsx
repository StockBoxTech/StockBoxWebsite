import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import particularTrade from "/assets/particularTrade.png";

const MainScreener = () => {
  gsap.registerPlugin(useGSAP);
  
  useGSAP(() => {
    gsap.to(".man", {
      rotation: [10, -10],
      y: 10,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.from(".para", {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.in",
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".para",
        start: "50% 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="mainContent flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12 max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={particularTrade} 
          alt="Portfolio analysis illustration" 
          className="w-full max-w-md object-contain " 
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 para">
        <ul className="list-disc pl-5 space-y-4 text-white">
          <li>
            <span className="font-bold text-[#ebff86]">Portfolio Screener</span> is an algorithmic tool for evaluating portfolio quality
          </li>
          <li>
            Assesses portfolios using <span className="font-bold text-[#ebff86]">fundamental analysis, valuation metrics, and risk theories.</span>
          </li>
          <li>
            Provides an <span className="font-bold text-[#ebff86]">optimized evaluation report</span> for better decision-making.
          </li>
          <li>
            Generates <span className="font-bold text-[#ebff86]">buy, sell, or hold</span> recommendations.
          </li>
          <li>
            Analysis is based on key risk indicators like <span className="font-bold text-[#ebff86]">portfolio beta and standard deviation.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainScreener;