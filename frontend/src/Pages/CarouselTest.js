import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import axios from "axios";

import "./Carousel.css";

// type Course = {
//     course_id: string;
//     title: string;
//     credit_type: string;
//     description: string;
//     subject_id: string;
//     number: string;
//     department_id: string;
//     division_id: string;
//     offering: Offering[]
// };

// type OfferingLevel = {
//     //Contents of invoked type
//     offering_id: string;
//     level_id: string;
// };

// type Offering = {
//     offering_id: string;
//     course_id: string;
//     comments: string;
//     status: string;
//     credit: string;
//     term_id: string;
//     start_time: string;
//     end_time: string;
//     weekdays: string;
//     capacity: string;
//     active_students: string;
//     section_number: string;
//     faculty_name: string;
//     building: string;
//     room: string;
//     offering_level: OfferingLevel[]; //this line is to invoke a link to the other table.
// };

const CourseData = () => {
    const [offerings, setOfferings] = useState<Course>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://hhqv2backend.vercel.app/api/course"
          );
          setOfferings(response.data);
        } catch (error) {
          console.error("Failed to fetch courses:", error);
        }
    };
  
      fetchData();
    }, [])
};

let CarouselOptions = CourseData.filter(function (course) { 
    return course.offering.term_id === "2023FA" && course.offering.offering_level.includes("FY"); 
}).map(function (course) { 
    return course.course_id; 
})

const carrouselData = []
for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * CarouselOptions.length);
    carrouselData[i] = CarouselOptions[index]
}


const Carousel = () => {
  const [currentlide, setCurrentSlide] = useState(0);
  const currentSlide = 0;
  const handleNext = () => {
    if (currentSlide < carrouselData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(carrouselData.length - 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  function slideButtons(index) {
    let classes = " slider-button ";
    if (currentSlide === index) classes += " selected ";
    return classes;
  }

  return (
    <div className="carousel">
      <div className="slide">
        <div className="image-holder">
          <img
            src={carrouselData[currentSlide].picUrl}
            alt=""
            className="carrousel-image"
          />
        </div>
        <div className="info-container">
          <h1 className="carousel-top">{carrouselData[currentSlide].title}</h1>
          <h3 className="carousel-top">{carrouselData[currentSlide].prof}</h3>
          <ul className="carousel-top">
            {carrouselData[currentSlide].offerings.map((offering) => (
              <li key={offering}>{offering}</li>
            ))}
          </ul>
          <a href={carrouselData[currentSlide].info} className="carousel-top">
            Learn more
          </a>
        </div>
      </div>
      <button className="left-click slide-controller" onClick={handlePrev}>
        <BsChevronLeft className="left-icon" />
      </button>
      <button className="right-click slide-controller" onClick={handleNext}>
        <BsChevronRight />
      </button>
      <div className="slider-buttons">
        {carrouselData.map((box, index) => (
          <button
            key={index}
            className={slideButtons(index)}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button className="add">Quick add</button>
    </div>
  );
};

export default Carousel;