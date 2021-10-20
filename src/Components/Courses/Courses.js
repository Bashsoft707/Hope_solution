import { Link } from 'react-router-dom'
import { CourseData } from "../../Pages/CoursePage/CoursesData";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="w3l-courses mt-5 mb-5">
      <div className="blog" id="courses">
        <div className="container">
          <h5 className="title-small">Join our learn Courses</h5>
          <h3 className="title-big">
            Featured Online <span>Courses</span>
          </h3>
          <div className="row">
          {CourseData.slice(0, 3).map((course) => {
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
          <div className="text-more">
            <p className="pt-md-3 sample text-center">
              Control your personal preference settings to get notified about
              appropriate courses
              <Link to="/course">
                View All Courses
                <span className="pl-2 fa fa-long-arrow-right"></span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;