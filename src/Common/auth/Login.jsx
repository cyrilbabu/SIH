import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between admin and user login
  const handleToggle = () => {
    setIsAdmin((prevState) => !prevState); // Toggle between admin and user
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic based on user type (admin or user)
    if (isAdmin) {
      console.log("Admin Login:", data);
    } else {
      console.log("User Login:", data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container that wraps both form and image */}
      <div className="flex bg-white rounded-lg shadow-lg max-w-4xl p-8">
        {/* Login form */}
        <div className="w-1/2 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isAdmin ? "Admin Login" : "User Login"}
          </h2>
          <div className="flex justify-center gap-3">
            <span>User</span>
            <Toggle
              // defaultChecked={this.state.tofuIsReady}
              icons={false}
              onChange={() => {
                handleToggle();
                // handleRegisterClick();
              }}
            />
            <span>Admin</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-800 transition duration-300"
            >
              {isAdmin ? "Login as Admin" : "Login as User"}
            </button>
          </form>

          <div className="text-center mt-4">
            {isAdmin ? null : (
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-black hover:text-gray-800">
                  Sign Up
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="/pngegg.png"
            alt="Login Illustration"
            className="object-contain w-full h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}
