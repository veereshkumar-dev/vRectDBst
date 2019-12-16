import React, { PureComponent } from 'react';
import './CardItem.scss';
import { CardItemProps } from './ICardItem';
import FlipCard from 'react-flipcard3d';

export default class CardItem extends PureComponent<CardItemProps> {
  render() {
    return (
      <div className="wrapper_carditem uk-flex uk-width-1-3 uk-flex-middle uk-flex-center">
        <FlipCard>
          <FlipCard.Front>
            <img src="https://image-store.slidesharecdn.com/d3b64b79-2e05-48b0-8958-c6be836bf814-original.jpeg" />
          </FlipCard.Front>

          <FlipCard.Back>
            <div className="title">{this.props.title}</div>
            <img src={this.props.imgUrl} />
          </FlipCard.Back>
        </FlipCard>
      </div>
    );
  }
}
