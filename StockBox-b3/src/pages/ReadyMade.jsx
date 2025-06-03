import art from "/assets/strategy.png";
import ready from "/assets/portfoliobasket.png";
import place from "../assets/ready/place.webp";

const ReadyMade = () => {
  return (
    <div className="ready-made w-full h-full px-4 sm:px-6 lg:px-8 md:py-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row  gap-12">
  {/* Image Section */}
  <div className="relative group overflow-hidden rounded-3xl flex-1 flex justify-center items-center">
    <img 
      src={art} 
      alt="Investment strategy visualization" 
      className="object-contain w-[85%] h-auto p-4 transform group-hover:scale-105 transition-transform duration-500" 
    />
  </div>

  {/* Text Section */}
  <div className="flex-1 space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#dbf169]">
      <span className="block text-gray-200">ReadyMade</span>
      <span className="block">Stockbox</span>
    </h1>
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-tight">
      Get a competitive edge with professionally managed stock baskets
    </h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      Access meticulously curated portfolios optimized by our research team using proven investment models for maximum returns.
    </p>
    <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
      {['Algorithmic Selection', 'Market Adaptation', 'Risk Management'].map((tag, i) => (
        <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>

      </section>

      {/* Value Proposition Section */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Expertly Curated <span className="text-[#ebff86]">Portfolios</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Our Wizard Box/Readymade Stockbox provides access to specially curated baskets of stocks, 
                diligently managed by SEBI-registered research professionals using proven investment models.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We continuously monitor and rebalance these portfolios to adapt to changing market conditions, 
                ensuring optimal performance for your long-term investment goals.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={ready} 
              alt="Stockbox portfolio interface" 
              className=" w-[90%]  rounded-xl  object-contain" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-[#ebff86]">Stockbox</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our comprehensive approach combines professional expertise with cutting-edge technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Complete Transparency",
              content: "Full visibility into performance metrics, holdings composition, and fee structures",
              icon: "🔍"
            },
            { 
              title: "Expert Management",
              content: "SEBI-registered professionals actively monitor and adjust portfolios",
              icon: "👨‍💼"
            },
            { 
              title: "Research-Backed",
              content: "Strategies developed using rigorous fundamental and technical analysis",
              icon: "📊"
            },
            { 
              title: "Smart Technology",
              content: "Automated rebalancing and real-time performance tracking",
              icon: "⚡"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 text-[#ebff86]">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-orange-500/20 to-green-500/20 p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10"></div>
          <div className="relative space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Start your investment journey with
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Professionally Managed Portfolios
              </h1>
              <p className="text-lg text-gray-300">
                Our smallcases are carefully constructed baskets of stocks designed by Stockbox Research Team to help you invest smarter.
              </p>
            </div>
            
            <button 
              className="bg-[#ebff86] hover:to-amber-600 text-gray-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
              onClick={() => window.open('https://stockboxtech.smallcase.com/', '_blank')}
            >
              Explore Portfolios →
            </button>
          </div>

          <div className="relative group flex justify-center">
            <img 
              src={place} 
              alt="Investment performance chart" 
              className="rounded-2xl shadow-xl w-full max-w-md border-2 border-white/10 object-cover transform group-hover:scale-95 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyMade;