import React, { Component } from 'react';
import './DashBoard.scss';
import { DashBoardProps } from './IDashBoard';
import GridLayout from 'react-grid-layout';
import BenefitComittedRealized_byFunction from './Graph/1.BenefitComittedRealized';
import BenefitComittedRealized_bySBG from './Graph/1.1.BenefitComittedRealizedbySBG';
import UseCases_2 from './Graph/2.UseCases';
import IntakeStatus_3 from './Graph/3.IntakeStatus';
import ActiveBots_4 from './Graph/4.ActiveBots';
import BotExecutionBenefit_5 from './Graph/5.BotExecutionBenefit';
import SuccessFailure_6 from './Graph/6.SuccessFailure';
import LicenseUtilization_7 from './Graph/7.LicenseUtilization';
import ActiveBots_8 from './Graph/8.ActiveBots-Chat';
import Popularity_9 from './Graph/9.Popularity';
import Usage_10 from './Graph/10.Usage';
import PlannedVsActual from './Graph/13.PlanedVsActual';

import BudgetSpent from './Graph/12.BudgetVsSpent';
import ActualVsComittedSavings from './Graph/12.2.ActualVsComittedSavings';
import AnimatedNumber from 'react-animated-number';

import AppStore from '../../Store/AppStore';
import { observer } from 'mobx-react';

@observer
export default class DashBoard extends Component<DashBoardProps> {
  layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 2 },
    { i: 'b', x: 4, y: 0, w: 8, h: 2 },
    { i: 'c', x: 0, y: 3, w: 4, h: 2 },
    { i: 'd', x: 4, y: 3, w: 8, h: 2 },
  ];

  prettyBytes = num => {
    return '$ ' + parseInt(num).toLocaleString();
  };

  render() {
    return (
      <div className="wrapper_dashboard uk-flex-column uk-flex uk-flex-1">
        <div className="uk-flex uk-flex-1 ">
          <div className="uk-flex uk-flex-1 uk-flex-column main">
            <div className="uk-flex row1Actual">
              <div className="uk-flex uk-flex-column col1">
                <div className="row1">
                  <div className="title">Savings Total</div>
                  {/* <div className="metric">$ 4,976,858</div> */}
                  <div className="metric">
                    {' '}
                    <AnimatedNumber
                      value={4976858}
                      style={{
                        transition: '0.8s ease-out',
                        fontSize: 48,
                        transitionProperty: 'background-color, color, opacity',
                      }}
                      frameStyle={perc => (perc === 0 ? {} : {})}
                      duration={1500}
                      formatValue={n => this.prettyBytes(n)}
                    />
                  </div>
                  {/* {AppStore.height}
              <br />
              {AppStore.width} */}
                </div>

                <div className="row2 uk-flex">
                  <div className="metric_month">
                    <div className="title">This Month</div>
                    <div className="metric"> $ 240,271</div>
                  </div>
                  <div className="metric_month">
                    <div className="title">YTD</div>
                    <div className="metric"> $ 4,976,858</div>
                  </div>
                </div>
              </div>
              <hr className="uk-flex uk-divider-vertical" style={{ marginLeft: 100 }} />
              <div className="uk-flex col2">
                <BudgetSpent />
              </div>
              <hr className="uk-flex uk-divider-vertical" style={{ marginLeft: 30 }} />
              <div className="uk-flex col3">
                <ActualVsComittedSavings />
              </div>
            </div>

            <div className="row3 uk-flex ">
              <div className="tile  uk-flex uk-flex-column">
                <div className="metric">24.8 %</div>
                <div className="sbg">Savings for CORP</div>
                <div className="sbg">No of Bots: 24</div>
              </div>

              <div className="tile  uk-flex uk-flex-column">
                <div className="metric">72 %</div>
                <div className="sbg">Savings for AERO</div>
                <div className="sbg">No of Bots: 3</div>
              </div>

              <div className="tile  uk-flex uk-flex-column">
                <div className="metric">0.4 %</div>
                <div className="sbg">Savings for HBT</div>
                <div className="sbg">No of Bots: 1</div>
              </div>

              <div className="tile  uk-flex uk-flex-column">
                <div className="metric">2 %</div>
                <div className="sbg">Savings for PMT</div>
                <div className="sbg">No of Bots: 11</div>
              </div>

              <div className="tile  uk-flex uk-flex-column">
                <div className="metric">0.8 %</div>
                <div className="sbg">Savings for SPS &nbsp; &nbsp; </div>
                <div className="sbg">No of Bots: 5</div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-flex uk-flex-1 graphGrid uk-flex-column">
          <div className="uk-flex uk-width title">
            Program Metrics <hr className="uk-divider-icon"></hr>
          </div>
          <hr className="uk-divider-icon"></hr>
          <div className="uk-flex uk-width gridWrap">
            <GridLayout className="layout" margin={[30, 30]} layout={this.layout} rows={28} cols={12} width={1250}>
              <div key="a">
                <BenefitComittedRealized_byFunction />
              </div>
              <div key="b">
                <PlannedVsActual />
              </div>
              <div key="c">
                <IntakeStatus_3 />
              </div>
              <div key="d">
                <BenefitComittedRealized_bySBG />
              </div>
            </GridLayout>
          </div>
          <div className="uk-flex uk-width title">RPA Metrics</div>
          <hr className="uk-divider-icon"></hr>
          <div className="uk-flex uk-width gridWrap">
            {' '}
            <GridLayout className="layout" margin={[30, 30]} layout={this.layout} rows={18} cols={12} width={1250}>
              <div key="a">
                <ActiveBots_4 />
              </div>
              <div key="b">
                <BotExecutionBenefit_5 />
              </div>
              <div key="c">
                <SuccessFailure_6 />
              </div>
              <div key="d">
                <LicenseUtilization_7 />
              </div>
            </GridLayout>
          </div>{' '}
          <div className="uk-flex uk-width  title">Digital Agent Metrics</div>
          <hr className="uk-divider-icon"></hr>
          <div className="uk-flex uk-width gridWrap">
            {' '}
            <GridLayout className="layout" margin={[30, 30]} layout={this.layout} rows={18} cols={12} width={1250}>
              <div key="a">
                <ActiveBots_8 />
              </div>
              <div key="b">
                <Popularity_9 />
              </div>
            </GridLayout>
          </div>{' '}
          {/* <div className="">
            <Usage_10 />
          </div> */}
        </div>
        <div className="uk-flex uk-width  title">.</div>
      </div>
    );
  }
}
