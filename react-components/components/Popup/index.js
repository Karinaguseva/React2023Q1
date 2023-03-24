import React, { Component } from 'react';
import './index.scss';
class Popup extends Component {
    render() {
        return (React.createElement("div", { className: this.props.showPopup ? 'popup-active popup' : 'popup-close popup' },
            React.createElement("div", { className: this.props.showPopup ? 'wrapper-active popup__wrapper' : 'wrapper-close popup__wrapper' },
                React.createElement("div", { className: "popup__text" }, "Beast card created"),
                React.createElement("div", { className: "popup__image" }))));
    }
}
export default Popup;
