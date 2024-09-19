/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

import Signup from "./Common/auth/Signup";
import UserLogin from "./Common/auth/UserLogin";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./Common/auth/AdminLogin";
import UserAppLayout from "./Ui/UserAppLayout";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Jobs from "./pages/Jobs";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import AdminJobs from "./adminPages/AdminJobs";
import PostJob from "./adminPages/PostJob";
import AdminAppLayout from "./Ui/AdminAppLayout";
import AdminHome from "./adminPages/AdminHome";
import FilledApplication from "./adminPages/FilledApplication";

import AllApplication from "./adminPages/AllApplication";

import Courses from "./pages/Courses";
import JobApplicationForm from "./Ui/JobApplicationForm";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="user/login" element={<UserLogin />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="user/signup" element={<Signup />} />

          <Route element={<UserAppLayout />}>
            <Route path="user/home" element={<Home />} />
            <Route path="user/jobs" element={<Jobs />} />
            <Route path="user/applications" element={<Applications />} />
            <Route path="user/courses" element={<Courses />} />
            <Route path="user/profile" element={<Profile />} />
            <Route
              path="user/profile/documents"
              element={<JobApplicationForm />}
            />
            <Route path="user/settings" element={<Settings />} />
          </Route>

          <Route element={<AdminAppLayout />}>
            <Route path="admin/home" element={<AdminHome />} />
            <Route
              path="admin/seeAllApplication"
              element={<AllApplication />}
            />
            <Route path="admin/jobs" element={<AdminJobs />} />
            <Route path="admin/jobs/post" element={<PostJob />} />
            <Route path="admin/applications" element={<FilledApplication />} />
            <Route path="admin/settings" element={<Settings />} />
          </Route>

          <Route path="/" element={<LandingPage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
          style={{
            fontSize: "16px",
            maxWidth: "1000px",
            margin: "0 50px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "black",
          }}
          toastStyle={{
            backgroundColor: "white",
            color: "black",
            padding: "16px 24px",
          }}
        />

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            duration: 5000, // Matches autoClose duration
            style: {
              fontSize: "16px",
              maxWidth: "700px",
              margin: "0 50px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
            success: {
              duration: 3000, // Specific for success
            },
            error: {
              duration: 5000, // Specific for error
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
