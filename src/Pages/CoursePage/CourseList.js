import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "./.css";

const CourseList = (props) => {
  const { id, media, name, end } = props.data;
  return (
    <div className='col-md-4 col-sm-12' key={id}>
      <div className="card mb-5">
        <img className="card-img-top" src={media.image.raw} alt="news" />
        <div className="card-body">
          <p className="card-text">{name}</p>
          <p className="card-text">
            <span>{end}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseList;