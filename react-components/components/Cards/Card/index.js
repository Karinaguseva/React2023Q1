import React, { Component } from 'react';
import './index.scss';
class Card extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = { src: '' };
    }
    loadImage(imageName) {
        import('https://karinaguseva.github.io/React2023Q1/react-components/data/' + imageName).then((image) => {
            this.setState({
                src: image.default,
            });
        });
    }
    render() {
        this.loadImage(this.props.data.image);
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card__header" },
                React.createElement("img", { src: this.state.src, alt: this.props.data.title, className: "card__img" }),
                React.createElement("div", null,
                    React.createElement("div", { className: "card__title" }, this.props.data.title),
                    React.createElement("div", { className: "card__description" },
                        React.createElement("span", { className: "card__span" }, "Description:"),
                        " ",
                        this.props.data.description))),
            React.createElement("div", { className: "card__ingredient" },
                React.createElement("span", { className: "card__span" }, "Ingredient:"),
                " ",
                this.props.data.ingredient),
            React.createElement("div", { className: "card__cost" },
                React.createElement("span", { className: "card__span" }, "Ingredient cost:"),
                " ",
                this.props.data.cost,
                " galleons"),
            React.createElement("div", { className: "card__prerequisite" },
                React.createElement("span", { className: "card__span" }, "Prerequisite:"),
                " ",
                this.props.data.prerequisite)));
    }
}
export default Card;
