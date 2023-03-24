import React, { Component } from 'react';
import './index.scss';
class FormData extends Component {
    state;
    formRef = React.createRef();
    inputNameRef = React.createRef();
    inputDescRef = React.createRef();
    inputDateRef = React.createRef();
    inputRadioRefs = [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ];
    inputCostRef = React.createRef();
    inputSelectRef = React.createRef();
    inputFileRef = React.createRef();
    inputCheckboxRef = React.createRef();
    constructor(props) {
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
    handleSubmit(event) {
        event.preventDefault();
        const name = this.inputNameRef.current?.value;
        const desc = this.inputDescRef.current?.value;
        const date = this.inputDateRef.current?.value;
        const radio = this.inputRadioRefs.reduce((acc, ref) => {
            if (ref.current?.checked)
                acc = ref.current?.value;
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
        }
        else if (name[0] !== name[0].toUpperCase()) {
            errorArray.name = 'Should starts with uppercased letter';
        }
        else {
            errorArray.name = '';
        }
        //Description Validation
        if (!desc) {
            errorArray.desc = 'Required field';
        }
        else if (desc.split(' ').length < 3) {
            errorArray.desc = 'Should contains 3 words';
        }
        else {
            errorArray.desc = '';
        }
        //Date Validation
        const curent = new Date().toISOString().slice(0, 10);
        if (!date) {
            errorArray.date = 'Required field';
        }
        else if (Date.parse(date) >= Date.parse(curent)) {
            errorArray.date = `Date should be earlier than ${curent.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`;
        }
        else {
            errorArray.date = '';
        }
        //Radio-btn Validation
        errorArray.radio = !radio;
        //Cost Validation
        if (!cost) {
            errorArray.cost = 'Required field';
        }
        else if (!/^[0-9]{1,}$/.test(cost)) {
            errorArray.cost = 'Should be positive';
        }
        else if (cost === '0') {
            errorArray.cost = 'Should be more than 0';
        }
        else {
            errorArray.cost = '';
        }
        //Select Validation
        errorArray.select = !select;
        //File Validation
        if (!file) {
            errorArray.file = 'Required field';
        }
        else if (!files?.type.startsWith('image/')) {
            errorArray.file = 'Selected file is not an image';
        }
        else {
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
        return (React.createElement("form", { className: "forms", onSubmit: this.handleSubmit, ref: this.formRef, noValidate: true },
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label", htmlFor: "name" }, "Name"),
                    this.state.errors.name && React.createElement("p", { className: "input__error" }, this.state.errors.name)),
                React.createElement("input", { type: "text", placeholder: "Beast Name", className: "forms__input name", id: "name", ref: this.inputNameRef })),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label", htmlFor: "description" }, "Description"),
                    this.state.errors.desc && React.createElement("p", { className: "input__error" }, this.state.errors.desc)),
                React.createElement("input", { type: "text", placeholder: "Beast Description", className: "forms__input description", id: "description", ref: this.inputDescRef })),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label", htmlFor: "date" }, "Beast birth"),
                    this.state.errors.date && React.createElement("p", { className: "input__error" }, this.state.errors.date)),
                React.createElement("input", { type: "date", className: "forms__input date", id: "date", ref: this.inputDateRef })),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label" }, "What gives your Beast"),
                    this.state.errors.radio && React.createElement("p", { className: "input__error" }, error)),
                React.createElement("div", null, ingridients.map((ingridient, index) => {
                    return (React.createElement("label", { className: "radio__label", key: index },
                        React.createElement("input", { type: "radio", name: "ingridient", ref: this.inputRadioRefs[index], value: ingridient }),
                        ingridient));
                }))),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label", htmlFor: "cost" }, "Ingridient cost"),
                    this.state.errors.cost && React.createElement("p", { className: "input__error" }, this.state.errors.cost)),
                React.createElement("input", { type: "number", className: "forms__input cost", id: "cost", ref: this.inputCostRef, placeholder: "1000" })),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label" }, "Select native House"),
                    this.state.errors.select && React.createElement("p", { className: "input__error" }, error)),
                React.createElement("select", { className: "forms__input house", ref: this.inputSelectRef },
                    React.createElement("option", { hidden: true, value: "" }, "Choose the house"),
                    React.createElement("option", null, "Gryffindor"),
                    React.createElement("option", null, "Ravenclaw"),
                    React.createElement("option", null, "Hufflepuff"),
                    React.createElement("option", null, "Slytherin"))),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "input__file" },
                        React.createElement("input", { type: "file", accept: "image/jpeg,image/png,image/gif", ref: this.inputFileRef }),
                        React.createElement("span", null, "Choose File")),
                    this.state.errors.file && React.createElement("p", { className: "input__error" }, this.state.errors.file))),
            React.createElement("div", { className: "input__wrapper" },
                React.createElement("div", { className: "input__label-wrapper" },
                    React.createElement("label", { className: "forms__label" },
                        React.createElement("input", { type: "checkbox", ref: this.inputCheckboxRef }),
                        "I\u2019m sure i want to create the Beast"),
                    this.state.errors.checkbox && React.createElement("p", { className: "input__error" }, error))),
            React.createElement("button", { className: "forms__button", type: "submit" }, "Submit")));
    }
}
export default FormData;
