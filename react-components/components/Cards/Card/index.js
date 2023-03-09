import React, { Component } from 'react';
import './index.scss';
class Card extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = { src: '' };
    }
    loadImage(imageName) {
        import('./../../../data/' + imageName).then((image) => {
            this.setState({
                src: image.default,
            });
        });
    }
    // getImgUrl(name: string) {
    //   return new URL(`${name}`, import.meta.url).href;
    // }
    render() {
        // const baseUrl = new URL(import.meta.env.BASE_URL, import.meta.url).href;
        const imgUrl = new URL(this.props.data.image, import.meta.url).href;
        // const url = new URL(this.props.data.image, imgUrl).href;
        console.log(import.meta.url);
        console.log(import.meta.env.BASE_URL);
        console.log(this.props.data.image);
        // this.loadImage(this.props.data.image);
        return (React.createElement("div", { className: "card" },
            React.createElement("div", { className: "card__header" },
                React.createElement("img", { src: imgUrl, alt: this.props.data.title, className: "card__img" }),
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
