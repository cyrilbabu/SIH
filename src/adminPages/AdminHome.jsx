import { CgProfile } from "react-icons/cg";
import { FiBriefcase, FiCheckCircle, FiClock } from "react-icons/fi";

export default function AdminHome() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-gray-200">
      {/* Main Content Area */}
      <main className="flex-1 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>

        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              <FiBriefcase className="mr-2 text-blue-600" /> Total Jobs
            </h2>
            <p className="text-4xl font-extrabold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              <FiCheckCircle className="mr-2 text-green-600" /> Jobs You Applied
            </h2>
            <p className="text-4xl font-extrabold text-green-600">6</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
              <FiClock className="mr-2 text-purple-600" /> New Jobs
            </h2>
            <p className="text-4xl font-extrabold text-purple-600">67</p>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12 hover:shadow-lg transition-shadow duration-300 transform">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Jobs
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Software Engineer</span>
              <span className="text-gray-500 text-sm">2 hours ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Full Stack Developer</span>
              <span className="text-gray-500 text-sm">5 hours ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">UI Developer</span>
              <span className="text-gray-500 text-sm">1 day ago</span>
            </li>
          </ul>
        </section>

        {/* Notification Section */}
        <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12 hover:shadow-lg transition-shadow duration-300 transform ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Notification
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Software Engineer</span>
              <span className="text-red-500 text-sm">Rejected</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Full Stack Developer</span>
              <span className="text-green-500 text-sm">
                Qualified For Next Round
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">UI Developer</span>
              <span className="text-yellow-500 text-sm">In Process</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
