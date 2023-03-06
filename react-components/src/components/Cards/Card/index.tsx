import React, { Component } from 'react';
import { Card as ICard } from 'types/card';

interface CardProps {
  data: ICard;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <>
        <div>{this.props.data.name}</div>
        <div>{this.props.data.categoryID}</div>
      </>
    );
  }
}

export default Card;
