import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Post.css";

const Post = (props) => {
  const { source, title, description, author, publishedAt, url, urlToImage } = props.data;
  return (
    <div className='col-md-4 col-sm-12'>
      <div className="card mb-5">
        <img className="card-img-top" src={urlToImage} alt="news" />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">
            <span>{author}</span>
            <span>{source.name}</span>
          </p>
          <p className="card-text">{description}</p>
          <p className="card-text">
          <span>Published at: {publishedAt}</span>
          <span>Read more: {url}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
