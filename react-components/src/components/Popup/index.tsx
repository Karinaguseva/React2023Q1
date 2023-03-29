import React, { Component } from 'react';
import './index.scss';

interface PopupProps {
  showPopup: boolean;
}

class Popup extends Component<PopupProps> {
  render() {
    return (
      <div className={this.props.showPopup ? 'popup-active popup' : 'popup-close popup'}>
        <div
          className={
            this.props.showPopup ? 'wrapper-active popup__wrapper' : 'wrapper-close popup__wrapper'
          }
        >
          <div className="popup__text">Beast card created</div>
          <div className="popup__image"></div>
        </div>
      </div>
    );
  }
}

export default Popup;
