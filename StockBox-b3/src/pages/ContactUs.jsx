import logo from "../assets/logo.png";
import Form from "../components/Form";
import "../components/Css/contact.css";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-10 w-full min-h-screen bg-gradient-to-br from-[#0a1921] to-[#1a2521] relative overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute -top-20 sm:-top-28 -left-20 sm:-left-28 w-64 h-64 sm:w-72 sm:h-72 bg-[#ebff8640] rounded-full blur-xl sm:blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 sm:-bottom-28 -right-20 sm:-right-28 w-64 h-64 sm:w-72 sm:h-72 bg-[#d3f81b40] rounded-full blur-xl sm:blur-3xl animate-pulse delay-200" />

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 md:gap-12 lg:gap-16 z-10 items-center">
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-[40%] xl:w-[35%] text-white space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <div className="group relative">
              <div className="absolute -inset-1 bg-[#1A2521] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={logo}
                alt="Logo"
                className="relative w-36 sm:w-44 md:w-52 lg:w-56 xl:w-60 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold leading-tight">
            Connect With Us
          </h2>

          <div className="space-y-5 md:space-y-6 text-sm sm:text-base">
            <div className="flex flex-col sm:flex-row sm:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="flex justify-center lg:justify-start">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#ebff86] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#ebff86] font-medium mb-1 sm:mb-2">Stockbox Technologies Pvt Ltd.</p>
                <p className="leading-relaxed">
                 Registered Office Address:- 9, Lane No. 3, Doon Enclave Extension,
                  <br />
                  Shimla Bypass Road, Dehradun
                  <br />
                  <span className="text-[#ebff86] font-medium">Uttarakhand – 248171</span>
                </p>
                <p className="leading-relaxed">
                Branch office Address:- Hall No. 7, STPI Building, Plot No.1,
                  <br />
                  IT Park, Sahastradhara Road, Dehradun 
                  <br />
                  <span className="text-[#ebff86] font-medium"> Uttarakhand- 248001</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start pt-2">
              <a
                href="mailto:customercare@stockboxtech.com"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-3 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div className="bg-gradient-to-r from-[#ebff86] to-[#d3f81b] p-1.5 rounded-md">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-[#ebff86] break-all text-sm sm:text-base">customercare@stockboxtech.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-[60%] xl:w-[65%] mt-6 lg:mt-0">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-6 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-center mb-4 md:mb-6 text-transparent bg-gradient-to-r from-[#ebff86] to-[#d3f81d] bg-clip-text">
              Let's Talk
            </h2>

            <Form title="Contact us" />

            <div className="mt-4 md:mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white/90 mb-3 flex items-center justify-center sm:justify-start gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Our Locations
              </h3>
          <div className="flex flex-col md:flex-row gap-6">
  {/* First Map */}
  <div className="flex-1 rounded-xl overflow-hidden shadow-md border border-white/10 aspect-video hover:shadow-lg transition-shadow duration-300">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.99136057951!2d77.98563357556333!3d30.294307574798722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbd7c22aa11%3A0xfded64e3634e17b1!2sStockbox%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743601890768!5m2!1sen!2sin"
      className="w-full h-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>

  {/* Second Map */}
  <div className="flex-1 rounded-xl overflow-hidden shadow-md border border-white/10 aspect-video hover:shadow-lg transition-shadow duration-300">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3442.7990374848214!2d78.08241657556577!3d30.356660774767874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDIxJzI0LjAiTiA3OMKwMDUnMDYuMCJF!5e0!3m2!1sen!2sin!4v1749880617352!5m2!1sen!2sin"
      className="w-full h-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      style={{ border: 0 }}
    />
  </div>
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
