import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function UserApplication({ admin = false }) {
  const navigate = useNavigate();
  return (
    <div className="w-full rounded overflow-hidden flex shadow-lg  bg-white border border-gray-200">
      <div className="">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <span>Job Name : </span>Software Engineer
          </div>
          <p className="text-gray-700 text-base">
            <span>Job Type :</span>
            Full-time
          </p>
          <p className="text-gray-700 text-base">
            Eligibility: Bachelor's Degree in Computer Science
          </p>
        </div>
        {admin ? (
          <div className="px-6 py-4">
            <button className="inline-block bg-blue-600 rounded-lg px-4 py-1 text-lg hover:bg-blue-800 font-semibold text-white mr-2">
              Accept
            </button>
            <button className="inline-block bg-red-600 rounded-lg px-4 py-1 text-lg hover:bg-red-800 font-semibold text-white mr-2">
              Reject
            </button>
            <button
              onClick={() => navigate("/admin/applications/applied")}
              className="inline-block bg-green-600 rounded-lg px-4 py-1 text-lg hover:bg-blue-800 font-semibold text-white mr-2"
            >
              View
            </button>
          </div>
        ) : (
          <div className="px-6 py-4">
            <button className="inline-block bg-blue-600 rounded-lg px-4 py-1 text-lg hover:bg-blue-800 font-semibold text-white mr-2">
              View
            </button>
            <button className="inline-block bg-red-600 rounded-lg px-4 py-1 text-lg hover:bg-red-800 font-semibold text-white mr-2">
              Delete
            </button>
          </div>
        )}
      </div>
      <div>
        <img
          className="w-full h-32 object-cover"
          src="/job.jpeg" // Placeholder image
          alt="Job"
        />
      </div>
    </div>
  );
}
