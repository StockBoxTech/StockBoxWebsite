import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EndSection from "./components/EndSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Aboutus from "./pages/Aboutus";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Blog from "./pages/Blog";
import ExpertAdvice from "./pages/ExpertAdvice";
import PortfolioScreener from "./pages/PortfolioScreener";
import ReadyMade from "./pages/ReadyMade";
import StockScreener from "./pages/StockScreener";
import PortfolioHedger from "./pages/PortfolioHedger";
import Investments from "./pages/Investments";
import ContactUs from "./pages/ContactUs";
import Blogpost from "./pages/Blogpost";
import InvestPage from "./pages/InvestPage";
import Careers from "./pages/Career";
import { Toaster } from "react-hot-toast";
import Media from "./pages/Media";
import Report from "./pages/Report";
import Partnet from "./pages/Partnet";
import ScrollToTop from "./components/Scroll_to_top";
import ShowIpos from "./pages/ShowIpos";
import Privacy from "./pages/Privacy";
import Grievance from "./pages/Grievance";
import Terms from "./pages/Terms";
import Regulatory from "./pages/Regulatory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ResReport from "./pages/ResReport";

const App = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const cursorBorder = document.querySelector(".cursor-border");

    // Smooth cursor movement
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorBorder, {
        x: e.clientX - cursorBorder.offsetWidth / 2,
        y: e.clientY - cursorBorder.offsetHeight / 2,
        duration: 0.15,
        ease: "power1.in",
      });
    });

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, select"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursorBorder, {
          scale: 1.5,
          opacity: 0.8,
          duration: 0.3,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursorBorder, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      });
    });
  }, []);



  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };



  return (
    <div className="min-h-screen font-[plus-jakarta-sans] Display">

<div className="fixed bottom-8 right-8 z-[60] flex  items-end gap-4 ">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/9120031744"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl"
    aria-label="Contact via WhatsApp"
  >
    <FontAwesomeIcon icon={faWhatsapp} size="xl" />
    
  </a>

  {/* Call Button */}
  <a
    href="tel:7217019001"
    className="flex items-center justify-center bg-[#4285F4] hover:bg-[#3367D6] text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl"
    aria-label="Call us"
  >
    <FontAwesomeIcon icon={faPhone} size="xl" />
    
  </a>
</div>


      <Toaster
            position="top-center"
            reverseOrder={false}/>
      <div className=" hidden md:block cursor-border fixed w-10 h-10 rounded-full border border-[#ebff86] pointer-events-none z-50 mix-blend-difference backdrop-blur-sm "></div>
      <div className="">
        <Router>  {" "}
        {/* Container  lg:mx-[140px] md:mx-[10px]*/}
        <ScrollToTop />
        <header className="h-16">
          <Navbar />
        </header>
        <main className="mt-1 ">
      
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Download" element={<Download />} />
            <Route path="/about-us/" element={<Aboutus />} />
            <Route path="/blogs/" element={<Blog/>} />
            <Route path="/expert-advice/" element={<ExpertAdvice/>} />
            <Route path="/portfolio-screener/" element={<PortfolioScreener/>} />
            <Route path="/readymade-stockbox/" element={<ReadyMade/>} />
            <Route path="/stock-screener/" element={<StockScreener/>} />
            <Route path="/portfolio-hedger/" element={<PortfolioHedger/>} />
            <Route path="/fii-dii-investments/" element={<Investments/>} />
            <Route path="/contact-us/" element={<ContactUs/>} />
            <Route path="/blogpost/:id" element={<Blogpost />} />
            <Route path="/investor-charter/" element={<InvestPage/>} />
            <Route path="/careers/" element={<Careers/>} />
            <Route path="/media/" element={<Media/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="partner-with-us/" element={<Partnet/>}/>
            <Route path="/comapny-ipos" element={<ShowIpos/>}/>
            <Route path="/privacy-policy/" element={<Privacy/>}/>
            <Route path='/grievancepolicy/' element={<Grievance/>}/>
            <Route path="/terms-conditions/" element={<Terms/>}/>
            <Route path="/regulatory-details/"element={<Regulatory/>}/>
            <Route path="/researchReport" element={<ResReport/>}/>

          </Routes>
        </main>
        <footer>
          <EndSection />
        </footer>
        </Router>
      </div>
    </div>
  );
};
export default App;
