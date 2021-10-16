import { Link } from 'react-router-dom'
import { CourseData } from "./CoursesData";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="w3l-courses">
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
                  <div className="card">
                    <div className="card-header">
                      <a href="#course-single" className="zoom d-block">
                        <img
                          className="card-img-bottom d-block"
                          src={course.media.image.raw}
                          alt="Card cap"
                        />
                      </a>
                      <div className="post-pos">
                        <a href="#reciepe" className="receipe blue">
                          Beginner
                        </a>
                      </div>
                    </div>
                    <div className="card-body course-details">
                      <div className="price-review d-flex justify-content-between mb-1align-items-center">
                        <p>$35.00</p>
                        <ul className="rating-star">
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star"></span>
                          </li>
                          <li>
                            <span className="fa fa-star-o"></span>
                          </li>
                        </ul>
                      </div>
                      <a href="#course-single" className="course-desc">
                        {course.name}
                      </a>
                      <div className="course-meta mt-4">
                        <div className="meta-item course-lesson">
                          <span className="fa fa-clock-o"></span>
                          <span className="meta-value"> {course.end} </span>
                        </div>
                        <div className="meta-item course-">
                          <span className="fa fa-user-o"></span>
                          <span className="meta-value"> 50 </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="author align-items-center">
                        <img
                          src="assets/images/a1.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                        <ul className="blog-meta">
                          <li>
                            <span className="meta-value mx-1">by</span>{" "}
                            <a href="#author"> Olivia</a>
                          </li>
                          <li>
                            <span className="meta-value mx-1">in</span>{" "}
                            <a href="#author"> Programing</a>
                          </li>
                        </ul>
                      </div>
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