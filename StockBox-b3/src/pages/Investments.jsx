import span from "/assets/FI&DI.png";
import pc from "/assets/Notification.png";
import { useNavigate } from "react-router-dom";

const Investments = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full min-h-screen px-4 md:px-8 lg:px-16 py-12 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
           <div className="md:w-1/2 flex justify-center">
            <img 
              src={span} 
              alt="Market trends" 
              className="w-full max-w-lg object-contain rounded-xl shadow-xl" 
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block bg-[#ebff86]/20 text-[#ebff86] text-sm font-medium py-1 px-3 rounded-full mb-4">
              Institutional Insights
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  mb-6 leading-tight">
              <span className="block mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FII/DII
              </span>
              <span className="text-[#ebff86]">Investments</span>
            </h1>
            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 lg:p-10">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Unlock the power of expert investing with personalized stock recommendations, delivered straight to your phone inbox.
            </p>
            <button 
              className="bg-[#ebff86]  text-gray-800 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate("/Download")}
            >
              Get Started
            </button></div>
          </div>
         
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
           <div className="order-1 md:order-2 relative group overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-6 hidden md:block">
            <img 
              src={pc} 
              alt="Investment dashboard" 
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-all duration-300" 
            />
          </div>
          <div className="order-2 md:order-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Institutional <span className="text-[#ebff86]">Activity</span> Tracking
            </h3>
            <p className=" text-gray-300 leading-relaxed">
              Analyze the daily activity of domestic and foreign institutional investors in the Indian stock market. Enjoy efficient monitoring and tracking of market trends, aiding in informed investment decisions.
            </p>
            <div className="space-y-4">
              {[
                "Real-time institutional investment data",
                "Historical trend analysis",
                "Sector-wise investment breakdown",
                "Customizable alerts and notifications"
              ].map((item, index) => (
                <div key={index} className="flex items-start ">
                  <span className="text-[#ebff86] mr-3 mt-1">•</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
         
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto mb-28">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#ebff86]/20 text-[#ebff86] text-sm font-medium py-1 px-3 rounded-full mb-4">
              Powerful Features
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key <span className="text-[#ebff86]">Advantages</span>
            </h3>
            <p className=" text-gray-300 max-w-3xl mx-auto">
              Our institutional tracking provides comprehensive market insights with these powerful features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Track Market Movers",
                content: "Monitor actions of big bulls & bears in the market with detailed analytics",
                icon: "📈"
              },
              {
                title: "FII & DII Data Access",
                content: "Comprehensive analysis of domestic and foreign investor activity across all sectors",
                icon: "🌐"
              },
              {
                title: "Daily Insights",
                content: "Stay updated on market trends with real-time investment data and alerts",
                icon: "🔔"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent   hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-400">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/5 to-transparent  p-8 md:p-12 rounded-2xl border border-gray-700/50">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Investment Strategy?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Gain institutional-grade insights and make smarter investment decisions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-[#ebff86] hover:bg-orange-600 text-gray-800 font-medium py-3 px-8 rounded-lg transition-all duration-300"
              onClick={() => navigate("/Download")}
            >
              Subscribe Now
            </button>
            <button 
              className="bg-transparent hover:bg-gray-700/50 text-white font-medium py-3 px-8 rounded-lg border border-gray-500 transition-all duration-300"
              onClick={() => navigate("/Features")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;