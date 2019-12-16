import React, { PureComponent } from 'react';
import './CardFlipParent.scss';
import { CardFlipParentProps } from './ICardFlipParent';
import CardItem from './CardItem';

export default class CardFlipParent extends PureComponent<CardFlipParentProps> {
  render() {
    return (
      <div className="wrapper_cardflipparent uk-flex uk-flex-middle  uk-flex-center uk-grid uk-flex-1">
        <CardItem
          title="Honeywell Turbine"
          imgUrl="https://assets.newatlas.com/dims4/default/91d7c08/2147483647/strip/true/crop/530x298+0+0/resize/530x298!/quality/90/?url=https%3A%2F%2Fassets.newatlas.com%2Farchive%2F11990_18060932251.jpg"
        />
        <CardItem
          title="Honeywell Hard Hat"
          imgUrl="https://www.honeywellstore.com/store/images/products/large_images/RWS-52001.jpg"
        />

        <CardItem
          title="Honeywell Impact Goggle"
          imgUrl="https://www.honeywellstore.com/store/images/products/large_images/RWS-51027.jpg"
        />
      </div>
    );
  }
}
