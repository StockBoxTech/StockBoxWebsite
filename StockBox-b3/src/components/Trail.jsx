import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup.svg";

const Trail = () => {
  const navigator = useNavigate();

  return (
    <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0C0C] to-[#0E0C0C] py-16 md:py-24">
      {/* Mockup Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 md:opacity-100">
        <img 
          src={mockup} 
          alt="App mockup"
          className="h-auto w-full max-w-4xl translate-x-[15%] scale-125 transform object-cover md:translate-x-0 md:scale-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Start Your Free Trial
          </span>
          <br />
          <span className="text-white">With Our All-In-One Platform</span>
        </h2>

        {/* Subtext */}
        <div className="mb-8 max-w-2xl text-lg text-gray-300 md:mb-12 md:text-xl">
          <p className="mb-3">
            Experience seamless trading and comprehensive stock analysis
          </p>
          <p>
            Get started with zero commitment - no credit card required
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => navigator("/contactus")}
          className="group relative transform rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20"
        >
          <span className="relative z-10">
            Get Started Now
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
        </button>

        {/* Additional Text */}
        <p className="mt-4 text-sm text-gray-400">
          Full access to all features for 14 days
        </p>
      </div>
    </div>
  );
};

export default Trail;