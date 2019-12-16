import React, { Component } from 'react';
import './Botcardcontainer.scss';
import { BotCardContainerProps } from './IBotCardContainer';
import AppStore from '../../../Store/AppStore';
import BotCard from '../BotCard/BotCard';
import { observer } from 'mobx-react';
import BotCardSwitcher from '../BotCardSwitcher';
import { sortBy, take, reverse, includes, uniqBy, map, filter } from 'lodash';

@observer
export default class BotCardContainer extends Component<BotCardContainerProps> {
  render() {
    return (
      <div className="wrapper_botcardcontainer uk-flex uk-flex-wrap">
        {/* <div>
          {map(AppStore.getBots, (e, i) => {
            return e.Title + ' --- ';
          })}
        </div> */}

        {map(AppStore.getBots, (e, i) => {
          return (
            <BotCardSwitcher
              Description={e.Description}
              Icon={
                e.Icon
                  ? e.Icon
                  : 'https://honeywellprod.sharepoint.com/:i:/r/teams/BotDashBoard/SiteAssets/BotIcons/defaultIcon.png'
              }
              Rating={e.Rating}
              Title={e.Title}
              URL={e.URL}
              Views={e.Views}
              Type={e.Type}
              Id={e.Id}
              ContactName={e.ContactName}
              ContactEmail={e.ContactEmail}
              PDDURL={e.PDDURL}
              BenefitsCurrentYear={e.BenefitsCurrentYear}
              BenefitsFiveYears={e.BenefitsFiveYears}
              BenefitsStartsOn={e.BenefitsStartsOn}
              Status={e.Status}
              Function={e.Function}
              SBG={e.SBG}
              key={e.Id}
            />
          );
        })}

        {/* <div>{map(AppStore.getBots, 'Title').join('-------')}</div> */}
        {/* {map(AppStore.getBots, (e, i) => {
          return (
            <BotCard
              Description={e.Description}
              Icon={
                e.Icon
                  ? e.Icon
                  : 'https://honeywellprod.sharepoint.com/:i:/r/teams/BotDashBoard/SiteAssets/BotIcons/defaultIcon.png'
              }
              Rating={e.Rating}
              Title={e.Title + AppStore.getAllBots.length}
              URL={e.URL}
              Views={e.Views}
              key={e.Id}
              Type={e.Type}
              //Id={e.Id}
              //ContactName={e.ContactName}
              //ContactEmail={e.ContactEmail}
              //PDDURL={e.PDDURL}
              //BenefitsCurrentYear={e.BenefitsCurrentYear}
              //BenefitsFiveYears={e.BenefitsFiveYears}
              //BenefitsStartsOn={e.BenefitsStartsOn}
              Status={e.Status}
              Function={e.Function}
              SBG={e.SBG}
              ToggleExpand={() => {}}
            />
          );
        })} */}

        {/* {AppStore.getBots.map((e, i) => {
          return (
            <div className="uk-flex uk-width-1-5 uk-animation-slide-bottom-medium" uk-grid={true} key={e.Id}>
              <BotCard
                Description={e.Description}
                Icon={
                  e.Icon
                    ? e.Icon
                    : 'https://honeywellprod.sharepoint.com/:i:/r/teams/BotDashBoard/SiteAssets/BotIcons/defaultIcon.png'
                }
                Rating={e.Rating}
                Title={e.Title}
                URL={e.URL}
                Views={e.Views}
                key={e.Id}
                Type={e.Type}
              />
            </div>
          );
        })} */}
      </div>
    );
  }
}
