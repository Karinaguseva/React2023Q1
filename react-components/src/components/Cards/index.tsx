import React, { Component } from 'react';
import { Card as ICard } from 'types/card';
import Card from './Card';
import './index.scss';

interface CardsProps {
  search: string;
}

interface CardsState {
  cards: ICard[];
}

class Cards extends Component<CardsProps> {
  state: CardsState;

  constructor(props: CardsProps) {
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
      if (card.title.toLowerCase().includes(this.props.search.toLowerCase())) render = true;
      if (card.ingredient.toLowerCase().includes(this.props.search.toLowerCase())) render = true;
      return render;
    });
    return filteredCards;
  }

  render() {
    const totalCards = this.props.search ? this.filterCards() : this.state.cards;
    if (totalCards.length === 0) {
      return (
        <div className="cards__error">
          <p className="error__text">No such cards</p>
        </div>
      );
    }
    return (
      <div className="cards">
        {totalCards.map((card) => {
          return <Card data={card} key={card.id} />;
        })}
      </div>
    );
  }
}

export default Cards;
