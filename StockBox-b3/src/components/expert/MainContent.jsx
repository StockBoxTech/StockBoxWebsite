import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import man from "/assets/TradeHUDC.png";

const MainContent = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  
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
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="mainContent flex flex-col md:flex-row items-center justify-between px-4 md:px-8 md:py-6">
      {/* Image Container - Reduced height */}
      <div className="w-full md:w-[45%] flex justify-center mb-6 md:mb-0">
        <img 
          src={man} 
          alt="Investment platform interface" 
          className=" w-[90%]  h-auto object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="para w-full md:w-[50%] text-white text-base md:text-lg">
        <ul className="list-disc pl-5 space-y-2 md:space-y-3">
          <li>
            <span className="font-bold text-amber-100">Smart Investing Made Easy:</span> 
            No need to track market trends—our tool does it for you!
          </li>
          <li>
            <span className="font-bold text-amber-100">Expert Stock Picks:</span> 
            Get curated stock recommendations directly on your smartphone.
          </li>
          <li>
            <span className="font-bold text-amber-100">Perfect for All Investors:</span> 
            Ideal for both beginners and experienced traders.
          </li>
          <li>
            <span className="font-bold text-amber-100">Timely & Reliable:</span> 
            Receive expert-backed insights for informed decisions.
          </li>
          <li>
            <span className="font-bold text-amber-100">Customizable & User-Friendly:</span> 
            Set preferences based on your investment goals.
          </li>
          <li>
            <span className="font-bold text-amber-100">Maximize Returns, Save Time:</span> 
            Focus on profits while we handle the research.
          </li>
          <li>
            <span className="font-bold text-amber-100">Join & Invest Smarter:</span> 
            Subscribe now for high-growth stock recommendations!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;