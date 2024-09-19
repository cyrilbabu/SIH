/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import ShowMoreShowLess from "./ShowMoreShowLess";

/* eslint-disable react/prop-types */
export default function CourseThumbnail({
  progress,
  course,
  notEnorll = false,
}) {
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <motion.div
      className="w-1/2 md:w-1/3 p-1 py-2"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }} // This ensures the animation happens only once when scrolled into view
      onClick={() => {
        notEnorll ? null : navigate(`/employee/course/${course._id}`);
      }}
    >
      <div className="bg-secondary3 p-4 rounded-md shadow-xl">
        <div className="flex justify-center">
          <img src={course?.thumbnail} alt="thumbnail" className="w-full" />
        </div>

        <h5 className="px-2 pt-2 text-lg font-bold text-testColor1">
          {course?.courseTitle}
        </h5>
        <h6 className="px-2 text-sm">
          <ShowMoreShowLess
            descriptionDetail={course?.courseDescription}
            charNo="10"
          />
        </h6>
        {notEnorll ? (
          <button
            className={`w-full ${"bg-gray-600 "} text-slate-50 rounded-md mx-2 font-bold text-sm p-1 my-2`}
          >
            Requested
          </button>
        ) : !(progress === 0) ? (
          !(progress === 100) ? (
            <ProgressBar progress={progress} />
          ) : (
            <p className="p-2 font-bold text-md text-blue-700">Completed</p>
          )
        ) : (
          <button className="w-full bg-primary text-slate-50 rounded-md mx-2 font-bold text-sm p-1 my-2">
            Start Course
          </button>
        )}
      </div>
    </motion.div>
  );
}
