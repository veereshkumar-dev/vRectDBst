import React, { Component } from 'react';
import './BotCardSwitcher.scss';
import { BotCardSwitcherProps } from './IBotCardSwitcher';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { Flipper, Flipped } from 'react-flip-toolkit';
import BotCard_Expanded from '../BotCard_Expanded';
import BotCard from '../BotCard';

@observer
export default class BotCardSwitcher extends Component<BotCardSwitcherProps> {
  @observable
  expanded = false;

  @action
  toggleExpand = () => {
    this.expanded = !this.expanded;
  };

  render() {
    return (
      <div className="wrapper_botcardswitcher uk-flex uk-width-1-5@xl uk-flex uk-width-1-4@l uk-flex uk-width-1-3@m uk-flex uk-width-1-2@s uk-flex uk-width-1-1  uk-smal">
        {this.expanded ? (
          <div className="blackBackdrop uk-animation-fade" onClick={this.toggleExpand}></div>
        ) : (
          <div></div>
        )}

        <Flipper flipKey={this.expanded} className="botFlipper uk-width uk-flex uk-width">
          {this.expanded ? (
            <Flipped
              flipId="square"
              translate={true}
              scale={false}
              onStartImmediate={e => {
                console.log('flipstarted---', e);
                console.log(e.style.zIndex);
              }}>
              <div className="uk-flex expandedCard " style={{ zIndex: 999 }}>
                <Flipped inverseFlipId="square" translate>
                  <BotCard_Expanded
                    Description={this.props.Description}
                    Icon={
                      this.props.Icon
                        ? this.props.Icon
                        : 'https://honeywellprod.sharepoint.com/:i:/r/teams/BotDashBoard/SiteAssets/BotIcons/defaultIcon.png'
                    }
                    Rating={this.props.Rating}
                    Title={this.props.Title}
                    URL={this.props.URL}
                    Views={this.props.Views}
                    key={this.props.Id}
                    Type={this.props.Type}
                    ContactName={this.props.ContactName}
                    ContactEmail={this.props.ContactEmail}
                    PDDURL={this.props.PDDURL}
                    BenefitsCurrentYear={this.props.BenefitsCurrentYear}
                    BenefitsFiveYears={this.props.BenefitsFiveYears}
                    BenefitsStartsOn={this.props.BenefitsStartsOn}
                    Status={this.props.Status}
                    Function={this.props.Function}
                    SBG={this.props.SBG}
                  />
                </Flipped>
              </div>
            </Flipped>
          ) : (
            // <Square toggleFullScreen={this.toggleFullScreen} />
            <Flipped
              flipId="square"
              translate={true}
              scale={false}
              onStartImmediate={e => {
                console.log('flipstarted---', e);
                console.log(e.style.zIndex);
              }}>
              <div className="uk-flex uk-width">
                <Flipped inverseFlipId="square">
                  <BotCard
                    ToggleExpand={this.toggleExpand}
                    Description={this.props.Description}
                    Icon={
                      this.props.Icon
                        ? this.props.Icon
                        : 'https://honeywellprod.sharepoint.com/:i:/r/teams/BotDashBoard/SiteAssets/BotIcons/defaultIcon.png'
                    }
                    Rating={this.props.Rating}
                    Title={this.props.Title}
                    URL={this.props.URL}
                    Views={this.props.Views}
                    key={this.props.Id}
                    Type={this.props.Type}
                    Status={this.props.Status}
                    Function={this.props.Function}
                    SBG={this.props.SBG}
                  />
                </Flipped>
              </div>
            </Flipped>
          )}
        </Flipper>
      </div>
    );
  }
}
