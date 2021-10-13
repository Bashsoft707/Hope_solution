import { usePagination } from "./usePagination";
import classnames from 'classnames';

const Pagination = props => {
    const { onPageChange, totalCount, pageSize, siblingCount = 1, currentPage, className } = props
  
    const paginationRange = usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize
    });
  
    if (currentPage === 0 || paginationRange.length < 2) return null
  
    const onNext = () => onPageChange(currentPage + 1)
  
    const onPrevious = () => onPageChange(currentPage - 1)

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
    }

  export default Pagination