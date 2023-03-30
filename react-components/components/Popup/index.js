import React from 'react';
import './index.scss';
const Popup = ({ showPopup }) => {
    return (React.createElement("div", { className: showPopup ? 'popup-active popup' : 'popup-close popup' },
        React.createElement("div", { className: showPopup ? 'wrapper-active popup__wrapper' : 'wrapper-close popup__wrapper' },
            React.createElement("div", { className: "popup__text" }, "Beast card created"),
            React.createElement("div", { className: "popup__image" }))));
};
export default Popup;
