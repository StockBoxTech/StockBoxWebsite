import React from 'react';

const Grievance = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Grievance Policy</h1>
      </header>

      <div className="prose prose-indigo max-w-none">
        {/* Background Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Background</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-medium">1.1</span> The terms &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to Stockbox Technologies Private Limited.
            </p>
            <p>
              <span className="font-medium">1.2</span> &quot;Service&quot; refers to the offerings provided by the Company as described in the Terms of Use.
            </p>
            <p>
              <span className="font-medium">1.3</span> &quot;You&quot; denotes the user or subscriber of our Site or Service.
            </p>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Objectives of the Policy</h2>
          <div className="space-y-3 text-gray-700">
            <p>The Company recognizes the importance of resolving complaints from Users or Subscribers (&quot;Users&quot;) in an efficient and timely manner.</p>
            <p>Ensuring User satisfaction is a priority for the Company. To facilitate effective communication, it is essential to provide Users with a clear channel to voice their concerns. To enhance the User experience, the Company has established and implemented this Grievance Redressal Mechanism.</p>
          </div>
        </section>

        {/* Support Process Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Process to Avail Support</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-medium">3.1</span> While the Company strives to provide seamless services, Users are advised to submit any complaints in writing if issues arise.
            </p>
            
            <div>
              <p className="font-medium">3.2</p> Users can use the following touchpoints to register complaints:
              <ul className="list-disc pl-5 mt-2">
                <li className="mt-1">
                  <span className="font-medium">3.2.1 Email</span><br/>
                  Users may send their complaints to <a href="mailto:grievance@stockboxtech.com" className="text-blue-600 hover:underline">grievance@stockboxtech.com</a>. Complaints submitted via email will be acknowledged promptly, and a complaint registration number (&quot;ticket ID&quot;) will be issued.
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium">3.3</p> Important Conditions for Addressing Complaints
              <p className="font-medium mt-2">3.3.1</p> Complaints must meet the following requirements:
              <ul className="list-disc pl-5 mt-2">
                <li className="mt-1">
                  <span className="font-medium">3.3.1.1</span> Emails must be sent from the User&apos;s registered email address as recorded with the Company.
                </li>
                <li className="mt-1">
                  <span className="font-medium">3.3.1.2</span> The User must include their full name and registered mobile number in the complaint.
                </li>
                <li className="mt-1">
                  <span className="font-medium">3.3.1.3</span> The complaint must clearly state the specific issue related to the Service platform.
                </li>
                <li className="mt-1">
                  <span className="font-medium">3.3.1.4</span> Anonymous complaints will not be entertained.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Grievance Redressal Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Grievance Redressal</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-medium">4.1</span> If a User is dissatisfied with the resolution provided or receives no response within two weeks, they may escalate the matter by contacting the Grievance Officer via email at <a href="mailto:grievance@stockboxtech.com" className="text-blue-600 hover:underline">grievance@stockboxtech.com</a> or postal mail at:
            </p>
            
            <div className="bg-white p-4 rounded-md border border-gray-200">
              <p className="font-medium">Contact Person Name: <span className="font-normal">Shushant Singh</span></p>
              <p className="font-medium mt-1">Address: <span className="font-normal">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</span></p>
              <p className="font-medium mt-1">Contact No.: <span className="font-normal">0135-3506155</span></p>
              <p className="font-medium mt-1">Email-Id: <a href="mailto:grievance@stockboxtech.com" className="text-blue-600 hover:underline font-normal">grievance@stockboxtech.com</a></p>
              <p className="font-medium mt-1">Working hours when complainant can call: <span className="font-normal">10:30AM – 5:30PM, MONDAY-FRIDAY</span></p>
            </div>
            
            <p>
              <span className="font-medium">4.2</span> When escalating a grievance, Users must quote the complaint number (&quot;ticket ID&quot;) from their earlier communication to facilitate resolution.
            </p>
            <p>
              <span className="font-medium">4.3</span> The Grievance Officer will take appropriate steps to address the grievance within 30 days of receiving it.
            </p>
            <p>
              <span className="font-medium">4.4</span> If the User does not respond within 10 days after receiving a resolution from the Company, the grievance will be considered resolved and closed.
            </p>
          </div>
        </section>

        {/* Compliance Reporting Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Grievance Compliance Reporting</h2>
          <p className="text-gray-700">
            The Grievance Officer will compile and submit a consolidated report of all grievances—both pending and resolved—to the Company&apos;s Board of Directors on a quarterly basis to ensure compliance.
          </p>
        </section>

        {/* Contact Table */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details of designation</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Person Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact No.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email-Id</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Working hours</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Grievance Officer */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grievance officer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shushant Singh</td>
                <td className="px-6 py-4 text-sm text-gray-500">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0135-3506155</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="mailto:grievance@stockboxtech.com" className="hover:underline">grievance@stockboxtech.com</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:30AM – 5:30PM, MONDAY-FRIDAY</td>
              </tr>
              
              {/* Customer Care */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer Care</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shushant Singh</td>
                <td className="px-6 py-4 text-sm text-gray-500">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0135-3506155</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="mailto:customercare@stockboxtech.com" className="hover:underline">customercare@stockboxtech.com</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:30AM – 5:30PM, MONDAY-FRIDAY</td>
              </tr>
              
              {/* Head of Customer Care */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Head of Customer Care</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shushant Singh</td>
                <td className="px-6 py-4 text-sm text-gray-500">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0135-3506155</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="mailto:customercare@stockboxtech.com" className="hover:underline">customercare@stockboxtech.com</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:30AM – 5:30PM, MONDAY-FRIDAY</td>
              </tr>
              
              {/* Compliance Officer */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Compliance Officer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shushant Singh</td>
                <td className="px-6 py-4 text-sm text-gray-500">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0135-3506155</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="mailto:compliance@stockboxtech.com" className="hover:underline">compliance@stockboxtech.com</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:30AM – 5:30PM, MONDAY-FRIDAY</td>
              </tr>
              
              {/* CEO */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CEO</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Shushant Singh</td>
                <td className="px-6 py-4 text-sm text-gray-500">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0135-3506155</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="mailto:shushant.s@stockboxtech.com" className="hover:underline">shushant.s@stockboxtech.com</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:30AM – 5:30PM, MONDAY-FRIDAY</td>
              </tr>
              
              {/* Principal Officer */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Principal Officer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Radhey Shyam Chauhan</td>
                <td className="px-6 py-4 text-sm text-gray-500">9, Lane No.-3, Doon Enclave Extension, Shimla Road Dehradun (Uttarakhand)-248171</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9997098943</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600"><a href="mailto:rschauhan@stockboxtech.com" className="hover:underline">rschauhan@stockboxtech.com</a></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:30AM – 5:30PM, MONDAY-FRIDAY</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Grievance;