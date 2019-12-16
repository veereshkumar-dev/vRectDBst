import React, { PureComponent } from 'react';
import './EmploeeDay.scss';
import { EmploeeDayProps } from './IEmploeeDay';
import LeaderBoard from './LeaderBoard';
import CardFlipParent from './CardFlipParent';

export default class EmploeeDay extends PureComponent<EmploeeDayProps> {
  render() {
    return (
      <div className="wrapper_emploeeday uk-flex uk-flex-1 uk-flex-center">
        <div className=" uk-flex uk-flex-1 uk-flex-center uk-height-viewport">
          {/* <LeaderBoard /> */}

          <CardFlipParent />
        </div>
      </div>
    );
  }
}
