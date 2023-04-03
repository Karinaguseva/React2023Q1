import React from 'react';
import { ApiCard } from '../../../types/api';

interface ModalWindowProps {
  onClick: () => void;
  showWindow: boolean;
  data: ApiCard;
}

const ModalWindow = ({ onClick, showWindow, data }: ModalWindowProps) => {
  return (
    <div className={showWindow ? 'popup-active popup' : 'popup-close popup'} onClick={onClick}>
      <div className="card__header">
        <img src={data.image} alt={data.name} className="card__img"></img>
        <div>
          <div className="card__title">{data.name}</div>
          <div className="card__description">
            <span className="card__span">Description:</span> {data.name}
          </div>
        </div>
      </div>
      <div className="card__ingredient">
        {/* <span className="card__span">Ingredient:</span> {data.status} */}
      </div>
      <div className="card__cost">
        {/* <span className="card__span">Ingredient cost:</span> {data.species} galleons */}
      </div>
      <div className="card__prerequisite">
        {/* <span className="card__span">Prerequisite:</span> {data.gender} */}
      </div>
    </div>

    // <div className={showWindow ? 'popup-active popup' : 'popup-close popup'}>
    //   <div
    //     className={showWindow ? 'wrapper-active popup__wrapper' : 'wrapper-close popup__wrapper'}
    //   >
    //     {data.name}
    //     <div className="popup__text">Beast card created</div>
    //     <div className="popup__image"></div>
    //   </div>
    // </div>
  );
};

export default ModalWindow;
