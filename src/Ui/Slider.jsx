import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Slider = () => {
  const slides = [
    { url: "/slide2.jpeg" },
    { url: "/slide1.jpg" },
    { url: "/slide3.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full relative">
      <div className="w-full h-[70vh]  overflow-hidden">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 text-4xl rounded-full"
      >
        <IoIosArrowDropleft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 text-4xl rounded-full"
      >
        <IoIosArrowDropright />
      </button>
      {/* <div className="flex justify-center mt-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 bg-gray-800 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
