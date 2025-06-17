import graphic from"../../assets/aboutus/graphic.png"
import stock from "../../assets/aboutus/stock.png"
import { Ball2, Ball3 } from "../../assets/aboutus/SVG/Ball"
import Design from "../../assets/aboutus/SVG/Design"

import Management from "./Management"
import "../Css/vision.css"


const Vision = () => {
  return (
    <div className="relative ">

 
   <div className=" w-full h-auto  flex mt-25  overflow-x-hidden md:ml-[6em] ml-[2em]">  
           
           <div className=" flex flex-col relative overflow-x-hidden">
             
           <div className="w-[85%]  max-w-md bg-gradient-to-r from-[#ebff86]/20 to-[#ebff86]/10 rounded-xl p-4 flex items-center gap-4 mb-8  lg:mx-0 border border-[#ebff86]/30 backdrop-blur-sm">
  <div className="bg-[#ebff86] p-3 rounded-lg">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  </div>
   <h2 className="font-bold lg:text-[30px] text-[20px] text-white"><span>Vision </span>& Mission</h2>
</div>

          
               <p className=" mt-5 space-y-2 text-white list-none lg:text-[16px]  w-[90%] relative z-10">
               Our vision is to be the leading provider of comprehensive, data-driven stock market research and analytics that empowers investors with the insights and knowledge they need to make informed investment decisions. We aim to deliver innovative solutions and cutting-edge technology, coupled with our team’s deep expertise and commitment to excellence, to drive superior outcomes for our clients. Through our relentless focus on delivering actionable insights and exceptional customer service, we aspire to be the trusted partner of choice for investors seeking to maximize their returns in the dynamic world of stock market investing.
               
               </p>
                <img src={graphic} className="absolute md:right-[25%] md:top-[25%] -bottom-20 right-[10%] hidden md:block"/>
             </div>
              
               <img src={stock} alt="no img" className="w-[26%] z-10  hidden md:block"/>
             
         </div>
         
         <div className="">
          
        
       
         <div className="management-title">
  <h2 className="neon-text">
    <span className="neon-underline text-center w-full">
      Meet The Management Team
    </span>
  </h2>
</div>
       {/*blue topp fund */}
        <div className="absolute   z-10 top-[78em] ball1 hidden lg:block">
          <Ball3 className=""/>
        </div>
        {/*  orange ceo */}
        <div className="absolute  md:right-[10%]  ball hidden lg:block">
          <Ball2 className="ball " />
        </div>
        {/*  orng senior*/} 
        <div className="absolute   top-[225em] right-0  ball1 hidden lg:block">
          <Ball2 className=""/>
        </div>


               {/* hr blue */}
        <div className="absolute  ball top-[130em]  right-0 hidden lg:block">
          <Ball2 className="" />
        </div>
        <div className="absolute  left-0 top-[190em]  z-10  ball1 hidden lg:block">
          <Ball3 className=""/>
        </div>
      </div>
         <Management/>
         
        
        
         </div>
  )
}

export default Vision
