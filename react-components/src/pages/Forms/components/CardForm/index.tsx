import React, { Component } from 'react';
import './index.scss';

class CardForm extends Component {
  render() {
    return (
      <div className="form-card">
        <img
          src="react-components\public\assets\images\Kneazle.jpg"
          alt=""
          className="form-card__img"
        ></img>
        <div className="form-card__title">Beast</div>
        <div className="form-card__birth birth">
          <p className="birth__title">Birth:</p>
          <p className="birth__text">21.12.1994</p>
        </div>
        <div className="form-card__description">
          <span className="form-card__span">Description:</span> very very long discription very very
          long discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription
        </div>
        <div className="form-card__info">
          <div className="form-card__ingredient item">
            <p className="item__title">Feather</p>
            <p className="item__text">Ingredient</p>
          </div>
          <div className="form-card__cost item">
            <p className="item__title">9999 &#667;</p>
            <p className="item__text">Cost</p>
          </div>
          <div className="form-card__house item">
            <p className="item__title">Ravenclaw</p>
            <p className="item__text">Native House</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardForm;
