import React, { Component } from 'react';
import { Card as ICard } from 'types/card';
import './index.scss';

interface CardProps {
  data: ICard;
}

interface CardState {
  src: string;
}

class Card extends Component<CardProps> {
  state: CardState;
  constructor(props: CardProps) {
    super(props);
    this.state = { src: '' };
  }

  loadImage(imageName: string) {
    import('./../../../data/' + imageName).then((image) => {
      this.setState({
        src: image.default,
      });
    });
  }

  render() {
    this.loadImage(this.props.data.image);
    return (
      <div className="card">
        <div className="card__header">
          <img src={this.state.src} alt={this.props.data.title} className="card__img"></img>
          <div>
            <div className="card__title">{this.props.data.title}</div>
            <div className="card__description">
              <span className="card__span">Description:</span> {this.props.data.description}
            </div>
          </div>
        </div>

        <div className="card__ingredient">
          <span className="card__span">Ingredient:</span> {this.props.data.ingredient}
        </div>
        <div className="card__cost">
          <span className="card__span">Ingredient cost:</span> {this.props.data.cost} galleons
        </div>
        <div className="card__prerequisite">
          <span className="card__span">Prerequisite:</span> {this.props.data.prerequisite}
        </div>
      </div>
    );
  }
}

export default Card;
