import React, { PureComponent } from 'react';
import './DetailsCard.scss';
import { DetailsCardProps } from './IDetailsCard';
import Truncate from 'react-truncate';
var moment = require('moment');

export default class DetailsCard extends PureComponent<DetailsCardProps> {
  render() {
    return (
      <div className="wrapper_detailscard uk-flex uk-flex-1">
        <div className="content">
          <ul className="uk-list ">
            <li>
              <div className="heading">Description</div>
              <div className="desc">
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {this.props.Description}
                </Truncate>
              </div>
            </li>
            <li>
              <div className="heading">Point of Contact</div>
              <div className="desc">
                <a href={'mailto:' + this.props.ContactEmail}>{this.props.ContactName}</a>
              </div>
            </li>
            <li>
              <div className="heading">Benefit</div>
              <div className="desc uk-flex">
                <div className="currentYear">2019: ${this.props.BenefitsCurrentYear}k </div>
                <div className="fiveYears">Five Years: ${this.props.BenefitsFiveYears}k</div>
              </div>
            </li>
            <li>
              <div className="desc">
                <a href={this.props.PDDURL}>Process Design Document</a>
              </div>
            </li>
            <li>
              <div className="desc">
                <span className="heading">BenefitStartOn:</span> {moment(this.props.BenefitsStartsOn).format('MMM Y')}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
