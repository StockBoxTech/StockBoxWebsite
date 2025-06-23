import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../service/axiosInterceptor";
import { toast } from "react-toastify";

const FillComplaints = () => {
  const [monthEnding, setMonthEnding] = useState("");
  const [complaintsData, setComplaintsData] = useState({
    directlyFromInvestors: {
      pendingEndLastMonth: "",
      received: "",
      resolved: "",
      totalPending: "",
      pendingOver3Months: "",
      avgResolutionTime: "",
    },
    sebiScores: {
      pendingEndLastMonth: "",
      received: "",
      resolved: "",
      totalPending: "",
      pendingOver3Months: "",
      avgResolutionTime: "",
    },
    otherSources: {
      pendingEndLastMonth: "",
      received: "",
      resolved: "",
      totalPending: "",
      pendingOver3Months: "",
      avgResolutionTime: "",
    },
    grandTotal: {
      pendingEndLastMonth: "",
      received: "",
      resolved: "",
      totalPending: "",
      pendingOver3Months: "",
      avgResolutionTime: "",
    },
  });

  // Auto-calculate grand totals whenever data changes (optional)
  const autoCalculateGrandTotals = () => {
    const categories = ["directlyFromInvestors", "sebiScores", "otherSources"];
    const fields = [
      "pendingEndLastMonth",
      "received",
      "resolved",
      "totalPending",
      "pendingOver3Months",
    ];

    const newGrandTotal = { ...complaintsData.grandTotal };

    // Calculate sums for numerical fields
    fields.forEach((field) => {
      let sum = 0;
      categories.forEach((category) => {
        const value = parseFloat(complaintsData[category][field]) || 0;
        sum += value;
      });
      newGrandTotal[field] = sum.toString();
    });

    // Calculate average resolution time (weighted average)
    let totalResolved = 0;
    let totalWeightedTime = 0;

    categories.forEach((category) => {
      const resolved = parseFloat(complaintsData[category].resolved) || 0;
      const avgTime =
        parseFloat(complaintsData[category].avgResolutionTime) || 0;
      totalResolved += resolved;
      totalWeightedTime += resolved * avgTime;
    });

    newGrandTotal.avgResolutionTime =
      totalResolved > 0
        ? (
            Math.round((totalWeightedTime / totalResolved) * 100) / 100
          ).toString()
        : "0";

    setComplaintsData((prev) => ({
      ...prev,
      grandTotal: newGrandTotal,
    }));
  };

  const handleInputChange = (category, field, value) => {
    // Allow only numbers, decimal points, and empty string
    const numericFields = [
      "pendingEndLastMonth",
      "received",
      "resolved",
      "totalPending",
      "pendingOver3Months",
      "avgResolutionTime",
    ];

    if (numericFields.includes(field)) {
      // Improved regex: allow empty string, integers, decimals
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setComplaintsData((prev) => ({
          ...prev,
          [category]: {
            ...prev[category],
            [field]: value,
          },
        }));
      }
    } else {
      setComplaintsData((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value,
        },
      }));
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const payload = {
        monthEnding,
        directlyFromInvestors: complaintsData.directlyFromInvestors,
        sebiScores: complaintsData.sebiScores,
        otherSources: complaintsData.otherSources,
        grandTotal: complaintsData.grandTotal,
      };

      const response = await axiosInstance.post(
        "/api/complaint-report",
        payload
      );

      toast.success("Complaint report submitted successfully!");
      setMonthEnding(""); // Reset form
      setComplaintsData({
        directlyFromInvestors: {
          pendingEndLastMonth: "",
          received: "",
          resolved: "",
          totalPending: "",
          pendingOver3Months: "",
          avgResolutionTime: "",
        },
        sebiScores: {
          pendingEndLastMonth: "",
          received: "",
          resolved: "",
          totalPending: "",
          pendingOver3Months: "",
          avgResolutionTime: "",
        },
        otherSources: {
          pendingEndLastMonth: "",
          received: "",
          resolved: "",
          totalPending: "",
          pendingOver3Months: "",
          avgResolutionTime: "",
        },
        grandTotal: {
          pendingEndLastMonth: "",
          received: "",
          resolved: "",
          totalPending: "",
          pendingOver3Months: "",
          avgResolutionTime: "",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error( error?.response?.data?.error|| error?.message || "Failed to submit complaint report!");
    } finally {
      setLoading(false);
    }
  };

  const InputCell = ({ category, field, placeholder = "" }) => {
    const value = complaintsData[category][field];

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(category, field, e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 text-center border border-gray-300 rounded px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors"
      />
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-yellow-300 text-black p-4 text-center">
          <h1 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 flex-wrap">
            <span>Data for the month ending -</span>
            <input
              type="text"
              value={monthEnding}
              onChange={(e) => setMonthEnding(e.target.value)}
              placeholder="Enter month/year"
              className="w-52 bg-white text-black px-3 py-2 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </h1>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Sr. No.
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Received from
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Pending at the end of last month
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Received
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Resolved *
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Total Pending #
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Pending complaints &gt; 3months
                  </th>
                  <th className="border border-gray-400 p-3 text-sm font-semibold bg-gray-100 text-center">
                    Average Resolution time^ (in days)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-2 text-center font-semibold">
                    1
                  </td>
                  <td className="border border-gray-400 p-2 text-left pl-3 font-semibold">
                    Directly from Investors
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="directlyFromInvestors"
                      field="pendingEndLastMonth"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="directlyFromInvestors"
                      field="received"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="directlyFromInvestors"
                      field="resolved"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="directlyFromInvestors"
                      field="totalPending"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="directlyFromInvestors"
                      field="pendingOver3Months"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="directlyFromInvestors"
                      field="avgResolutionTime"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2 text-center font-semibold">
                    2
                  </td>
                  <td className="border border-gray-400 p-2 text-left pl-3 font-semibold">
                    SEBI (SCORES)
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="sebiScores"
                      field="pendingEndLastMonth"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="sebiScores" field="received" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="sebiScores" field="resolved" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="sebiScores" field="totalPending" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="sebiScores"
                      field="pendingOver3Months"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="sebiScores"
                      field="avgResolutionTime"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2 text-center font-semibold">
                    3
                  </td>
                  <td className="border border-gray-400 p-2 text-left pl-3 font-semibold">
                    Other Sources (if any)
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="otherSources"
                      field="pendingEndLastMonth"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="otherSources" field="received" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="otherSources" field="resolved" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="otherSources" field="totalPending" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="otherSources"
                      field="pendingOver3Months"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="otherSources"
                      field="avgResolutionTime"
                    />
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-400 p-2 text-center font-bold"></td>
                  <td className="border border-gray-400 p-2 text-left pl-3 font-bold">
                    Grand Total
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="grandTotal"
                      field="pendingEndLastMonth"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="grandTotal" field="received" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="grandTotal" field="resolved" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell category="grandTotal" field="totalPending" />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="grandTotal"
                      field="pendingOver3Months"
                    />
                  </td>
                  <td className="border border-gray-400 p-2 text-center">
                    <InputCell
                      category="grandTotal"
                      field="avgResolutionTime"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="py-6 text-center space-x-4">
            <button
              type="button"
              onClick={autoCalculateGrandTotals}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded text-base font-medium transition-colors"
            >
              Auto Calculate Grand Total
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-base font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillComplaints;
