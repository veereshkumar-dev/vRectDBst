import React, { PureComponent } from 'react';
import './Top3.scss';
import { Top3Props } from './ITop3';

export default class Top3 extends PureComponent<Top3Props> {
  render() {
    return (
      <div className="wrapper_top3 uk-flex uk-flex-1">
        <div>Top3 Div</div>
      </div>
    );
  }
}
