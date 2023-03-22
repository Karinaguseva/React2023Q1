import React, { Component } from 'react';
import './index.scss';

class FormsCreate extends Component {
  render() {
    return (
      <div className="forms">
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Beast Name"
            className="forms__input name"
            id="name"
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            placeholder="Beast Description"
            className="forms__input description"
            id="description"
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="date">
            Beast birth
          </label>
          <input type="date" className="forms__input date" id="date"></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label">What gives your Beast</label>
          <div>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              Fur
            </label>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              Feather
            </label>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              Horn
            </label>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              Hair
            </label>
          </div>
        </div>
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="cost">
            Ingridient cost
          </label>
          <input type="number" className="forms__input cost" id="cost"></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label">Select native House</label>
          <select className="forms__input house">
            <option>Gryffindor</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
            <option>Slytherin</option>
          </select>
        </div>

        <label className="input-file">
          <input type="file" accept="image/jpeg,image/png,image/gif"></input>
          <span>Сhoose File</span>
        </label>
        <div className="input__wrapper">
          <label>
            <input type="checkbox"></input>
            I&rsquo;m sure i want to create the Beast
          </label>
        </div>
        <button className="forms__button">Submit</button>
      </div>
    );
  }
}

export default FormsCreate;
