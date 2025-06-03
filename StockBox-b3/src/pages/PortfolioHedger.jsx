import paper from "/assets/PortfolioBaskets.png";
import headge from "/assets/Andra Cement Ltd.png";
import headge1 from "/assets/Blogs.png";

const PortfolioHedger = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-8 lg:px-16 py-12 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-32">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="text-[#ebff86]">Hedger</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Advanced risk management for sophisticated investors
          </p>
          <button className="bg-[#ebff86]  text-gray-700 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>

        <div className="order-1 md:order-2 relative flex items-center justify-center h-[400px] md:h-[500px]">
          <img
            src={paper}
            alt="Portfolio protection"
            className="object-contain h-full w-full drop-shadow-xl"
          />
        </div>
      </div>

      {/* Protection Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-28">
         <div className="relative flex items-center justify-center h-[400px] bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <img
            src={headge}
            alt="Risk management"
            className="object-contain h-full w-full rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <span className="inline-block bg-[#ebff86]/20 text-[#ebff86] text-sm font-medium py-1 px-3 rounded-full mb-4">
            Risk Management
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            Intelligent Portfolio <span className="text-[#ebff86]">Protection</span>
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Get peace of mind knowing your investments are protected with our
            advanced risk management algorithms designed to mitigate drawdown
            risks and maximize portfolio stability.
          </p>
          <ul className="space-y-4">
            {[
              "Dynamic risk assessment",
              "Real-time market monitoring",
              "Automated hedging strategies",
              "Customizable protection levels"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#ebff86] mr-3">✓</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

       
      </div>

      {/* Advantages Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ebff86]/20 text-[#ebff86] text-sm font-medium py-1 px-3 rounded-full mb-4">
            Why Choose Us
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Key <span className="text-[#ebff86]">Advantages</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our hedging solution provides comprehensive protection with these powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
         

          <div className="grid gap-6">
            {[
              {
                title: "Portfolio Protection",
                content:
                  "Shields against significant losses using advanced algorithms that continuously monitor market conditions and adjust protection levels accordingly.",
                icon: "🛡️",
              },
              {
                title: "Emotion-Free Decisions",
                content: "Algorithm-driven objective risk management eliminates human bias and emotional trading decisions.",
                icon: "🧠",
              },
              {
                title: "Market Fear Advantage",
                content: "Optimized performance during market volatility by capitalizing on fear-driven price movements.",
                icon: "📉",
              },
              {
                title: "Statistical Hedging",
                content: "Sophisticated calculations for optimal coverage based on historical correlations and real-time market data.",
                icon: "📊",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{advantage.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-400">{advantage.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="relative flex items-center justify-center h-[400px] md:h-[650px] bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hidden md:block">
            <img
              src={headge1}
              alt="Hedging benefits"
              className="object-contain h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto md:mt-32 mt-10 mb-16 text-center bg-gradient-to-r from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700/50">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to protect your portfolio?
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get started with our advanced hedging solution today and invest with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#ebff86]  text-gray-700 font-medium py-3 px-8 rounded-lg transition-all duration-300">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-gray-700/50 text-white font-medium py-3 px-8 rounded-lg border border-gray-500 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHedger;