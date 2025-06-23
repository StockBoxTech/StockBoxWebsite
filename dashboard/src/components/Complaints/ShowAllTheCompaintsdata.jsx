import { useEffect, useState } from "react";
import { axiosInstance } from "../../service/axiosInterceptor";

const ShowAllTheCompaintsdata = () => {
  const [complaintsList, setComplaintsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(""); // For loader on a specific item
  const [error, setError] = useState("");

  const fetchComplaints = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/api/complaint-report');
      setComplaintsList(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch complaints data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleActivate = async (id) => {
    setActionId(id);
    try {
      await axiosInstance.put(`/api/complaint-report/${id}/activate`);
      fetchComplaints();
    } catch (err) {
      alert("Activation failed.");
    } finally {
      setActionId("");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this report?")) return;
    setActionId(id);
    try {
      await axiosInstance.delete(`/api/complaint-report/${id}`);
      fetchComplaints();
    } catch (err) {
      alert("Deletion failed.");
    } finally {
      setActionId("");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">All Complaint Reports</h1>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && complaintsList.length === 0 && (
        <p className="text-center text-gray-500">No complaint reports found.</p>
      )}

      <div className="space-y-6">
        {complaintsList.map((report) => (
          <div
            key={report._id}
            className={`border rounded-lg shadow-md p-6 transition-all ${
              report.isActive ? "border-green-500 bg-green-50" : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-blue-700">
                Month Ending: {report.monthEnding}
              </h2>
              <div className="space-x-2">
                {report.isActive ? (
                  <button className="bg-green-600 text-white px-4 py-1 rounded" disabled>
                    Active
                  </button>
                ) : (
                  <button
                    onClick={() => handleActivate(report._id)}
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                    disabled={actionId === report._id}
                  >
                    {actionId === report._id ? "Activating..." : "Activate"}
                  </button>
                )}
                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  disabled={actionId === report._id}
                >
                  {actionId === report._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-bold mb-1 text-gray-700">Directly from Investors</h3>
                <ul className="ml-4 list-disc text-gray-600">
                  <li>Pending End Last Month: {report.directlyFromInvestors.pendingEndLastMonth}</li>
                  <li>Received: {report.directlyFromInvestors.received}</li>
                  <li>Resolved: {report.directlyFromInvestors.resolved}</li>
                  <li>Total Pending: {report.directlyFromInvestors.totalPending}</li>
                  <li>Pending Over 3 Months: {report.directlyFromInvestors.pendingOver3Months}</li>
                  <li>Avg Resolution Time: {report.directlyFromInvestors.avgResolutionTime}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-1 text-gray-700">SEBI (SCORES)</h3>
                <ul className="ml-4 list-disc text-gray-600">
                  <li>Pending End Last Month: {report.sebiScores.pendingEndLastMonth}</li>
                  <li>Received: {report.sebiScores.received}</li>
                  <li>Resolved: {report.sebiScores.resolved}</li>
                  <li>Total Pending: {report.sebiScores.totalPending}</li>
                  <li>Pending Over 3 Months: {report.sebiScores.pendingOver3Months}</li>
                  <li>Avg Resolution Time: {report.sebiScores.avgResolutionTime}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-1 text-gray-700">Other Sources</h3>
                <ul className="ml-4 list-disc text-gray-600">
                  <li>Pending End Last Month: {report.otherSources.pendingEndLastMonth}</li>
                  <li>Received: {report.otherSources.received}</li>
                  <li>Resolved: {report.otherSources.resolved}</li>
                  <li>Total Pending: {report.otherSources.totalPending}</li>
                  <li>Pending Over 3 Months: {report.otherSources.pendingOver3Months}</li>
                  <li>Avg Resolution Time: {report.otherSources.avgResolutionTime}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-1 text-green-700">Grand Total</h3>
                <ul className="ml-4 list-disc text-green-800">
                  <li>Pending End Last Month: {report.grandTotal.pendingEndLastMonth}</li>
                  <li>Received: {report.grandTotal.received}</li>
                  <li>Resolved: {report.grandTotal.resolved}</li>
                  <li>Total Pending: {report.grandTotal.totalPending}</li>
                  <li>Pending Over 3 Months: {report.grandTotal.pendingOver3Months}</li>
                  <li>Avg Resolution Time: {report.grandTotal.avgResolutionTime}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllTheCompaintsdata;
