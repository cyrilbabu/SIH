import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { MdOutlineOndemandVideo } from "react-icons/md";
import CardHeading from "../Ui/CardHeading";
import ShowMoreShowLess from "../Ui/ShowMoreShowLess";
import CourseThumbnail from "../Ui/CourseThumnail";
import Empty from "../Ui/Empty";

// Dummy data
const dummyEmployeeInfo = {
  empId: "emp123",
  employeeName: "John Doe",
  currentCourse: "course2",
};

const dummyCourses = [
  {
    _id: "course1",
    courseTitle: "React Basics",
    courseDescription:
      "Learn the basics of React, including components, hooks, and state management.",
    thumbnail: "https://via.placeholder.com/300x200",
    userStatus: [{ user: "emp123", status: 0 }],
  },
  {
    _id: "course2",
    courseTitle: "Advanced React",
    courseDescription:
      "Dive deep into React's advanced concepts such as context, custom hooks, and performance optimization.",
    thumbnail: "https://via.placeholder.com/300x200",
    userStatus: [{ user: "emp123", status: 50 }],
  },
  {
    _id: "course3",
    courseTitle: "Node.js Essentials",
    courseDescription:
      "Get hands-on experience with Node.js and learn how to build server-side applications.",
    thumbnail: "https://via.placeholder.com/300x200",
    userStatus: [{ user: "emp123", status: 100 }],
  },
  {
    _id: "course4",
    courseTitle: "Express.js API Development",
    courseDescription:
      "Learn how to build RESTful APIs using Express.js and connect them to a MongoDB database.",
    thumbnail: "https://via.placeholder.com/300x200",
    userStatus: [{ user: "emp123", status: 0 }],
  },
];

const dummyMoreCourses = [
  {
    _id: "course5",
    courseTitle: "JavaScript Mastery",
    courseDescription:
      "Master JavaScript and its ES6+ features to become a proficient frontend developer.",
    thumbnail: "https://via.placeholder.com/300x200",
    userStatus: [],
  },
  {
    _id: "course6",
    courseTitle: "Full-Stack Development",
    courseDescription: "Learn full-stack web development using the MERN stack.",
    thumbnail: "https://via.placeholder.com/300x200",
    userStatus: [],
  },
];

export default function Courses() {
  const navigate = useNavigate();

  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);

  const getItemStyle = (index) => ({
    opacity: isRendered ? 1 : 0,
    transform: isRendered
      ? "translateY(0) scale(1)"
      : "translateY(-500px) scale(1)",
    transition: "transform .5s",
    transitionDelay: isRendered ? `${index}s` : "0s",
  });

  // Separate courses into different categories based on status
  const coursesStatus0OrNotFound = [];
  const coursesStatusMoreThan0LessThan100 = [];
  const coursesStatus100 = [];

  dummyCourses.forEach((course) => {
    const userStatus = course.userStatus.find(
      (user) => user.user === dummyEmployeeInfo.empId
    );

    if (userStatus) {
      if (userStatus.status === 0) {
        coursesStatus0OrNotFound.push(course);
      } else if (userStatus.status > 0 && userStatus.status < 100) {
        coursesStatusMoreThan0LessThan100.push(course);
      } else if (userStatus.status === 100) {
        coursesStatus100.push(course);
      }
    } else {
      coursesStatus0OrNotFound.push(course);
    }
  });

  const mostRecentCourse = dummyCourses.find(
    (course) => course._id === dummyEmployeeInfo.currentCourse
  );

  return (
    <div className="w-full p-4 pt-0 h-full">
      {!mostRecentCourse ? null : (
        <div style={getItemStyle(0)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="w-full md:flex py-2 pt-2 mt-4 bg-white rounded shadow-xl"
          >
            <div className="w-full">
              <CardHeading title="Current Courses" />
              <div className="flex w-full">
                <div className="md:w-1/2 px-2">
                  <img
                    className="w-full"
                    src={mostRecentCourse?.thumbnail}
                    alt="thumbnail"
                    style={getItemStyle(0.1)}
                  />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col">
                  <p className="text-2xl font-bold pb-2 text-testColor1">
                    {mostRecentCourse?.courseTitle}
                  </p>
                  <div className="text-lg font-medium">
                    <ShowMoreShowLess
                      descriptionDetail={mostRecentCourse?.courseDescription}
                      charNo={200}
                    />
                  </div>
                  <button
                    className="w-full bg-blue-600 text-slate-50 rounded-md font-bold text-sm p-1 mt-auto"
                    onClick={() => {
                      navigate(`/employee/course/${mostRecentCourse?._id}`);
                    }}
                  >
                    Continue Course
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Ongoing Courses */}
      <div className="w-full my-4 rounded bg-white drop-shadow-xl md:pt-2">
        <CardHeading
          title="Ongoing Courses"
          icon={<MdOutlineOndemandVideo />}
        />
        <div className="flex flex-wrap">
          {coursesStatusMoreThan0LessThan100.length > 0 ? (
            <div className="flex flex-wrap w-full">
              {coursesStatusMoreThan0LessThan100.map((course) => (
                <CourseThumbnail key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <Empty text="No ongoing courses at the moment." />
          )}
        </div>
      </div>

      {/* Courses Not Started */}
      <div className="w-full my-4 rounded bg-white drop-shadow-xl md:pt-2">
        <CardHeading
          title="Courses Not Started"
          icon={<MdOutlineOndemandVideo />}
        />
        <div className="flex flex-wrap">
          {coursesStatus0OrNotFound.length > 0 ? (
            <div className="flex flex-wrap w-full">
              {coursesStatus0OrNotFound.map((course) => (
                <CourseThumbnail key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <Empty text="No courses to start at the moment." />
          )}
        </div>
      </div>

      {/* Completed Courses */}
      <div className="w-full my-4 rounded bg-white drop-shadow-xl md:pt-2">
        <CardHeading
          title="Courses Completed"
          icon={<MdOutlineOndemandVideo />}
        />
        <div className="flex flex-wrap">
          {coursesStatus100.length > 0 ? (
            <div className="flex flex-wrap w-full">
              {coursesStatus100.map((course) => (
                <CourseThumbnail key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <Empty text="No completed courses at the moment." />
          )}
        </div>
      </div>

      {/* More Courses */}
      <div className="w-full my-4 rounded bg-white drop-shadow-xl md:pt-2">
        <CardHeading title="More Courses" icon={<MdOutlineOndemandVideo />} />
        <div className="flex flex-wrap">
          {dummyMoreCourses.length > 0 ? (
            <div className="flex flex-wrap w-full">
              {dummyMoreCourses.map((course) => (
                <CourseThumbnail
                  key={course._id}
                  course={course}
                  notEnroll={true}
                />
              ))}
            </div>
          ) : (
            <Empty text="No more courses at the moment." />
          )}
        </div>
      </div>
    </div>
  );
}
