// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const InvestPage = () => {

// //   const [tableData, setTableData] = useState([]);
// //   const [yearTableData, setYearTableData] = useState([]);

// //   // ✅ Fetch Data from API on Component Mount
// //   useEffect(() => {
// //     fetchTableData();
// //     fetchTableYearlyData();
// //   }, []);

// //   const fetchTableData = async () => {
// //     try {
// //       const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/table`); // Ensure this is the correct API URL
// //       setTableData(response.data); // Store fetched data in state
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //  const fetchTableYearlyData = async () => {
// //     try {
// //       const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tableYearly`); // Ensure this is the correct API URL
// //       setYearTableData(response.data); // Store fetched data in state
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   }

// //   return (
// //     <div className="container mx-auto p-6 text-white">
// //     <h1 className="text-2xl font-bold mb-4 text-center">Investor Information</h1>

// //     {/* Vision and Mission */}
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold my-1">A )Vision and Mission Statements for investors</h2>
// //       <p><strong className="">Vision:</strong> Invest with knowledge & safety.</p>
// //       <p><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
// //     </section>

// //     {/* Business Details */}
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold">B ) Details of business transacted by the Research Analyst with respect to the investors.</h2>
// //       <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //       We publish research reports based on robust and ethical research activities carried out by our organization. All reports are prepared with diligence, ensuring accuracy and relevance for investors.</p>
// //        <p> <FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp; Our research reports and recommendations are independent and free from external influences. We ensure that our views on securities are neutral and unbiased to help investors make informed decisions.</p>
// //         <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //         We conduct an annual audit of our research activities, policies, and procedures to ensure compliance with SEBI regulations. The audit findings are documented, and necessary corrective measures are implemented promptly.</p>
// //    <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp; We provide clear disclosures of any financial interests or conflicts of interest in the securities that we recommend. These disclosures are prominently included in our reports as per regulatory requirements.</p>
// //     <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //     All our research recommendations are based on publicly available information and our own observations. We comply with all regulations concerning the use of non-public or sensitive information.</p>
// //     </section>

// //     {/* Services Provided */}
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold">C )  Details of grievance redressal mechanism and how to access it</h2>

// //         <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //         In case of any grievance / complaint, an investor should approach the concerned research analyst and we shall ensure that the grievance is resolved within 30 days.</p>
// //         <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //         If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</p>
// //         <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //           With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.
// //         </p>

// //     </section>

// //     {/* Grievance Redressal */}
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold">D ) Details of grievance redressal mechanism and how to access it</h2>
// //       <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //         In case of any grievance / complaint, an investor should approach the concerned research analyst and we shall ensure that the grievance is resolved within 30 days.</p>
// //       <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //         If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s SCORES portal which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</p>
// //     <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //     With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.

// //     </p>
// //     </section>

// //     {/* Expectations from Investors */}
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold">E ) Expectations from the investors (Responsibilities of investors)</h2>
// //       <h3 className="font-medium">Do’s</h3>
// //       <ul className="list-disc pl-6">
// //         <li>Always deal with SEBI registered Research Analysts.</li>
// //         <li>Check for SEBI registration number.</li>
// //         <li>
// //         Ensure that the Research Analyst has a valid registration certificate.</li>
// //         <li>
// //         Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14.</li>
// //        <li>
// //        Always pay attention towards disclosures made in the research reports before investing.</li>
// //      <li>
// //      Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.</li>
// //      <li>
// //      Before buying securities or applying in public offer, check for the research recommendation provided by your research Analyst.</li>
// //      <li>
// //      Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
// //     <li>
// //     Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
// //       </ul>
// //       <h3 className="font-medium mt-4">Don’ts</h3>
// //       <ul className="list-disc pl-6">
// //         <li>Do not provide funds for investment to the Research Analyst.</li>
// //         <li>
// //         Don’t fall prey to luring advertisements or market rumours.
// //         </li>
// //         <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
// //        <li>Do not share login credentials and password of your Trading and Demat Account with the Research Analyst.</li>
// //       </ul>
// //     </section>
// //     <div className="w-full">
// //       <h1 className="w-full text-2xl font-bold text-center">Details of Complaints</h1>
// //       <p className="text-gray-400">
// //       Data for the month ending - December 2024</p>
// //     </div>

// //      <div className="bg-blue-300 h-[5%] p-2 rounded-b-md">

// //  <p>*Inclusive of complaints of previous months resolved in the current month. #Inclusive of complaints pending as on the last day of the month.</p>

// //     </div>
// //      <h1>
// //      Trend of monthly disposal of complaints</h1>
// //     {/* Complaint Data Table */}
// //     <table className="w-full border-collapse bg-white text-black">
// //   <thead>
// //     <tr className="bg-white text-black">
// //       <th className="border p-2">Sr. No.</th>
// //       <th className="border p-2">Month</th>
// //       <th className="border p-2">Carried forward from previous month</th>
// //       <th className="border p-2">Received</th>
// //       <th className="border p-2">Resolved</th>
// //       <th className="border p-2">Pending</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     {tableData.map((row, index) => (
// //       <tr key={index}>
// //         <td className="border p-2 text-center">{index + 1}</td>
// //         <td className="border p-2 text-center">{row.month}</td>
// //         <td className="border p-2 text-center">{row.carriedForward}</td>
// //         <td className="border p-2 text-center">{row.received}</td>
// //         <td className="border p-2 text-center">{row.resolved}</td>
// //         <td className="border p-2 text-center">{row.pending}</td>
// //       </tr>
// //     ))}
// //   </tbody>
// // </table>

// //     <section className="mb-6">
// //       <h2 className="text-lg font-semibold">
// //       Trend of annual disposal of complaints
// // </h2>
// //       <table className="w-full border-collapse bg-white text-black">
// //         <thead>
// //           <tr className="bg-white text-black">
// //             <th className="border p-2">Sr. No.</th>
// //             <th className="border p-2">year</th>
// //             <th className="border p-2">	Carried forward from previous year</th>
// //             <th className="border p-2">Received</th>
// //             <th className="border p-2">Resolved</th>
// //             <th className="border p-2">Pending</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //       {yearTableData.map((row,index) =>(    <tr key={index}>
// //             <td className="border p-2 text-center">{index}</td>
// //             <td className="border p-2 text-center">{row.Year}</td>
// //             <td className="border p-2 text-center">{row.carriedForward}</td>
// //             <td className="border p-2 text-center">{row.received}</td>
// //             <td className="border p-2 text-center">{row.resolved}</td>
// //             <td className="border p-2 text-center">{row.pending}</td>
// //           </tr>))}
// //         </tbody>
// //       </table>
// //     </section>
// //     <div className="bg-blue-300 h-[5%] p-2 rounded-b-md">
// //       <p className="">*Inclusive of complaints of previous years resolved in the current year. #Inclusive of complaints pending as on the last day of the year.</p>
// //     </div>
// //     {/* Contact Details */}
// //     <section className="mb-6">
// //       <h2 className="text-xl font-semibold my-5">Compliant redressal and scores process</h2>
// //       <p>
// //         Client’s queries / complaints may arise due to lack of understanding or a deficiency of
// //         service experienced by clients. Deficiency of service may include lack of explanation,
// //         clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards client.</p>
// //       <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //         Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent to the Client Servicing Team on customercare@stockboxtech.com. Alternatively, the Investor may call on 9997098943</p>
// //       <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //       A letter may also be written with their query/complaint and posted at
// //        the below mentioned address: Stockbox Technologies Pvt Ltd., 9 Doon Enclave Extension, Near Shimla Bypass road, Dehradun, Uttarakhand 248171</p>
// //     <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //     Clients can write to the principal officer at Radhey Shyam Chauhan stockboxtech@gmail.com if
// //     the Investor does not receive a response within 10 business days of writing to the Client Servicing Team. The client can expect a reply within 10 business days of approaching research analyst.</p>
// //     <p><FontAwesomeIcon icon={faHandPointRight} style={{ color: "#ffffff" }} /> &nbsp;
// //   In case you are not satisfied with our response, you can lodge your grievance with SEBI at
// //   <a href="http://scores.gov.in" target="_blank" rel="noopener noreferrer">http://scores.gov.in</a>
// //   or you may also write to any of the offices of SEBI. SCORES may be accessed through the SCORES mobile application as well.
// //   The same can be downloaded from the link below:
// //   <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" className="text-blue-500" target="_blank" rel="noopener noreferrer">
// //    &nbsp; Download SCORES Mobile App
// //   </a>
// // </p>
// //     </section>
// //   </div>
// //   )
// // }

// // export default InvestPage

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ComplaintReportTable from "../components/ComplaintReportTable/ComplaintReportTable";

// const InvestPage = () => {
//   const [tableData, setTableData] = useState([]);
//   const [yearTableData, setYearTableData] = useState([]);

//   // ✅ Fetch Data from API on Component Mount
//   useEffect(() => {
//     fetchTableData();
//     fetchTableYearlyData();
//   }, []);

//   const fetchTableData = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/table`
//       ); // Ensure this is the correct API URL
//       setTableData(response.data); // Store fetched data in state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchTableYearlyData = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/tableYearly`
//       ); // Ensure this is the correct API URL
//       setYearTableData(response.data); // Store fetched data in state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl font-bold text-center mb-4">
//             Investor Information
//           </h1>
//           <p className="text-blue-100 text-center max-w-2xl mx-auto">
//             Comprehensive information for investors about our services,
//             policies, and complaint redressal mechanisms
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-8 max-w-6xl">
//         {/* Vision and Mission */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
//               A
//             </span>
//             Vision and Mission Statements for investors
//           </h2>
//           <div className="space-y-4">
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
//               <p className="text-gray-700">
//                 <strong className="text-blue-800">Vision:</strong> Invest with
//                 knowledge & safety.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
//               <p className="text-gray-700">
//                 <strong className="text-green-800">Mission:</strong> Every
//                 investor should be able to invest in right investment products
//                 based on their needs, manage and monitor them to meet their
//                 goals, access reports and enjoy financial wellness.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Business Details */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
//               B
//             </span>
//             Details of business transacted by the Research Analyst with respect
//             to the investors.
//           </h2>
//           <div className="space-y-4">
//             <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 We publish research reports based on robust and ethical research
//                 activities carried out by our organization. All reports are
//                 prepared with diligence, ensuring accuracy and relevance for
//                 investors.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 Our research reports and recommendations are independent and
//                 free from external influences. We ensure that our views on
//                 securities are neutral and unbiased to help investors make
//                 informed decisions.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 We conduct an annual audit of our research activities, policies,
//                 and procedures to ensure compliance with SEBI regulations. The
//                 audit findings are documented, and necessary corrective measures
//                 are implemented promptly.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 We provide clear disclosures of any financial interests or
//                 conflicts of interest in the securities that we recommend. These
//                 disclosures are prominently included in our reports as per
//                 regulatory requirements.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 All our research recommendations are based on publicly available
//                 information and our own observations. We comply with all
//                 regulations concerning the use of non-public or sensitive
//                 information.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Services Provided */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
//               C
//             </span>
//             Details of grievance redressal mechanism and how to access it
//           </h2>
//           <div className="space-y-4">
//             <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-yellow-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 In case of any grievance / complaint, an investor should
//                 approach the concerned research analyst and we shall ensure that
//                 the grievance is resolved within 30 days.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 If the investor's complaint is not redressed satisfactorily, one
//                 may lodge a complaint with SEBI on SEBI's SCORES portal which is
//                 a centralized web-based complaints redressal system. SEBI takes
//                 up the complaints registered via SCORES with the concerned
//                 intermediary for timely redressal. SCORES facilitates tracking
//                 the status of the complaint.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-green-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 With regard to physical complaints, investors may send their
//                 complaints to: Office of Investor Assistance and Education,
//                 Securities and Exchange Board of India, SEBI Bhavan. Plot No.
//                 C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400
//                 051.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Grievance Redressal */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
//               D
//             </span>
//             Details of grievance redressal mechanism and how to access it
//           </h2>
//           <div className="space-y-4">
//             <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-yellow-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 In case of any grievance / complaint, an investor should
//                 approach the concerned research analyst and we shall ensure that
//                 the grievance is resolved within 30 days.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 If the investor's complaint is not redressed satisfactorily, one
//                 may lodge a complaint with SEBI on SEBI's SCORES portal which is
//                 a centralized web-based complaints redressal system. SEBI takes
//                 up the complaints registered via SCORES with the concerned
//                 intermediary for timely redressal. SCORES facilitates tracking
//                 the status of the complaint.
//               </p>
//             </div>
//             <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-green-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 With regard to physical complaints, investors may send their
//                 complaints to: Office of Investor Assistance and Education,
//                 Securities and Exchange Board of India, SEBI Bhavan. Plot No.
//                 C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400
//                 051.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Expectations from Investors */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
//               E
//             </span>
//             Expectations from the investors (Responsibilities of investors)
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Do's */}
//             <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
//               <h3 className="text-xl font-semibold text-green-800 mb-4">
//                 Do's
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Always deal with SEBI registered Research Analysts.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Check for SEBI registration number.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Ensure that the Research Analyst has a valid registration
//                     certificate.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Please refer to the list of all SEBI registered Research
//                     Analysts which is available on SEBI website in the following
//                     link:
//                     https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Always pay attention towards disclosures made in the
//                     research reports before investing.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Pay your Research Analyst through banking channels only and
//                     maintain duly signed receipts mentioning the details of your
//                     payments.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Before buying securities or applying in public offer, check
//                     for the research recommendation provided by your research
//                     Analyst.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Ask all relevant questions and clear your doubts with your
//                     Research Analyst before acting on the recommendation.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Inform SEBI about Research Analyst offering assured or
//                     guaranteed returns.
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Don'ts */}
//             <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
//               <h3 className="text-xl font-semibold text-red-800 mb-4">
//                 Don'ts
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Do not provide funds for investment to the Research Analyst.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Don't fall prey to luring advertisements or market rumours.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Do not get attracted to limited period discount or other
//                     incentive, gifts, etc. offered by Research Analyst.
//                   </span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
//                   <span className="text-gray-700">
//                     Do not share login credentials and password of your Trading
//                     and Demat Account with the Research Analyst.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Complaints Data */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
//           <div className="mb-6">
//             <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
//               Details of Complaints
//             </h1>
//             <p className="text-gray-600 text-center">
//               Data for the month ending - December 2024
//             </p>
//           </div>

//           <div className="bg-blue-100 rounded-t-lg p-4 mb-4">
//             <p className="text-blue-800 text-sm">
//               *Inclusive of complaints of previous months resolved in the
//               current month. #Inclusive of complaints pending as on the last day
//               of the month.
//             </p>
//           </div>
//           <ComplaintReportTable/>

//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Trend of monthly disposal of complaints
//             </h2>
//             <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
//               <table className="w-full bg-white">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Sr. No.
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Month
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Carried forward from previous month
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Received
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Resolved
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Pending
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableData.map((row, index) => (
//                     <tr
//                       key={index}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {index + 1}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.month}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.carriedForward}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.received}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.resolved}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.pending}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Trend of annual disposal of complaints
//             </h2>
//             <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
//               <table className="w-full bg-white">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Sr. No.
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Year
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Carried forward from previous year
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Received
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Resolved
//                     </th>
//                     <th className="border border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
//                       Pending
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {yearTableData.map((row, index) => (
//                     <tr
//                       key={index}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {index}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.Year}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.carriedForward}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.received}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.resolved}
//                       </td>
//                       <td className="border border-gray-200 p-3 text-center text-gray-900">
//                         {row.pending}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="bg-blue-100 rounded-b-lg p-4">
//             <p className="text-blue-800 text-sm">
//               *Inclusive of complaints of previous years resolved in the current
//               year. #Inclusive of complaints pending as on the last day of the
//               year.
//             </p>
//           </div>
//         </section>

//         {/* Contact Details */}
//         <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Compliant redressal and scores process
//           </h2>

//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border-l-4 border-blue-400">
//             <p className="text-gray-700 mb-4">
//               Client's queries / complaints may arise due to lack of
//               understanding or a deficiency of service experienced by clients.
//               Deficiency of service may include lack of explanation,
//               clarifications, understanding which escalates into shortfalls in
//               the expected delivery standards, either due to inadequacy of
//               facilities available or through the attitude of staff towards
//               client.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-green-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 Clients can seek clarification to their query and are further
//                 entitled to make a complaint in writing, orally or
//                 telephonically. An email may be sent to the Client Servicing
//                 Team on customercare@stockboxtech.com. Alternatively, the
//                 Investor may call on 9997098943
//               </p>
//             </div>

//             <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-blue-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 A letter may also be written with their query/complaint and
//                 posted at the below mentioned address: Stockbox Technologies Pvt
//                 Ltd., 9 Doon Enclave Extension, Near Shimla Bypass road,
//                 Dehradun, Uttarakhand 248171
//               </p>
//             </div>

//             <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-yellow-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 Clients can write to the principal officer at Radhey Shyam
//                 Chauhan stockboxtech@gmail.com if the Investor does not receive
//                 a response within 10 business days of writing to the Client
//                 Servicing Team. The client can expect a reply within 10 business
//                 days of approaching research analyst.
//               </p>
//             </div>

//             <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
//               <FontAwesomeIcon
//                 icon={faHandPointRight}
//                 className="text-orange-600 mt-1 flex-shrink-0"
//               />
//               <p className="text-gray-700">
//                 In case you are not satisfied with our response, you can lodge
//                 your grievance with SEBI at{" "}
//                 <a
//                   href="http://scores.gov.in"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-800 underline font-medium"
//                 >
//                   http://scores.gov.in
//                 </a>{" "}
//                 or you may also write to any of the offices of SEBI. SCORES may
//                 be accessed through the SCORES mobile application as well. The
//                 same can be downloaded from the link below:{" "}
//                 <a
//                   href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330"
//                   className="text-blue-600 hover:text-blue-800 underline font-medium"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Download SCORES Mobile App
//                 </a>
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default InvestPage;

import { useEffect, useState } from "react";
import ComplaintReportTable from "../components/ComplaintReportTable/ComplaintReportTable";

// Simple hand point right icon component to replace FontAwesome
const HandPointRightIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0 mt-1"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const InvestPage = () => {
  const [tableData, setTableData] = useState([]);
  const [yearTableData, setYearTableData] = useState([]);

  // ✅ Fetch Data from API on Component Mount
  useEffect(() => {
    fetchTableData();
    fetchTableYearlyData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/table`
      );
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTableYearlyData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/tableYearly`
      );
      const data = await response.json();
      setYearTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A2521]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2A3530] to-[#1A2521] text-[#ebff86] py-12 border-b border-[#ebff86]/20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4">
            Investor Information
          </h1>
          <p className="text-[#ebff86]/80 text-center max-w-2xl mx-auto">
            Comprehensive information for investors about our services,
            policies, and complaint redressal mechanisms
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Vision and Mission */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <h2 className="text-2xl font-bold text-[#ebff86] mb-6 flex items-center">
            <span className="bg-[#ebff86] text-[#1A2521] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              A
            </span>
            Vision and Mission Statements for investors
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#3A4540] to-[#2A3530] rounded-lg p-6 border border-[#ebff86]/10">
              <p className="text-gray-300">
                <strong className="text-[#ebff86]">Vision:</strong> Invest with
                knowledge & safety.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#3A4540] to-[#2A3530] rounded-lg p-6 border border-[#ebff86]/10">
              <p className="text-gray-300">
                <strong className="text-[#ebff86]">Mission:</strong> Every
                investor should be able to invest in right investment products
                based on their needs, manage and monitor them to meet their
                goals, access reports and enjoy financial wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Business Details */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <h2 className="text-2xl font-bold text-[#ebff86] mb-6 flex items-center">
            <span className="bg-[#ebff86] text-[#1A2521] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              B
            </span>
            Details of business transacted by the Research Analyst with respect
            to the investors.
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg hover:bg-[#3A4540] transition-colors border border-[#ebff86]/10">
              <HandPointRightIcon />
              <p className="text-gray-300">
                We publish research reports based on robust and ethical research
                activities carried out by our organization. All reports are
                prepared with diligence, ensuring accuracy and relevance for
                investors.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg hover:bg-[#3A4540] transition-colors border border-[#ebff86]/10">
              <HandPointRightIcon />
              <p className="text-gray-300">
                Our research reports and recommendations are independent and
                free from external influences. We ensure that our views on
                securities are neutral and unbiased to help investors make
                informed decisions.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg hover:bg-[#3A4540] transition-colors border border-[#ebff86]/10">
              <HandPointRightIcon />
              <p className="text-gray-300">
                We conduct an annual audit of our research activities, policies,
                and procedures to ensure compliance with SEBI regulations. The
                audit findings are documented, and necessary corrective measures
                are implemented promptly.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg hover:bg-[#3A4540] transition-colors border border-[#ebff86]/10">
              <HandPointRightIcon />
              <p className="text-gray-300">
                We provide clear disclosures of any financial interests or
                conflicts of interest in the securities that we recommend. These
                disclosures are prominently included in our reports as per
                regulatory requirements.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg hover:bg-[#3A4540] transition-colors border border-[#ebff86]/10">
              <HandPointRightIcon />
              <p className="text-gray-300">
                All our research recommendations are based on publicly available
                information and our own observations. We comply with all
                regulations concerning the use of non-public or sensitive
                information.
              </p>
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <h2 className="text-2xl font-bold text-[#ebff86] mb-6 flex items-center">
            <span className="bg-[#ebff86] text-[#1A2521] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              C
            </span>
            Details of grievance redressal mechanism and how to access it
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-[#ebff86]/10 rounded-lg border-l-4 border-[#ebff86]">
              <HandPointRightIcon />
              <p className="text-gray-300">
                In case of any grievance / complaint, an investor should
                approach the concerned research analyst and we shall ensure that
                the grievance is resolved within 30 days.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/70">
              <HandPointRightIcon />
              <p className="text-gray-300">
                If the investor's complaint is not redressed satisfactorily, one
                may lodge a complaint with SEBI on SEBI's SCORES portal which is
                a centralized web-based complaints redressal system. SEBI takes
                up the complaints registered via SCORES with the concerned
                intermediary for timely redressal. SCORES facilitates tracking
                the status of the complaint.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/50">
              <HandPointRightIcon />
              <p className="text-gray-300">
                With regard to physical complaints, investors may send their
                complaints to: Office of Investor Assistance and Education,
                Securities and Exchange Board of India, SEBI Bhavan. Plot No.
                C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400
                051.
              </p>
            </div>
          </div>
        </section>

        {/* Grievance Redressal */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <h2 className="text-2xl font-bold text-[#ebff86] mb-6 flex items-center">
            <span className="bg-[#ebff86] text-[#1A2521] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              D
            </span>
            Details of grievance redressal mechanism and how to access it
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-[#ebff86]/10 rounded-lg border-l-4 border-[#ebff86]">
              <HandPointRightIcon />
              <p className="text-gray-300">
                In case of any grievance / complaint, an investor should
                approach the concerned research analyst and we shall ensure that
                the grievance is resolved within 30 days.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/70">
              <HandPointRightIcon />
              <p className="text-gray-300">
                If the investor's complaint is not redressed satisfactorily, one
                may lodge a complaint with SEBI on SEBI's SCORES portal which is
                a centralized web-based complaints redressal system. SEBI takes
                up the complaints registered via SCORES with the concerned
                intermediary for timely redressal. SCORES facilitates tracking
                the status of the complaint.
              </p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/50">
              <HandPointRightIcon />
              <p className="text-gray-300">
                With regard to physical complaints, investors may send their
                complaints to: Office of Investor Assistance and Education,
                Securities and Exchange Board of India, SEBI Bhavan. Plot No.
                C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400
                051.
              </p>
            </div>
          </div>
        </section>

        {/* Expectations from Investors */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <h2 className="text-2xl font-bold text-[#ebff86] mb-6 flex items-center">
            <span className="bg-[#ebff86] text-[#1A2521] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              E
            </span>
            Expectations from the investors (Responsibilities of investors)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-[#3A4540]/30 rounded-lg p-6 border-l-4 border-[#ebff86]">
              <h3 className="text-xl font-semibold text-[#ebff86] mb-4">
                Do's
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Always deal with SEBI registered Research Analysts.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Check for SEBI registration number.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Ensure that the Research Analyst has a valid registration
                    certificate.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Please refer to the list of all SEBI registered Research
                    Analysts which is available on SEBI website in the following
                    link:
                    https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Always pay attention towards disclosures made in the
                    research reports before investing.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Pay your Research Analyst through banking channels only and
                    maintain duly signed receipts mentioning the details of your
                    payments.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Before buying securities or applying in public offer, check
                    for the research recommendation provided by your research
                    Analyst.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Ask all relevant questions and clear your doubts with your
                    Research Analyst before acting on the recommendation.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#ebff86] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Inform SEBI about Research Analyst offering assured or
                    guaranteed returns.
                  </span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-[#3A4540]/30 rounded-lg p-6 border-l-4 border-red-400">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                Don'ts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Do not provide funds for investment to the Research Analyst.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Don't fall prey to luring advertisements or market rumours.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Do not get attracted to limited period discount or other
                    incentive, gifts, etc. offered by Research Analyst.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">
                    Do not share login credentials and password of your Trading
                    and Demat Account with the Research Analyst.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Complaints Data */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#ebff86] text-center mb-2">
              Details of Complaints
            </h1>
            <p className="text-gray-400 text-center">
              Data for the month ending - December 2024
            </p>
          </div>

          <div className="bg-[#ebff86]/20 rounded-t-lg p-4 mb-4 border border-[#ebff86]/30">
            <p className="text-[#ebff86] text-sm">
              *Inclusive of complaints of previous months resolved in the
              current month. #Inclusive of complaints pending as on the last day
              of the month.
            </p>
          </div>
          <ComplaintReportTable />

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#ebff86] mb-4">
              Trend of monthly disposal of complaints
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#ebff86]/30 shadow-sm">
              <table className="w-full bg-[#3A4540]">
                <thead className="bg-[#4A5550]">
                  <tr>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Sr. No.
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Month
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Carried forward from previous month
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Received
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Resolved
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Pending
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#4A5550]/50 transition-colors"
                    >
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {index + 1}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.month}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.carriedForward}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.received}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.resolved}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.pending}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#ebff86] mb-4">
              Trend of annual disposal of complaints
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#ebff86]/30 shadow-sm">
              <table className="w-full bg-[#3A4540]">
                <thead className="bg-[#4A5550]">
                  <tr>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Sr. No.
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Year
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Carried forward from previous year
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Received
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Resolved
                    </th>
                    <th className="border border-[#ebff86]/30 p-3 text-left text-sm font-semibold text-[#ebff86]">
                      Pending
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {yearTableData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#4A5550]/50 transition-colors"
                    >
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {index + 1}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.Year}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.carriedForward}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.received}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.resolved}
                      </td>
                      <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                        {row.pending}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#ebff86]/20 rounded-b-lg p-4 border border-[#ebff86]/30">
            <p className="text-[#ebff86] text-sm">
              *Inclusive of complaints of previous years resolved in the current
              year. #Inclusive of complaints pending as on the last day of the
              year.
            </p>
          </div>
        </section>

        {/* Contact Details */}
        <section className="bg-[#2A3530] rounded-xl shadow-2xl p-8 mb-8 border border-[#ebff86]/20">
          <h2 className="text-2xl font-bold text-[#ebff86] mb-6">
            Complaint redressal and scores process
          </h2>

          <div className="bg-gradient-to-r from-[#3A4540] to-[#2A3530] rounded-lg p-6 mb-6 border-l-4 border-[#ebff86]">
            <p className="text-gray-300 mb-4">
              Client's queries / complaints may arise due to lack of
              understanding or a deficiency of service experienced by clients.
              Deficiency of service may include lack of explanation,
              clarifications, understanding which escalates into shortfalls in
              the expected delivery standards, either due to inadequacy of
              facilities available or through the attitude of staff towards
              client.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]">
              <HandPointRightIcon />
              <p className="text-gray-300">
                Clients can seek clarification to their query and are further
                entitled to make a complaint in writing, orally or
                telephonically. An email may be sent to the Client Servicing
                Team on customercare@stockboxtech.com. Alternatively, the
                Investor may call on 9997098943
              </p>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/70">
              <HandPointRightIcon />
              <p className="text-gray-300">
                A letter may also be written with their query/complaint and
                posted at the below mentioned address: Stockbox Technologies Pvt
                Ltd., 9 Doon Enclave Extension, Near Shimla Bypass road,
                Dehradun, Uttarakhand 248171
              </p>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/50">
              <HandPointRightIcon />
              <p className="text-gray-300">
                Clients can write to the principal officer at Radhey Shyam
                Chauhan stockboxtech@gmail.com if the Investor does not receive
                a response within 10 business days of writing to the Client
                Servicing Team. The client can expect a reply within 10 business
                days of approaching research analyst.
              </p>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-[#3A4540]/50 rounded-lg border-l-4 border-[#ebff86]/30">
              <HandPointRightIcon />
              <p className="text-gray-300">
                In case you are not satisfied with our response, you can lodge
                your grievance with SEBI at{" "}
                <a
                  href="http://scores.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ebff86] hover:text-[#ebff86]/80 underline font-medium"
                >
                  http://scores.gov.in
                </a>{" "}
                or you may also write to any of the offices of SEBI. SCORES may
                be accessed through the SCORES mobile application as well. The
                same can be downloaded from the link below:{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330"
                  className="text-[#ebff86] hover:text-[#ebff86]/80 underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download SCORES Mobile App
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestPage;
