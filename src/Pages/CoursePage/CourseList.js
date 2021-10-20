import React from "react";
import { CourseData } from "./CoursesData";
import "bootstrap/dist/css/bootstrap.css";
// import "./.css";

const CourseList = () => {
  return (
    <div className="row">
      {CourseData.map((course) => {
        return (
          <div className="col-md-4 col-sm-12" key={course.id}>
            <div className="card mb-5">
              <img className="card-img-top" src={course.media.image.raw} alt="news" />
              <div className="card-body">
                <p className="card-text">{course.name}</p>
                <p className="card-text">
                  <span>{course.end}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
