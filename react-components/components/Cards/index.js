import React, { Component } from 'react';
import Card from './Card';
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
            if (card.name.toLowerCase().includes(this.props.search.toLowerCase()))
                render = true;
            return render;
        });
        return filteredCards;
    }
    render() {
        const totalCards = this.props.search ? this.filterCards() : this.state.cards;
        if (totalCards.length === 0) {
            return React.createElement("div", null, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
        }
        return (React.createElement("div", null, totalCards.map((card) => {
            return React.createElement(Card, { data: card, key: card.id });
        })));
    }
}
export default Cards;
