import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Pagination.css'

const Pagination = ({data, RenderComponent, dataLimit, pageLimit, title}) => {
  const [pages] = useState(Math.round(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  const goToNextPage = () => {
    setCurrentPage(page => page + 1)
  }

  const backToPreviousPage = () => {
    setCurrentPage(page => page - 1)
  }

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      <h1 className='text-center'>{title}</h1>
      <div className='data-container'>
        <div className='row'>
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </div>
      </div>
      <div className='pagination'>
          <button 
          onClick={backToPreviousPage}
          className={`previous-page ${currentPage === 1 ? 'disabled' : '' }`} 
          >Prev</button>
          {getPaginationGroup().map((item, index) => (
            <button 
            key={index}
            onClick={changePage}
            className={`pagination-item ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
          <button 
          onClick={goToNextPage}
          className={`next-page ${currentPage === pages ? 'disabled' : '' }`} 
          >Next</button>
      </div>
    </div>
  )
}
  export default Pagination