import React, { Component } from 'react';
import './style/bs_rating.scss';
import { BS_RatingProps } from './IBS_Rating';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
export default class BS_Rating extends Component<BS_RatingProps> {
  @observable
  current_rating = this.props.rating;

  source_rating = this.props.rating;

  @action
  hoverED = (e: number) => {
    this.current_rating = e;
  };

  @action
  unhoverED = () => {
    this.current_rating = this.source_rating;
  };

  render() {
    return (
      <div className="wrapper_bs_rating">
        <div className="star-rating">
          {[0, 1, 2, 3, 4].map((e, i) => {
            if (i < this.current_rating) {
              return (
                <div key={i}>
                  <input type="radio" id="5-stars" name="rating" />
                  <label
                    htmlFor="5-stars"
                    className="star active"
                    onClick={() => {
                      this.source_rating = i + 1;
                    }}
                    onMouseEnter={() => {
                      this.hoverED(i + 1);
                    }}
                    onMouseLeave={() => {
                      this.unhoverED();
                    }}>
                    ★
                  </label>
                </div>
              );
            } else {
              return (
                <div key={i}>
                  <input type="radio" id="5-stars" name="rating" />
                  <label
                    htmlFor="5-stars"
                    className="star"
                    onClick={() => {
                      this.source_rating = i + 1;
                    }}
                    onMouseEnter={() => {
                      this.hoverED(i + 1);
                    }}
                    onMouseLeave={() => {
                      this.unhoverED();
                    }}>
                    ★
                  </label>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
