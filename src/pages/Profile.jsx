import {
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-6">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-500"></div>
          <div className="absolute -bottom-16 left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Profile Information */}
        <div className="p-8 mt-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-500 mt-2">
                Full Stack Developer at XYZ Inc.
              </p>
              <p className="text-gray-500">San Francisco, CA</p>
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Connect
            </button>
          </div>

          {/* Bio Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">About</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Passionate Full Stack Developer with over 5 years of experience.
              Proficient in JavaScript, React, Node.js, and cloud technologies.
              Strong advocate for clean code and scalable solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "AWS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-blue-500" />
                john.doe@example.com
              </li>
              <li className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-blue-500" />
                (123) 456-7890
              </li>
              <li className="flex items-center text-gray-600">
                <FaGlobe className="mr-3 text-blue-500" />
                www.johndoe.com
              </li>
              <li className="flex items-center text-gray-600">
                <FaLinkedin className="mr-3 text-blue-500" />
                linkedin.com/in/johndoe
              </li>
              <li className="flex items-center text-gray-600">
                <FaGithub className="mr-3 text-blue-500" />
                github.com/johndoe
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-800">
                Full Stack Developer
              </h4>
              <p className="text-gray-600">XYZ Inc. • Jan 2021 - Present</p>
              <p className="text-gray-600 mt-2">
                Working on scalable web applications with React and Node.js.
                Leading a team of 5 developers to create new features and
                improve performance.
              </p>
            </div>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-800">
                Frontend Developer
              </h4>
              <p className="text-gray-600">
                ABC Solutions • Jun 2019 - Dec 2020
              </p>
              <p className="text-gray-600 mt-2">
                Designed and developed dynamic user interfaces with React and
                Tailwind CSS. Collaborated closely with backend teams to ensure
                seamless integration.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-800">
                Bachelor of Computer Science
              </h4>
              <p className="text-gray-600">
                University of California • 2015 - 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
