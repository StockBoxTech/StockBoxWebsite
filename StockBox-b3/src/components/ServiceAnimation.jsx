import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import backLight from "../assets/backlight.png";
import HandImage from "/assets/HandImage.png";
import { useGSAP } from "@gsap/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faChartLine,
  faBookOpen,
  faClipboardCheck,
  faUsers,
  faShieldAlt,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ServiceAnimation = () => {
  const Data = {
    Set1: {
      icons: [faLightbulb, faChartLine, faBookOpen],
      titles: [
        "Knowledge and Expertise",
        "Comprehensive Market Coverage",
        "Investment Strategy",
      ],
      infos: [
        "Stockbox analysts have deep expertise in the stock market, investment strategies, and financial analysis, backed by strong education and experience.",
        "We provide extensive market and sector coverage, aligning with clients’ investment goals through in-depth analysis and trend evaluation.",
        "Our approach is scientific, relying on disciplined, systematic investment strategies rather than speculation or market hype.",
      ],
    },
    Set2: {
      icons: [faClipboardCheck, faUsers, faShieldAlt, faCogs],
      titles: [
        "In-depth Analysis and Insights",
        "Access to the Team",
        "Track Record",
        "Customizable Solutions",
      ],
      infos: [
        "Beyond data, our research includes insightful analysis and interpretations, helping investors make informed decisions and stay ahead.",
        "We offer customized research solutions tailored to individual investment needs, ensuring personalized support and guidance.",
        "Our analysts have a proven track record of delivering accurate and profitable investment recommendations.",
        "We provide clear, concise communication and personal support, ensuring expert guidance on investments and portfolio management.",
      ],
    },
  };

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.from(".service-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="min-h-screen  md:py-20 px-4 ">
      {/* Desktop View */}
      <h2 className="text-center text-white text-[4em] hidden lg:block pb-10">
        Trusted by Thousands of Investors
      </h2>
      <div className="hidden lg:flex max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-1/2 sticky top-30 h-[calc(100vh-160px)] flex items-center justify-center mt-5">
          <div className="relative w-full max-w-xl flex flex-col items-center">
            {/* Animated background elements */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Floating light effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="absolute w-[600px] h-[600px] rounded-full bg-[#cef702] opacity-20 blur-[100px]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Pulsing backlight */}
              <motion.img
                src={backLight}
                alt="background"
                className="absolute w-[90%]  opacity-80 z-10"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating phone with depth effect */}
              {/* Floating phone with depth effect */}
              <motion.div
                className="absolute z-30 flex items-center justify-center h-[140%] mt-40 mr-20"
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={HandImage}
                  className="h-full object-contain"
                  alt="Smartphone mockup"
                />
              </motion.div>

              {/* Glow effect behind phone */}
              <div className="absolute z-20 w-[320px] h-[640px]  rounded-[60px] opacity-10 blur-[40px] mt-2" />
            </div>

            {/* Animated title */}
            <motion.h2
              className="text-center text-[2.5rem] font-bold mt-8  bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            >
              Premium Investment Insights
            </motion.h2>

            <motion.p
              className="text-white text-center mt-4 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
            >
              Access expert analysis and real-time market intelligence
            </motion.p>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-1/2 pl-16 space-y-24 pt-20">
          {Object.keys(Data).map((key, index) => (
            <motion.div
              key={index}
              className="space-y-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
            >
              {Data[key].titles.map((title, titleIndex) => (
                <motion.div
                  key={titleIndex}
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-[#424242] to-[#2a302e] hover:bg-[#DDEE8C] transition-all duration-300 shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: titleIndex * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-[#8a8888] to-[black] group-hover:rotate-[15deg] transition-transform">
                      <FontAwesomeIcon
                        icon={Data[key].icons[titleIndex]}
                        className="text-white text-2xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed">
                        {Data[key].infos[titleIndex]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trusted by Thousands of Investors
        </motion.h1>

        <div className="space-y-12 px-4">
          {Object.keys(Data).map((key, index) => (
            <div key={index} className="space-y-8">
              {Data[key].titles.map((title, titleIndex) => (
                <motion.div
                  key={titleIndex}
                  className="p-6 rounded-xl bg-gray-800 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: titleIndex * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-[#9812db]">
                      <FontAwesomeIcon
                        icon={Data[key].icons[titleIndex]}
                        className="text-white text-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-white text-sm ">
                        {Data[key].infos[titleIndex]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAnimation;
