import React from 'react';
import './index.scss';
const Pagination = ({ pageCount, initialPage, onChange }) => {
    const pages = [];
    if (!pageCount)
        return React.createElement(React.Fragment, null);
    for (let i = 1; i <= pageCount; i++) {
        pages.push(React.createElement("div", { key: i, onClick: () => onChange(i - 1), className: i - 1 === initialPage ? 'pagination__page pagination__active' : 'pagination__page' }, i));
    }
    return React.createElement("div", { className: "pagination" }, pages);
};
export default Pagination;
