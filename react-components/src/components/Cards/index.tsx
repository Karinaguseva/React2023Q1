import React, { Component } from 'react';

interface CardsProps {
  search: string;
}

class Cards extends Component<CardsProps> {
  render() {
    return <div>{this.props.search}</div>;
  }
}

export default Cards;
