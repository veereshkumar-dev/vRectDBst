import React, { Component } from 'react';
import './Tabs.scss';
import { TabsProps } from './ITabs';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { BotStoreView } from '../../../Store/AppStore';
import AppStore from '../../../Store/AppStore';

@observer
export default class Tabs extends Component<TabsProps> {
  @action
  toggleTab(newTab) {
    if (AppStore.CurrentBotStoreTab == newTab) return;
    else {
      AppStore.CurrentBotStoreTab = newTab;

      AppStore.Filter_Type.length = 0;
      AppStore.Filter_SBG.length = 0;
      AppStore.Filter_Function.length = 0;
    }
  }

  render() {
    return (
      <div className="wrapper_tabs uk-flex ">
        <div
          className={
            ' tab uk-flex uk-flex-middle uk-flex-center ' +
            (BotStoreView.AllBots == AppStore.CurrentBotStoreTab ? 'active' : '')
          }
          onClick={e => {
            this.toggleTab(BotStoreView.AllBots);
          }}>
          <svg width="15" height="15" viewBox="0 0 20 20" data-svg="comment">
            <path
              d="M0 0v3h17v-3h-17zM16 2h-15v-1h15v1zM0 13h17v-9h-17v9zM1 5h15v7h-15v-7zM0 17h17v-3h-17v3zM1 15h15v1h-15v-1z"
              fill="#000000"
            />
          </svg>
          <span className="siteTitle">All Bots</span>
          <span className="uk-badge">{AppStore.getBots.length}</span>
        </div>

        <div
          className={
            ' tab uk-flex uk-flex-middle uk-flex-center ' +
            (BotStoreView.Live == AppStore.CurrentBotStoreTab ? 'active' : '')
          }
          onClick={e => {
            this.toggleTab(BotStoreView.Live);
          }}>
          <svg width="15" height="15" viewBox="0 0 20 20" data-svg="comment">
            <path
              d="M14.313 2.012h-7.152l-2.331 7.014h1.666l-2.010 6.052 9.483-8.051h-2.904l3.248-5.015zM11.247 8.027l-4.687 3.979 1.322-3.979h-1.665l1.665-5.015h4.592l-3.248 5.015h2.021z"
              fill="#000000"
            />
          </svg>
          <span className="siteTitle">Live</span>
          <span className="uk-badge">{AppStore.getBots.length}</span>
        </div>

        <div
          className={
            ' tab uk-flex uk-flex-middle uk-flex-center ' +
            (BotStoreView.ComingSoon == AppStore.CurrentBotStoreTab ? 'active' : '')
          }
          onClick={e => {
            this.toggleTab(BotStoreView.ComingSoon);
          }}>
          <svg width="15" height="15" viewBox="0 0 20 20" data-svg="comment">
            <path
              d="M9 2.025v-1.025h1.5v-1h-4v1h1.5v1.025c-3.902 0.26-7 3.508-7 7.475 0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-3.967-3.098-7.215-7-7.475zM8.5 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zM9 9h4v1h-5v-4h1v3z"
              fill="#000000"
            />
          </svg>
          <span className="siteTitle">Work in progress</span>
          <span className="uk-badge">{AppStore.getBots.length}</span>
        </div>
        <div
          className={
            ' tab uk-flex uk-flex-middle uk-flex-center ' +
            (BotStoreView.MostViewed == AppStore.CurrentBotStoreTab ? 'active' : '')
          }
          onClick={e => {
            this.toggleTab(BotStoreView.MostViewed);
          }}>
          <svg width="15" height="15" viewBox="0 0 20 20" data-svg="comment">
            <path
              d="M16.965 8.817c-1.284-3.267-4.687-5.463-8.465-5.463s-7.181 2.196-8.465 5.463c-0.046 0.117-0.046 0.248 0 0.365 1.285 3.268 4.687 5.464 8.465 5.464s7.18-2.195 8.465-5.463c0.047-0.118 0.047-0.248 0-0.366zM8.5 13.646c-3.298 0-6.269-1.859-7.459-4.646 1.189-2.787 4.16-4.646 7.459-4.646s6.27 1.859 7.459 4.646c-1.19 2.786-4.161 4.646-7.459 4.646zM8.5 5.357c-2.009 0-3.643 1.634-3.643 3.643s1.634 3.643 3.644 3.643c2.008 0 3.643-1.634 3.643-3.643s-1.635-3.643-3.644-3.643zM8.5 11.643c-1.458 0-2.644-1.186-2.644-2.643s1.187-2.643 2.644-2.643c1.457 0 2.643 1.186 2.643 2.643s-1.185 2.643-2.643 2.643zM8.5 7.643c-0.748 0-1.357 0.609-1.357 1.357s0.609 1.357 1.357 1.357 1.357-0.609 1.357-1.357-0.609-1.357-1.357-1.357zM8.5 9.357c-0.197 0-0.357-0.16-0.357-0.357s0.16-0.357 0.357-0.357 0.357 0.16 0.357 0.357-0.16 0.357-0.357 0.357z"
              fill="#000000"
            />
          </svg>
          <span className="siteTitle">Most Viewed</span>
          <span className="uk-badge">{AppStore.getBots.length}</span>
        </div>

        <div
          className={
            ' tab uk-flex uk-flex-middle uk-flex-center ' +
            (BotStoreView.Bookmarked == AppStore.CurrentBotStoreTab ? 'active' : '')
          }
          onClick={e => {
            this.toggleTab(BotStoreView.Bookmarked);
          }}>
          <svg width="15" height="15" viewBox="0 0 20 20" data-svg="comment">
            <path
              d="M3.562 1v15.459l4.686-3.27 4.752 3.26v-15.449h-9.438zM12 14.551l-3.756-2.578-3.681 2.568v-12.541h7.437v12.551z"
              fill="#000000"
            />
          </svg>
          <span className="siteTitle">Bookmarked</span> <span className="uk-badge">{AppStore.getBots.length}</span>
        </div>
      </div>
    );
  }
}
