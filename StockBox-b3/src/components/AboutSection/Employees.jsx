"use client"

import { useEffect, useState } from "react"
import { axiosInstance } from "../../../../dashboard/src/service/axiosInterceptor"

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const imagePath = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetchEmployees()
  }, [])

  // Fetch employee data from the server
  const fetchEmployees = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get("/api/employee/")
      console.log(response.data)
      setEmployees(response.data)
      setError(null)
    } catch (error) {
      console.error("Error fetching employees:", error)
      setError("Failed to fetch employees")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8 min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        <span className="ml-3 text-yellow-700 text-lg">Loading employees...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8 text-center min-h-[400px] flex flex-col justify-center">
        <div className="text-yellow-600 font-medium text-lg mb-4">{error}</div>
        <button
          onClick={fetchEmployees}
          className="mx-auto px-4 md:px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-800 mb-2">Our Team</h1>
        <p className="text-yellow-600">Meet our amazing team members</p>

      </div>

      {employees.length === 0 ? (
        <div className="text-center text-yellow-500 py-16 bg-yellow-50/50 backdrop-blur-sm rounded-2xl border border-yellow-200">
          <div className="text-6xl mb-4">👥</div>
          <div className="text-xl font-medium">No employees found</div>
          <div className="text-sm mt-2">Add some employees to get started</div>
        </div>
      ) : (
        <div className="space-y-8">
          {employees.map((employee, index) => (
            <div
              key={employee._id}
              className={`backdrop-blur-sm  rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-yellow-100 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex lg:items-center lg:space-x-8`}
            >
              {/* Image Section */}
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="relative">
                  {employee.image ? (
                    <img
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-yellow-200 shadow-lg mx-auto lg:mx-0"
                      src={`${imagePath}${employee.image}`}
                      alt={employee.name}
                      onError={(e) => {
                        e.target.style.display = "none"
                        e.target.nextSibling.style.display = "flex"
                      }}
                    />
                  ) : null}
                  <div
                    className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#d9ee85] to-yellow-200 flex items-center justify-center text-[#d9ee85] text-4xl lg:text-5xl shadow-lg mx-auto lg:mx-0 ${employee.image ? "hidden" : "flex"}`}
                  >
                    👤
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 w-6 h-6 bg-yellow-400 rounded-full border-3 border-white shadow-md"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-left" : "lg:text-left"} text-center px-1 md:px-10 lg:text-left w-full`}>
                <div className="mb-4"> 
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#d9ee85] mb-2">{employee.name}</h2>
                  <div className="inline-flex items-center">
                    <span className=" px-1 md:px-4 py-2 bg-gradient-to-r from-[#58584b0e] to-[#d9ee853c] text-white text-sm font-semibold rounded-full shadow-md">
                      {employee.designation}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-yellow-700 text-base lg:text-lg leading-relaxed">{employee.description}</p>
                </div>

                <div className="space-y-3">
                 

                  {/* Action buttons */}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Employees
