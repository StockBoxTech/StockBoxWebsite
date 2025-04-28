import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import TableComponent from "./pages/TableComponent";
import TableYearComponent from "./pages/TableYearComponent";
import EventDashboard from "./pages/EventDashboard";
import Crousal_image from "./pages/Crousal_image";
import PdfUpload from "./pages/PdfUpload";
import Login from "./pages/Login";
import CreateBlogs from "./pages/createBlog/CreateBlogs";
import SingleBlog from "./pages/Blog";
import JobForm from "./pages/JobForm";
import Category from "./pages/Category";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie"; // Optional: You can also use plain cookie handling if not using js-cookie
import DashboardLayout from "./Layout/Layout";
import UpdateCredentials from "./pages/Setting/UpdateCredential";
import ViewUserDetails from "./pages/ViewUserDetails";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = () => {
      const itemStr = localStorage.getItem("isLoggedIn");

      if (!itemStr) {
        // No login data, redirect
        navigate("/login");
        return;
      }

      const item = JSON.parse(itemStr);
      const now = new Date();

      if (now.getTime() - item.timestamp > 24 * 60 * 60 * 1000) {
        // More than 24 hours passed
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
      }
    };

    checkLoginStatus();
  }, [navigate]);
  

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/tables" element={<TableComponent />} />
          <Route path="/tablesYearly" element={<TableYearComponent />} />
          <Route path="/Event" element={<EventDashboard />} />
          <Route path="/carousel" element={<Crousal_image />} />
          <Route path="/upload" element={<PdfUpload />} />
          <Route path="/blogData/create-blogs" element={<CreateBlogs />} />
          <Route path="/jobform" element={<JobForm />} />
          <Route path="/category" element={<Category />} />
          <Route path="/update_blog/:id" element={<CreateBlogs />} />
          <Route path="/settings" element={<UpdateCredentials />} />
          <Route path="/ViewUserDetails" element={<ViewUserDetails />} />

          
        </Route>
      </Routes>
    </>
  );
};

export default App;
