/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Navbar({ show = false }) {
  const [isRendered, setIsRendered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const flashUpStyle = {
    opacity: isRendered ? 1 : 0,
    transform: isRendered
      ? "translateY(0) scale(1)"
      : "translateY(-100px) scale(0.9)",
    transition: "opacity .5s ease-out, transform .5s ease-out",
  };

  return (
    <div
      className="flex bg-blue-600 text-lg md:text-3xl font-bold text-slate-50 border-b border-white p-3 py-1 w-full justify-between items-center"
      style={flashUpStyle}
    >
      <div className="px-4 flex items-center">
        <img src="/icon.png" className="w-12 rounded" />
        <p className="px-4 md:text-3xl text-xl">Rajasthan Government</p>
      </div>
      {show ? (
        <div>
          <button
            className="text-xl font-bold bg-blue-600 rounded border py-1 px-3 mr-3"
            onClick={() => navigate("/admin/login")}
          >
            Admin
          </button>
          <button
            className="text-xl font-bold bg-blue-600 rounded border py-1 px-3 mr-3"
            onClick={() => navigate("/user/login")}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="px-4 text-4xl hidden md:flex">
          <IoReorderThree />
        </div>
      )}
    </div>
  );
}
