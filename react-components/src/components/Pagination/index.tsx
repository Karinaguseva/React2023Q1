import React from 'react';
import ReactPaginate from 'react-paginate';
import './index.scss';

interface PaginationProps {
  pageCount: number;
  initialPage: number;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}

const Pagination = ({
  pageCount,
  initialPage,
  marginPagesDisplayed,
  pageRangeDisplayed,
  onChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      nextLabel=" "
      previousLabel=" "
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onChange}
      containerClassName="pagination"
      activeClassName="pagination__active"
      pageLinkClassName="pagination__page-link"
      breakLinkClassName="pagination__break-link"
      nextLinkClassName="pagination__next-link"
      previousLinkClassName="pagination__prev-link"
      pageClassName="pagination__page"
      breakClassName="pagination__break"
      nextClassName="pagination__next"
      previousClassName="pagination__prev"
    />
  );
};

export default Pagination;
