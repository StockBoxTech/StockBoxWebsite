// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ComplaintReportTable = () => {
//   const [activeReport, setActiveReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchActiveReport = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/complaint-report/active`
//       );
//       console.log(response);

//       if (!response.status) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       setActiveReport(response?.data?.active);
//     } catch (err) {
//       console.error("Failed to fetch active report:", err);
//       setError("Failed to fetch active complaint report data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchActiveReport();
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-6 max-w-7xl mx-auto">
//         <div className="text-center text-gray-600">
//           Loading active complaint report...
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 max-w-7xl mx-auto">
//         <div className="text-center text-red-500 mb-4">{error}</div>
//         <div className="text-center">
//           <button
//             onClick={fetchActiveReport}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!activeReport) {
//     return (
//       <div className="p-6 max-w-7xl mx-auto">
//         <div className="text-center text-gray-500">
//           No active complaint report found.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="bg-green-500 text-white p-4 text-center">
//           <h1 className="text-lg font-bold">
//             Active Complaint Report - Data for the month ending:{" "}
//             {activeReport.monthEnding}
//           </h1>
//         </div>

//         <div className="p-6">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-400">
//               <thead>
//                 <tr>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Sr. No.
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Received from
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Pending at the end of last month
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Received
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Resolved *
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Total Pending #
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Pending complaints &gt; 3months
//                   </th>
//                   <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
//                     Average Resolution time^ (in days)
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border border-gray-400 p-3 text-center font-semibold">
//                     1
//                   </td>
//                   <td className="border border-gray-400 p-3 text-left pl-3 font-semibold">
//                     Directly from Investors
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.directlyFromInvestors?.pendingEndLastMonth ||
//                       0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.directlyFromInvestors?.received || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.directlyFromInvestors?.resolved || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.directlyFromInvestors?.totalPending || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.directlyFromInvestors?.pendingOver3Months ||
//                       0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.directlyFromInvestors?.avgResolutionTime || 0}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-400 p-3 text-center font-semibold">
//                     2
//                   </td>
//                   <td className="border border-gray-400 p-3 text-left pl-3 font-semibold">
//                     SEBI (SCORES)
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.sebiScores?.pendingEndLastMonth || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.sebiScores?.received || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.sebiScores?.resolved || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.sebiScores?.totalPending || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.sebiScores?.pendingOver3Months || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.sebiScores?.avgResolutionTime || 0}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-400 p-3 text-center font-semibold">
//                     3
//                   </td>
//                   <td className="border border-gray-400 p-3 text-left pl-3 font-semibold">
//                     Other Sources (if any)
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.otherSources?.pendingEndLastMonth || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.otherSources?.received || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.otherSources?.resolved || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.otherSources?.totalPending || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.otherSources?.pendingOver3Months || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center">
//                     {activeReport.otherSources?.avgResolutionTime || 0}
//                   </td>
//                 </tr>
//                 <tr className="bg-blue-50">
//                   <td className="border border-gray-400 p-3 text-center font-bold"></td>
//                   <td className="border border-gray-400 p-3 text-left pl-3 font-bold">
//                     Grand Total
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center font-bold">
//                     {activeReport.grandTotal?.pendingEndLastMonth || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center font-bold">
//                     {activeReport.grandTotal?.received || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center font-bold">
//                     {activeReport.grandTotal?.resolved || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center font-bold">
//                     {activeReport.grandTotal?.totalPending || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center font-bold">
//                     {activeReport.grandTotal?.pendingOver3Months || 0}
//                   </td>
//                   <td className="border border-gray-400 p-3 text-center font-bold">
//                     {activeReport.grandTotal?.avgResolutionTime || 0}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               onClick={fetchActiveReport}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
//             >
//               Refresh Data
//             </button>
//           </div>

//           <div className="mt-4 text-xs text-gray-600">
//             <p>
//               * Resolved complaints include those resolved within the reporting
//               period
//             </p>
//             <p>
//               # Total Pending = Pending at end of last month + Received -
//               Resolved
//             </p>
//             <p>^ Average resolution time is calculated in days</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintReportTable;


import { useState, useEffect } from "react"
import axios from "axios"

const ComplaintReportTable = () => {
  const [activeReport, setActiveReport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

 const fetchActiveReport = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/complaint-report/active`
      );
      console.log(response);

      if (!response.status) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setActiveReport(response?.data?.active);
    } catch (err) {
      console.error("Failed to fetch active report:", err);
      setError("Failed to fetch active complaint report data.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchActiveReport()
  }, [])

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center text-[#ebff86]">Loading active complaint report...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center text-red-400 mb-4">{error}</div>
        <div className="text-center">
          <button
            onClick={fetchActiveReport}
            className="bg-[#ebff86] hover:bg-[#ebff86]/80 text-[#1A2521] px-4 py-2 rounded font-semibold transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!activeReport) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center text-gray-400">No active complaint report found.</div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto bg-[#2A3530] rounded-lg shadow-2xl overflow-hidden border border-[#ebff86]/20">
        <div className="bg-gradient-to-r from-[#ebff86] to-[#d4e86b] text-[#1A2521] p-4 text-center">
          <h1 className="text-lg font-bold">
            Active Complaint Report - Data for the month ending: {activeReport.monthEnding}
          </h1>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#ebff86]/30">
              <thead>
                <tr>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Sr. No.
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Received from
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Pending at the end of last month
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Received
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Resolved *
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Total Pending #
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Pending complaints {">"} 3months
                  </th>
                  <th className="border border-[#ebff86]/30 p-3 text-sm font-semibold bg-[#3A4540] text-center text-[#ebff86]">
                    Average Resolution time^ (in days)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#3A4540]/30 transition-colors">
                  <td className="border border-[#ebff86]/20 p-3 text-center font-semibold text-[#ebff86]">1</td>
                  <td className="border border-[#ebff86]/20 p-3 text-left pl-3 font-semibold text-white">
                    Directly from Investors
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.directlyFromInvestors?.pendingEndLastMonth || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.directlyFromInvestors?.received || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.directlyFromInvestors?.resolved || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.directlyFromInvestors?.totalPending || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.directlyFromInvestors?.pendingOver3Months || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.directlyFromInvestors?.avgResolutionTime || 0}
                  </td>
                </tr>
                <tr className="hover:bg-[#3A4540]/30 transition-colors">
                  <td className="border border-[#ebff86]/20 p-3 text-center font-semibold text-[#ebff86]">2</td>
                  <td className="border border-[#ebff86]/20 p-3 text-left pl-3 font-semibold text-white">
                    SEBI (SCORES)
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.sebiScores?.pendingEndLastMonth || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.sebiScores?.received || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.sebiScores?.resolved || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.sebiScores?.totalPending || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.sebiScores?.pendingOver3Months || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.sebiScores?.avgResolutionTime || 0}
                  </td>
                </tr>
                <tr className="hover:bg-[#3A4540]/30 transition-colors">
                  <td className="border border-[#ebff86]/20 p-3 text-center font-semibold text-[#ebff86]">3</td>
                  <td className="border border-[#ebff86]/20 p-3 text-left pl-3 font-semibold text-white">
                    Other Sources (if any)
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.otherSources?.pendingEndLastMonth || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.otherSources?.received || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.otherSources?.resolved || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.otherSources?.totalPending || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.otherSources?.pendingOver3Months || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center text-gray-300">
                    {activeReport.otherSources?.avgResolutionTime || 0}
                  </td>
                </tr>
                <tr className="bg-[#3A4540]/50 hover:bg-[#3A4540]/70 transition-colors">
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold"></td>
                  <td className="border border-[#ebff86]/20 p-3 text-left pl-3 font-bold text-[#ebff86]">
                    Grand Total
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold text-[#ebff86]">
                    {activeReport.grandTotal?.pendingEndLastMonth || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold text-[#ebff86]">
                    {activeReport.grandTotal?.received || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold text-[#ebff86]">
                    {activeReport.grandTotal?.resolved || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold text-[#ebff86]">
                    {activeReport.grandTotal?.totalPending || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold text-[#ebff86]">
                    {activeReport.grandTotal?.pendingOver3Months || 0}
                  </td>
                  <td className="border border-[#ebff86]/20 p-3 text-center font-bold text-[#ebff86]">
                    {activeReport.grandTotal?.avgResolutionTime || 0}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={fetchActiveReport}
              className="bg-[#ebff86] hover:bg-[#ebff86]/80 text-[#1A2521] px-6 py-2 rounded text-sm font-semibold transition-colors shadow-lg"
            >
              Refresh Data
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-400 space-y-1">
            <p>* Resolved complaints include those resolved within the reporting period</p>
            <p># Total Pending = Pending at end of last month + Received - Resolved</p>
            <p>^ Average resolution time is calculated in days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplaintReportTable
