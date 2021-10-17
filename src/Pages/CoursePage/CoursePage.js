import React from "react";
import CourseList from "./CourseList";
import { CourseData } from "../../Components/Courses/CoursesData";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Pagination from "../../Components/Pagination/Pagination";
import Slider from "../../Components/Slider/Slider";

const CoursePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="course-container">
        {CourseData.length > 0 ? (
          <>
            <Pagination
              data={CourseData}
              RenderComponent={CourseList}
              title="posts"
              pageLimit={5}
              dataLimit={3}
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
