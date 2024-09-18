import { FiBriefcase, FiCheckCircle, FiClock } from "react-icons/fi";
import Footer from "../Ui/Footer";
import Navbar from "../Ui/NavBar";
import Slider from "../Ui/Slider";

export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar show={true} />
      <Slider />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 bg-[#8d5322] py-6 ">
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
          <p className="text-4xl font-extrabold text-green-600">Apply Now</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
            <FiClock className="mr-2 text-purple-600" /> New Jobs
          </h2>
          <p className="text-4xl font-extrabold text-purple-600">67</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
