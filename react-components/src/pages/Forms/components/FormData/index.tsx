import React, { Component } from 'react';
import { BeastCard } from '../../../../types/beastCard';
import './index.scss';

interface FormDataState {
  errors: {
    name: string;
    desc: boolean;
    date: boolean;
    radio: boolean;
    cost: string;
    select: boolean;
    file: boolean;
    checkbox: boolean;
  };
}

interface FormDataProps {
  handleCard: (card: BeastCard) => void;
  cards: number;
}

class FormData extends Component<FormDataProps> {
  state: FormDataState;
  formRef: React.RefObject<HTMLFormElement> = React.createRef<HTMLFormElement>();
  inputNameRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  inputDescRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  inputDateRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  inputRadioRefs = [
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ];
  inputCostRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  inputSelectRef: React.RefObject<HTMLSelectElement> = React.createRef<HTMLSelectElement>();
  inputFileRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
  inputCheckboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

  constructor(props: FormDataProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      errors: {
        name: '',
        desc: false,
        date: false,
        radio: false,
        cost: '',
        select: false,
        file: false,
        checkbox: false,
      },
    };
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const name = this.inputNameRef.current?.value;
    const desc = this.inputDescRef.current?.value;
    const date = this.inputDateRef.current?.value;
    const radio = this.inputRadioRefs.reduce((acc, ref) => {
      if (ref.current?.checked) acc = ref.current?.value;
      return acc;
    }, '');
    const cost = this.inputCostRef.current?.value;
    const select = this.inputSelectRef.current?.value;
    const file = this.inputFileRef.current?.value;
    const checkbox = this.inputCheckboxRef.current?.checked;
    const errorArray = { ...this.state.errors };
    if (!name) {
      errorArray.name = 'Required field';
    } else if (name[0] !== name[0].toUpperCase()) {
      errorArray.name = 'Should starts with uppercased letter';
    } else {
      errorArray.name = '';
    }
    errorArray.desc = !desc;
    errorArray.date = !date;
    errorArray.radio = !radio;
    if (!cost) {
      errorArray.cost = 'Required field';
    } else if (!/^[0-9]{1,}$/.test(cost)) {
      errorArray.cost = 'Should be positive';
    } else {
      errorArray.cost = '';
    }
    errorArray.select = !select;
    errorArray.file = !file;
    errorArray.checkbox = !checkbox;
    this.setState({ errors: errorArray });
    if (Object.values(errorArray).every((value) => !value)) {
      const file = this.inputFileRef.current?.files?.[0];
      const image = file ? URL.createObjectURL(file) : '';
      this.props.handleCard({
        id: this.props.cards,
        image: image,
        title: name || '',
        birth: date || '',
        description: desc || '',
        ingredient: radio || '',
        cost: cost || '',
        house: select || '',
      });
      this.formRef.current?.reset();
    }
  }

  render() {
    const ingridients = ['Fur', 'Feather', 'Horn', 'Hair'];
    const error = 'Required field';
    return (
      <form className="forms" onSubmit={this.handleSubmit} ref={this.formRef}>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="name">
              Name
            </label>
            {this.state.errors.name && <p className="input__error">{this.state.errors.name}</p>}
          </div>
          <input
            type="text"
            placeholder="Beast Name"
            className="forms__input name"
            id="name"
            ref={this.inputNameRef}
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="description">
              Description
            </label>
            {this.state.errors.desc && <p className="input__error">{error}</p>}
          </div>
          <input
            type="text"
            placeholder="Beast Description"
            className="forms__input description"
            id="description"
            ref={this.inputDescRef}
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="date">
              Beast birth
            </label>
            {this.state.errors.date && <p className="input__error">{error}</p>}
          </div>
          <input
            type="date"
            className="forms__input date"
            id="date"
            ref={this.inputDateRef}
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">What gives your Beast</label>
            {this.state.errors.radio && <p className="input__error">{error}</p>}
          </div>
          <div>
            {ingridients.map((ingridient, index) => {
              return (
                <label className="radio__label" key={index}>
                  <input
                    type="radio"
                    name="ingridient"
                    ref={this.inputRadioRefs[index]}
                    value={ingridient}
                  />
                  {ingridient}
                </label>
              );
            })}
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="cost">
              Ingridient cost
            </label>
            {this.state.errors.cost && <p className="input__error">{this.state.errors.cost}</p>}
          </div>
          <input
            type="number"
            className="forms__input cost"
            id="cost"
            ref={this.inputCostRef}
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">Select native House</label>
            {this.state.errors.select && <p className="input__error">{error}</p>}
          </div>
          <select className="forms__input house" ref={this.inputSelectRef}>
            <option></option>
            <option>Gryffindor</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
            <option>Slytherin</option>
          </select>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="input__file">
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                ref={this.inputFileRef}
              ></input>
              <span>Сhoose File</span>
            </label>
            {this.state.errors.file && <p className="input__error">{error}</p>}
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">
              <input type="checkbox" ref={this.inputCheckboxRef}></input>
              I&rsquo;m sure i want to create the Beast
            </label>
            {this.state.errors.checkbox && <p className="input__error">{error}</p>}
          </div>
        </div>
        <button className="forms__button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default FormData;
