import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pop = () => {
  const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setIsOpen(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
      >
        <motion.div
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.95 }}
          className="bg-[#1A2521]/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#4a5568 transparent',
          }}
        >
          <div className="p-6 text-gray-900">
            {/* Custom scrollbar styles */}
            <style jsx>{`
              .overflow-y-auto::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }
              .overflow-y-auto::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 10px;
                margin: 4px;
              }
              .overflow-y-auto::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 10px;
                border: 2px solid transparent;
                background-clip: content-box;
              }
              .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
              }
            `}</style>

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white drop-shadow">Important Notice</h2>
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Close notice"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="border-t border-white/30 mb-4"></div>

            <div className="space-y-6 text-white">
              <section>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">स्टॉकबॉक्स सब्सक्रिप्शन नोटिस</h3>
                <p className="mb-4">
                  स्टॉकबॉक्स सब्सक्रिप्शन प्लान्स के लिए सब्सक्राइब करते समय, कृपया भुगतान केवल स्टॉकबॉक्स टेक्नोलॉजीज प्राइवेट लिमिटेड के अधिकृत कंपनी खाते में ही करें...
                </p>
                <p className="mb-4">
                  स्टॉकबॉक्स टेक्नोलॉजीज अपने ग्राहकों से लाभ साझा नहीं करता...
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">Stockbox Subscription Notice</h3>
                <p className="mb-4">
                  To subscribe to Stockbox Subscription Plans, ensure payments are made...
                </p>
                <p className="mb-4">
                  Stockbox Technologies does not engage in profit sharing...
                </p>
              </section>

              <section className="bg-red-100/20 border border-red-200/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-200 mb-2">⚠️ Fraud Alert</h3>
                <p className="mb-3">
                  We wish to inform our valued clients of recent fraudulent activities...
                </p>
                <p className="mb-3">
                  Please verify all bank details to ensure the recipient's name is <strong>Stockbox Technologies Pvt. Ltd.</strong>...
                </p>
                <p>
                  Stockbox Technologies Pvt. Ltd. is not affiliated with these individuals...
                </p>
              </section>

              <div className="text-right">
                <p className="text-white/80">Best Regards,</p>
                <p className="font-semibold text-white">Stockbox Technologies Pvt. Ltd.</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-[#ebff86] hover:bg-blue-700 font-semibold rounded-lg shadow transition duration-200"
              >
                I Understand
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Pop;
