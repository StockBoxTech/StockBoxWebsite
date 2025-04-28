import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup.svg";

const Trail = () => {
  const navigator = useNavigate();

  return (
    <div className="flex relative text-white h-full bg">
      {/* Animated Image */}
      <img 
        src={mockup} 
        width="20%" 
        className="absolute animate-float hover:animate-pulse" 
        alt="App mockup"
        style={{
          animationDuration: '6s',
          transition: 'all 0.3s ease'
        }}
      />
      
      <div className="flex flex-col w-full items-center mb-20 relative">
        <h2 className="font-bold mb-4 text-3xl lg:text-5xl">Start Your Free Trial</h2>
        <div className="text-neutral-400 mb-4 text-sm flex flex-col justify-center items-center">
          <p>With Our All-In-One Setup</p>
          <p>Trading And Stock Analysis Are Seamless</p>
        </div>
        <p className="text-neutral-300 text-sm">Start Your Free Trial</p>
        <button 
          className="bg-white hover:scale-105 hover:bg-orange-400 hover:text-white text-black font-semibold py-2 pointer px-4 rounded-full mt-4"
          onClick={() => navigator("/contact-us")}
        >
          Get Start
        </button>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .hover\:animate-pulse:hover {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Trail;