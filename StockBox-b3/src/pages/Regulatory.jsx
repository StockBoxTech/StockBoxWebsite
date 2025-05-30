import React from 'react';

const Regulatory = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Regulatory Information</h1>
      </header>

      <div className="prose prose-indigo max-w-none">
        {/* Contact Details Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Contact Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Company Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">Name:</span> Stockbox Technologies Private Limited
                </li>
                <li>
                  <span className="font-medium">Type of Registration:</span> Non-individual
                </li>
                <li>
                  <span className="font-medium">Registration number:</span> INH100008799
                </li>
                <li>
                  <span className="font-medium">Registration Validity:</span> October 07, 2026
                </li>
                <li>
                  <span className="font-medium">Contact Number:</span> +91-135-3506155
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700">
                Stockbox Technologies Pvt Ltd.<br />
                9, Lane No. 3, Doon Enclave Extension,<br />
                Shimla Bypass Road, Dehradun,<br />
                Uttarakhand – 248171
              </p>
            </div>
          </div>
        </section>

        {/* SEBI Information */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">SEBI Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Regional Office</h3>
              <p className="text-gray-700">
                2nd Floor, Garhwal Mandal Vikas Nigam Building,<br />
                74/1, Rajpur Road,<br />
                Dehradun – 248 001<br />
                <span className="font-medium">Phone:</span> 0135-2740725
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Head Office</h3>
              <p className="text-gray-700">
                SEBI Bhavan BKC<br />
                Plot No.C4-A, 'G' Block<br />
                Bandra-Kurla Complex, Bandra (East),<br />
                Mumbai – 400051, Maharashtra<br />
                <span className="font-medium">Tel:</span> +91-22-26449000 / 40459000<br />
                <span className="font-medium">Fax:</span> +91-22-26449019-22 / 40459019-22<br />
                <span className="font-medium">Toll Free Investor Helpline:</span> 1800 22 7575
              </p>
            </div>
          </div>
        </section>

        {/* Principal Officer */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Principal Officer</h2>
          
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">Name:</span> Radhey Shyam Chauhan
              </li>
              <li>
                <span className="font-medium">Contact Number:</span> 9997098943
              </li>
              <li>
                <span className="font-medium">Email ID:</span> 
                <a href="mailto:rschauhan@stockboxtech.com" className="text-blue-600 hover:underline ml-1">
                  rschauhan@stockboxtech.com
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Warning and Disclaimer */}
        <section className="mb-10">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  <span className="font-bold">Warning:</span> "Investment in securities market are subject to market risks. Read all the related documents carefully before investing."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-bold">Disclaimer:</span> "Registration granted by SEBI & BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
                </p>
                <p className="text-sm text-yellow-700 mt-2">
                  "The securities displayed are for illustration only and are not recommendatory"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Regulatory;