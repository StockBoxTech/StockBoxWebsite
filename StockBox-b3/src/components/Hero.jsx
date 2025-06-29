import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { MdDownloadForOffline } from "react-icons/md";
import Pop from "./DownloadSection/Pop";


const Hero = () => {
    const navigator = useNavigate();
  gsap.registerPlugin(useGSAP);
  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.from(".container11", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });
    t1.from(".container1", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    t1.from(".container2", {
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power2.in",
    });
    t1.from(".container3", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.in",
    });
    gsap.from(".container4", {
      opacity: 0,
      y: 500,
      duration: 0.8,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      



      <div className="container2 mx-auto px-4">
        <h1
          className="md:text-[75px] text-3xl lg:text-[4.5vw]  text-center  mx-auto leading-tight text-white  font-bold "
          style={{ fontFamily: "plus-jakarta-sans" }}
        >
          Invest Smarter
          <span className="md:block">{""} With Stockbox</span>
      
        </h1>
        <p className="sub-head text-[#ebff86] md:text-[1.6em] flex flex-col items-center justify-center text-center mt-4 md:mt-6 font-semibold">
          <span >SEBI registered I Plans Starts With Rs. 99</span> <span>I Trusted By 70K<sup>+</sup> Users</span> </p>
      </div>
      
      <button onClick={() => navigator("/Download")}
        className="w-[205px]  px-1  h-[48px] sm:h-[56px] 
          bg-[#ebff86] mt-[2px] sm:mt-3 text-gray-700
          text-base sm:text-lg font-semibold rounded-2xl 
          hover:bg-[#e4ebc1] transition-colors duration-1000 container4
          font-[plus-jakarta-sans] shadow-lg   drop-shadow-md"
      >
       <div className="flex items-center justify-center gap-3">
        <p className=" font-bold"> Get Start </p> 
        <svg
  className="w-8 h-8 animate-bounce text-white"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 30 24"
  xmlns="http://www.w3.org/2000/svg"
>
<MdDownloadForOffline className="text-gray-700 h-20 w-40" size={30} />

</svg></div>
        
      </button>
     

    </div>
  );
};

export default Hero;
