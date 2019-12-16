import React, { PureComponent } from 'react';
import './style/botcardflipped.scss';
import { BotCardFlippedFlippedFlippedProps } from './IBotCardFlippedFlippedFlipped';
import Rating from '../BS_Rating/index';

export default class BotCardFlippedFlippedFlipped extends PureComponent<BotCardFlippedFlippedFlippedProps> {
  getButton() {
    if (this.props.Type.toLowerCase() == 'chat bot') {
      return (
        <button className="chatButton uk-button uk-flex uk-flex-1 uk-button-primary">
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="comment">
              <path
                stroke="#1890ff"
                strokeWidth="1"
                d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"></path>
            </svg>
            CHAT
          </div>
        </button>
      );
    } else if (this.props.Type.toLowerCase() == 'composite bot') {
      return (
        <button className="chatButton uk-button uk-flex uk-flex-1  disabled">
          <div className="uk-flex uk-flex-center uk-flex-middle">Composit BOT</div>
        </button>
      );
    } else {
      return (
        <button className="chatButton uk-button uk-flex uk-flex-1  disabled">
          <div className="uk-flex uk-flex-center uk-flex-middle">PROCESS BOT</div>
        </button>
      );
    }
  }
  render() {
    return (
      <div className="wrapper_botcardflipped uk-overflow-hidden ">
        <div className="logo uk-flex uk-flex-center uk-flex-middle">
          <img src={this.props.Icon} alt="" />
        </div>
        <div className="contetWrapper">
          <div className="title uk-text-truncate">{this.props.Title}</div>
          <div className="footer uk-flex uk-flex-between">
            <div className="rating  uk-flex">
              <Rating rating={this.props.Rating} />
            </div>
            <div className="views  uk-flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 512 512">
                <path d="M255.8 112c-80.4 0-143.8 50.6-219.6 133.3-5.5 6.1-5.6 15.2-.1 21.3C101 338.3 158.2 400 255.8 400c96.4 0 168.7-77.7 220.1-134 5.3-5.8 5.6-14.6.5-20.7C424 181.8 351.5 112 255.8 112zm4.4 233.9c-53 2.4-96.6-41.2-94.1-94.1 2.1-46.2 39.5-83.6 85.7-85.7 53-2.4 96.6 41.2 94.1 94.1-2.1 46.2-39.5 83.6-85.7 85.7z" />
                <path d="M256 209c0-6 1.1-11.7 3.1-16.9-1 0-2-.1-3.1-.1-36.9 0-66.6 31.4-63.8 68.9 2.4 31.3 27.6 56.5 58.9 58.9 37.5 2.8 68.9-26.9 68.9-63.8 0-1.3-.1-2.6-.1-3.9-5.6 2.5-11.7 3.9-18.2 3.9-25.2 0-45.7-21.1-45.7-47z" />
              </svg>
              <div className="viewCount uk-badge uk-flex uk-flex-middle">{this.props.Views}</div>
            </div>
          </div>
          <div className="chat uk-flex">{this.getButton()}</div>
        </div>
      </div>
    );
  }
}
