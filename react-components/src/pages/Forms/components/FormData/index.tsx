import React, { Component } from 'react';
import { BeastCard } from '../../../../types/beastCard';
import './index.scss';

interface FormDataState {
  errors: {
    name: string;
    desc: string;
    date: string;
    radio: boolean;
    cost: string;
    select: boolean;
    file: string;
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
        desc: '',
        date: '',
        radio: false,
        cost: '',
        select: false,
        file: '',
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
    const files = this.inputFileRef.current?.files?.[0];
    const checkbox = this.inputCheckboxRef.current?.checked;
    const errorArray = { ...this.state.errors };

    //Name Validation
    if (!name) {
      errorArray.name = 'Required field';
    } else if (name[0] !== name[0].toUpperCase()) {
      errorArray.name = 'Should starts with uppercased letter';
    } else {
      errorArray.name = '';
    }

    //Description Validation
    if (!desc) {
      errorArray.desc = 'Required field';
    } else if (desc.split(' ').length < 3) {
      errorArray.desc = 'Should contains 3 words';
    } else if (
      desc
        .trim()
        .split(' ')
        .some((word) => word.length < 5)
    ) {
      errorArray.desc = 'Words should be longer then 5 symbols';
    } else {
      errorArray.desc = '';
    }

    //Date Validation
    const curent = new Date().toISOString().slice(0, 10);
    if (!date) {
      errorArray.date = 'Required field';
    } else if (Date.parse(date!) >= Date.parse(curent)) {
      errorArray.date = 'Date should be earlier than today';
    } else {
      errorArray.date = '';
    }

    //Radio-btn Validation
    errorArray.radio = !radio;

    //Cost Validation
    if (!cost) {
      errorArray.cost = 'Required field';
    } else if (!/^[0-9]{1,}$/.test(cost)) {
      errorArray.cost = 'Should be positive';
    } else if (cost === '0') {
      errorArray.cost = 'Should be more than 0';
    } else {
      errorArray.cost = '';
    }

    //Select Validation
    errorArray.select = !select;

    //File Validation
    if (!file) {
      errorArray.file = 'Required field';
    } else if (!files?.type.startsWith('image/')) {
      errorArray.file = 'Selected file is not an image';
    } else {
      errorArray.file = '';
    }

    //Checkbox Validation
    errorArray.checkbox = !checkbox;
    this.setState({ errors: errorArray });
    if (Object.values(errorArray).every((value) => !value)) {
      const image = files ? URL.createObjectURL(files) : '';
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
            {this.state.errors.desc && <p className="input__error">{this.state.errors.desc}</p>}
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
            {this.state.errors.date && <p className="input__error">{this.state.errors.date}</p>}
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
            placeholder="1000"
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">Select native House</label>
            {this.state.errors.select && <p className="input__error">{error}</p>}
          </div>
          <select className="forms__input house" ref={this.inputSelectRef}>
            <option hidden value="">
              Choose the house
            </option>
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
              <span>Choose File</span>
            </label>
            {this.state.errors.file && <p className="input__error">{this.state.errors.file}</p>}
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
