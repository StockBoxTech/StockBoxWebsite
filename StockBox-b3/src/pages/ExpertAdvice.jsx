import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainContent from "../components/expert/MainContent";
import USP from "../components/expert/USP";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const ExpertAdvice = () => {
  const navigator = useNavigate();

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // Hero section animations
    gsap.from(".hero-heading", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2
    });

    gsap.from(".rocket", {
      opacity: 0,
      scale: 0.8,
      y: 60,
      rotation: -15,
      duration: 1.2,
      ease: "back.out(1.7)"
    });

    gsap.from(".hero-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4
    });

    // Continuous rocket animation
    gsap.to(".rocket", {
      y: 10,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  });

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-10 overflow-x-hidden">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 mt-20 md:mb-0 mb-5  relative">
        {/* Gradient Background */}
        <div className="absolute inset-0  rounded-3xl -z-10" />
        
        {/* Heading */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight flex md:flex-col justify-center w-full ">
            <span className="hero-heading block mb-4">Expert</span>
            <span className="hero-heading flex items-center gap-4">
              <FontAwesomeIcon icon={faRocket} className="rocket text-4xl md:text-5xl text-[#ebff86]" />
              <span className="relative">
                Advice
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ddff32] to-[#ebff86] rounded-full" />
              </span>
            </span>
          </h1>
          
         
        </div>

        {/* Rocket Section */}
        <div className="flex flex-col items-center md:items-start space-y-8">
          <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 lg:p-10">
            <h2 className="text-lg md:text-xl text-white leading-relaxed">
              Unlock the power of expert investing with personalized stock recommendations, 
              delivered straight to your phone inbox.
            </h2>
            <button
              onClick={() => navigator("/report")}
              className="group relative bg-gradient-to-br from-[#ddff32] to-[#ebff86] hover:from-[#ebff86] hover:to-[#d4ff00]
                        text-black font-semibold py-3 px-6 rounded-lg shadow-2xl hover:shadow-[#ebff86]/30
                        transform transition-all duration-300 hover:-translate-y-1 mt-6 w-full md:w-auto"
            >
              <span className="relative z-10">Get the Performance Report</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <MainContent />
      <USP />
    </div>
  );
};

export default ExpertAdvice;