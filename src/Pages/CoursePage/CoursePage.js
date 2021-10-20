import React from "react";
import { CourseData } from "./CoursesData";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Pagination from "../../Components/Pagination/Pagination";
import Slider from "../../Components/Slider/Slider";
import CourseList from "./CourseList";

const CoursePage = () => {
  
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="course-container">
        {CourseData.map.length > 0 ? (
          <>
            <Pagination
              data={CourseData}
              RenderComponent={CourseList}
              title="Courses"
              pageLimit={3}
              dataLimit={1}
            />
          </>
        ) : (
          <h1>No posts to display</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
