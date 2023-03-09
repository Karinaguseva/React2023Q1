import React, { Component } from 'react';
import Card from './Card';
import './index.scss';
class Cards extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = { cards: [] };
    }
    async componentDidMount() {
        const data = await import('./../../data/data.json');
        this.setState({
            ...this.state,
            cards: data.default,
        });
    }
    filterCards() {
        const filteredCards = this.state.cards.filter((card) => {
            let render = false;
            if (card.title.toLowerCase().includes(this.props.search.toLowerCase()))
                render = true;
            if (card.ingredient.toLowerCase().includes(this.props.search.toLowerCase()))
                render = true;
            return render;
        });
        return filteredCards;
    }
    render() {
        const totalCards = this.props.search ? this.filterCards() : this.state.cards;
        if (totalCards.length === 0) {
            return (React.createElement("div", { className: "cards__error" },
                React.createElement("p", { className: "error__text" }, "No such cards")));
        }
        return (React.createElement("div", { className: "cards" }, totalCards.map((card) => {
            return React.createElement(Card, { data: card, key: card.id });
        })));
    }
}
export default Cards;
