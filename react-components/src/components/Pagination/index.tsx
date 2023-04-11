import React from 'react';
import './index.scss';

interface PaginationProps {
  pageCount: number;
  initialPage: number;
  onChange: (selected: number) => void;
}

const Pagination = ({ pageCount, initialPage, onChange }: PaginationProps) => {
  const pages = [];
  if (!pageCount) return <></>;
  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <div
        key={i}
        onClick={() => onChange(i - 1)}
        className={
          i - 1 === initialPage ? 'pagination__page pagination__active' : 'pagination__page'
        }
      >
        {i}
      </div>
    );
  }

  return <div className="pagination">{pages}</div>;
};

export default Pagination;
