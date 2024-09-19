export default function AppliedUser() {
  return (
    <div className="w-full p-6 flex flex-wrap">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
          <div className="flex justify-between items-center">
            <div className="w-24 h-24 ml-4 mt-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mr-4 mt-8 text-right">
              <h2 className="text-2xl font-bold text-white">Jane Doe</h2>
              <p className="text-white opacity-90">
                UI/UX Designer at ABC Corp
              </p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {["UI/UX Design", "Figma", "Adobe XD", "Prototyping"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm text-center text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Connect Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Connect
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
          <div className="flex justify-between items-center">
            <div className="w-24 h-24 ml-4 mt-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mr-4 mt-8 text-right">
              <h2 className="text-2xl font-bold text-white">Jane Doe</h2>
              <p className="text-white opacity-90">
                UI/UX Designer at ABC Corp
              </p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {["UI/UX Design", "Figma", "Adobe XD", "Prototyping"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm text-center text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Connect Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Connect
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
          <div className="flex justify-between items-center">
            <div className="w-24 h-24 ml-4 mt-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mr-4 mt-8 text-right">
              <h2 className="text-2xl font-bold text-white">Jane Doe</h2>
              <p className="text-white opacity-90">
                UI/UX Designer at ABC Corp
              </p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {["UI/UX Design", "Figma", "Adobe XD", "Prototyping"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm text-center text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Connect Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Connect
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
          <div className="flex justify-between items-center">
            <div className="w-24 h-24 ml-4 mt-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mr-4 mt-8 text-right">
              <h2 className="text-2xl font-bold text-white">Jane Doe</h2>
              <p className="text-white opacity-90">
                UI/UX Designer at ABC Corp
              </p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {["UI/UX Design", "Figma", "Adobe XD", "Prototyping"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm text-center text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Connect Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
