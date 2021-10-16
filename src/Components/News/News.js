import React from "react";
import Pagination from '../Pagination/Pagination'
import Post from './Post'
import './News.css'

const News = ({posts}) => {
  return (
    <div className='course-container'>
      {
        posts.length > 0 ? (
          <>
            <Pagination 
              data={posts}
              RenderComponent={Post}
              title='News'
              pageLimit={5}
              dataLimit={3}
            />
          </>
        ) : (
          <h1>No posts to display</h1>
        )
      }
      </div>
  );
};

export default News;