import React from "react";

export default function AppliedUser() {
  return (
    <div className="w-full h-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      {/* Card Header */}
      <div className="bg-gray-100 w-full p-6 bg-gradient-to-r from-blue-400 to-purple-400">
        <div className="flex justify-between ">
          <div className=" w-24 h-24 ml-4 mt-4  rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mr-4 mt-10">
            <h2 className="text-2xl font-bold text-gray-800">Jane Doe</h2>
            <p className="text-black">UI/UX Designer at ABC Corp</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 mt-4">
          {/* Skills */}
          <div className="mt-4 grid grid-cols-4 gap-4">
            {["UI/UX Design", "Figma", "Adobe XD", "Prototyping"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg shadow-sm text-center text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Connect Button */}
        </div>
      </div>
    </div>
  );
}
