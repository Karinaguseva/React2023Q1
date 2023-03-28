import React from 'react';
import './index.scss';

interface PopupProps {
  showPopup: boolean;
}

const Popup = ({ showPopup }: PopupProps) => {
  return (
    <div className={showPopup ? 'popup-active popup' : 'popup-close popup'}>
      <div className={showPopup ? 'wrapper-active popup__wrapper' : 'wrapper-close popup__wrapper'}>
        <div className="popup__text">Beast card created</div>
        <div className="popup__image"></div>
      </div>
    </div>
  );
};

export default Popup;
