import React, { Component } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import { BeastCard } from '../../types/beastCard';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';

interface FormsState {
  cards: BeastCard[];
  popup: boolean;
}

class Forms extends Component {
  state: FormsState;
  constructor(props: object) {
    super(props);
    this.handleCard = this.handleCard.bind(this);
    this.state = { cards: [], popup: false };
  }

  handleCard(card: BeastCard) {
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
    console.log(this.state.cards.length);
    return (
      <div className="main">
        <FormData handleCard={this.handleCard} cards={this.state.cards.length} />
        <div className="forms__cards">
          <CardForm cards={this.state.cards} />
        </div>
        <Popup showPopup={this.state.popup} />
      </div>
    );
  }
}

export default Forms;
