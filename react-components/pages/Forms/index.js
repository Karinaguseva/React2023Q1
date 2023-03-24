import React, { Component } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';
class Forms extends Component {
    state;
    constructor(props) {
        super(props);
        this.handleCard = this.handleCard.bind(this);
        this.state = { cards: [], popup: false };
    }
    handleCard(card) {
        this.setState({
            cards: [...this.state.cards, card],
            popup: true,
        });
    }
    componentDidUpdate() {
        this.state.popup &&
            setTimeout(() => {
                this.setState({
                    popup: false,
                });
            }, 3000);
    }
    render() {
        return (React.createElement("div", { className: "main" },
            React.createElement(FormData, { handleCard: this.handleCard, cards: this.state.cards.length }),
            React.createElement("div", { className: "forms__cards" },
                React.createElement(CardForm, { cards: this.state.cards })),
            React.createElement(Popup, { showPopup: this.state.popup })));
    }
}
export default Forms;
