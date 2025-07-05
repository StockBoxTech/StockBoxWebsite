import { useNavigate } from "react-router-dom";
import mockup from "/assets/qr.png";
import { motion } from 'framer-motion';
import { useRef } from "react";

const Trail = () => {
  const navigator = useNavigate();
  const containerRef = useRef(null);

  // Floating animation variants
  const floatVariants = {
    float: {
      y: ["0%", "-5%", "0%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden mb-3"
    >
      {/* Enhanced background with gradient animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -left-20 -top-20 w-[30rem] h-[30rem] rounded-full blur-[100px] "
          animate={{
            x: [0, 20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -right-20 -bottom-20 w-[30rem] h-[30rem] rounded-full blur-[100px] "
          animate={{
            x: [0, -20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content container with staggered animations */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl w-full px-4">
        {/* Mockup image with enhanced animation */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          
            {/* Larger image with proportional scaling */}
            <img 
              src={mockup} 
              alt="App mockup"
              className="md:w-[80%] w-[40%]  "
            />
            {/* Enhanced glow effect */}
            <div className="absolute inset-0  rounded-[50%] blur-2xl -z-10" />
          
        </motion.div>

        {/* Text content with staggered animations */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#97ee8c] to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start Your Free Trial
          </motion.h2>
          
          <div className="space-y-4">
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              With Our All-In-One Platform
            </motion.p>
            <motion.p 
              className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Experience seamless trading and stock analysis with professional-grade tools 
              designed for both beginners and experts. Join thousands of successful investors.
            </motion.p>
          </div>

          <motion.button 
            onClick={() => navigator("/contact-us")}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl bg-gradient-to-r from-[#e3ff59] to-[#DDEE8C] hover:from-[#d5ff02] hover:to-[#e6c120] transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 1 }}
          >
            <span className="relative z-10 text-gray-900">Get Started Now</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
          </motion.button>
          
          {/* Additional benefit text */}
        
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute -bottom-20 left-1/4 w-8 h-8 rounded-full bg-[#97ee8c]/30 blur-xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-400/30 blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Trail;