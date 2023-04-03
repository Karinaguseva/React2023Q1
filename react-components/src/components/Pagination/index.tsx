import React from 'react';
import './index.scss';

interface PaginationProps {
  pageCount: number;
  initialPage: number;
  onChange: (selected: number) => void;
}

const Pagination = ({ pageCount, initialPage, onChange }: PaginationProps) => {
  console.log('initialPage', initialPage);

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <div
        onClick={() => onChange(i - 1)}
        className={
          i - 1 === initialPage
            ? 'pagination__page-link pagination__active'
            : 'pagination__page-link'
        }
      >
        {i}
      </div>
    );
  }

  return (
    <div className="pagination">{pages}</div>
    // <ReactPaginate
    //   nextLabel=" "
    //   previousLabel=" "
    //   pageCount={pageCount}
    //   initialPage={initialPage}
    //   onPageChange={onChange}
    //   containerClassName="pagination"
    //   activeClassName="pagination__active"
    //   pageLinkClassName="pagination__page-link"
    //   breakLinkClassName="pagination__break-link"
    //   nextLinkClassName="pagination__next-link"
    //   previousLinkClassName="pagination__prev-link"
    //   pageClassName="pagination__page"
    //   breakClassName="pagination__break"
    //   nextClassName="pagination__next"
    //   previousClassName="pagination__prev"
    // />
  );
};

export default Pagination;
