import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./Carousel.css";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the list of course IDs (specific ids from the api)
  const desiredCourseIds = [
    "HIST-230",
    "ENGL-153",
    "MUSC-105",
    "ENVS-115",
    "RELG-232",
  ]; // Replace with actual course IDs that we want

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/course"
        );
        // Filter the response to include only the courses with desired IDs
        const filteredData = response.data.filter((course) =>
          desiredCourseIds.includes(course.course_id)
        );
        setCarouselData(filteredData);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (currentSlide < carouselData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(carouselData.length - 1);
    }
  };

  // This is for the auto slide, we basically want to call handleNext every 5 seconds and clear the interval when the component unmounts.
  // The array that has currentSlide and carouselData.length as dependencies is to make sure that the interval is cleared when the component unmounts.
  // We can use this instead of a filter.
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, carouselData.length]);

  /*
  Needs to be redefined -- this is for the buttons at the bottom
  const slideButtons = (index) => {
    let classes = "slider-button";
    if (currentSlide === index) classes += " selected";
    return classes;
  };
  */
  if (!carouselData.length) {
    return <div>Loading...</div>; // Just a loading state. You can change this to a spinner or something.
  }

  return (
    <div className="carousel">
      <div className="slide">
        <div className="image-holder">
          {/* <img
            //no images in the database 'yet' :|
            alt={carouselData[currentSlide].title}
            src={carouselData[currentSlide].picUrl}
            className="carousel-image"
          /> */}
        </div>

        <div className="info-container">
          <h1 className="carousel-top">
            {carouselData[currentSlide].course_id +
              ": " +
              carouselData[currentSlide].title}
          </h1>
          <ul className="carousel-top">
            {carouselData[currentSlide].offering.map((offering, index) => (
              <li key={index}>{offering.faculty_name}</li>
            ))}
          </ul>
          <a href={carouselData[currentSlide].title} className="carousel-top">
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
      {/*this needs to be redefined*/}
      {/* <div className="slider-buttons">
        {carouselData.map((box, index) => (
          <button
            key={index}
            className={slideButtons(index)}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div> */}{" "}
      <button className="add">Quick add</button>
    </div>
  );
};

export default Carousel;
