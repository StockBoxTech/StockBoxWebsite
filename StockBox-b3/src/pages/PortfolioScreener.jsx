import span from "../assets/expert/span.png";
import rocket from "../assets/expert/rocket.png";
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
        <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 overflow-hidden py-12">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-16 lg:mb-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="main block mb-4">Portfolio</span>
                            <span className="main flex items-center gap-4 flex-wrap">
                                <img 
                                    src={span} 
                                    alt="" 
                                    className="w-32 md:w-40 h-auto transition-transform hover:scale-105" 
                                    aria-hidden="true"
                                />
                                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Screener
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <img 
                                src={rocket} 
                                alt="Analytics rocket" 
                                className="w-32 md:w-48 flex-shrink-0 main1 hover:rotate-12 transition-transform" 
                            />
                            <div className="main1">
                                <p className="text-lg md:text-xl text-white leading-relaxed">
                                    Get a comprehensive evaluation of your portfolio's quality and performance with our 
                                    <span className="font-semibold text-blue-300"> AI-powered analysis tool </span> 
                                    that delivers actionable insights through sophisticated algorithms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-8xl mx-20">
                <MainScreener />
                <UspScreener />
            </div>
        </div>
    );
};

export default PortfolioScreener;