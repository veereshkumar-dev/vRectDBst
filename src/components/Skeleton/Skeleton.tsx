import React, { Component } from 'react';
import './Skeleton.scss';
import './SkeletonResponsive.scss';
import { SkeletonProps } from './ISkeleton';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { SiteType } from '../../Store/AppStore';
import AppStore from '../../Store/AppStore';
import BotStore from './../BotStore/BotStore';

import InlineConsole from 'inline-console';

import { hot } from 'react-hot-loader';
import DashBoard from './../DashBoard/DashBoard';
import BotCardSwitcher from '../BotStore/BotCardSwitcher';
import BotCard_Expanded from '../BotStore/BotCard_Expanded';
import EmploeeDay from '../EmploeeDay';

//import BotCard_Tween from '../BotCard_Tween';

//const reactLogo = require("./../assets/img/react_logo.svg");

@observer
class Skeleton extends Component<SkeletonProps> {
  @observable
  sideBarExpanded = false;

  @action
  toggleSideBar = () => {
    this.sideBarExpanded = !this.sideBarExpanded;
  };

  @action
  toggleSite = (newSiteType: SiteType) => {
    AppStore.CurrentSite = newSiteType;
  };

  getCurrentSite() {
    if (AppStore.CurrentSite == SiteType.BotStore) return <BotStore />;
    else if (AppStore.CurrentSite == SiteType.Dashboard) return <DashBoard />;
    else
      return (
        <div className="uk-flex uk-flex-1 uk-grid uk-flex-wrap">
          {AppStore.getBots.slice(0, 1).map((e, i) => {
            return <EmploeeDay />;
          })}
        </div>
      );
  }

  render() {
    return (
      <div className="wrapper_skeleton uk-flex">
        {/* <div className="inline-console">
          <InlineConsole redirect={true} />
        </div> */}
        <div className={this.sideBarExpanded ? 'sideBar uk-flex expanded ' : 'sideBar uk-flex '}>
          <div className=" sideBarContent uk-flex uk-position-fixed uk-flex-column uk-flex-between">
            <div className="topButtons_wrapper ">
              <div className="siteButton  uk-flex" onClick={this.toggleSideBar}>
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path
                      d="M0 1v14h17v-14h-17zM16 14h-15v-12h15v12zM4.646 10.354l-2.353-2.354 2.354-2.354 0.707 0.707-1.647 1.647 1.646 1.646-0.707 0.708zM11.646 9.646l1.647-1.646-1.646-1.646 0.707-0.707 2.353 2.353-2.354 2.354-0.707-0.708z"
                      fill="#000000"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="siteButton_wrapper ">
              <div
                className=" siteButton  uk-flex "
                onClick={() => {
                  window.open('https://honeywellprod.sharepoint.com/teams/RPA/SitePages/RPA.aspx', '_blank');
                }}>
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path
                      d="M14 16h-3v-6h-5v6h-3v-9h-1v10h13v-10h-1v9zM7 16v-5h3v5h-3zM16.796 6.473l-0.592 0.807-7.704-5.66-7.704 5.658-0.592-0.806 8.296-6.092 8.296 6.093z"
                      fill="#000000"
                    />
                  </svg>
                </div>

                <div className={this.sideBarExpanded ? 'uk-flex siteTitle' : 'uk-flex siteTitle uk-hidden'}>Home</div>
              </div>

              <div
                className={(AppStore.CurrentSite == SiteType.BotStore ? 'active' : '') + ' siteButton  uk-flex '}
                onClick={() => {
                  this.toggleSite(SiteType.BotStore);
                }}>
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z" fill="#000000" />
                    <path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z" fill="#000000" />
                    <path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z" fill="#000000" />
                    <path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z" fill="#000000" />
                  </svg>
                </div>

                <div className={this.sideBarExpanded ? 'uk-flex siteTitle' : 'uk-flex siteTitle uk-hidden'}>
                  Catalog
                </div>
              </div>

              <div
                className={(AppStore.CurrentSite == SiteType.Dashboard ? 'active' : '') + ' siteButton  uk-flex '}
                onClick={() => {
                  this.toggleSite(SiteType.Dashboard);
                }}>
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path
                      d="M17 16v1h-17v-1h17zM2 10h2v5h1v-6h-4v6h1v-5zM7 7h2v8h1v-9h-4v9h1v-8zM12 3h2v12h1v-13h-4v13h1v-12z"
                      fill="#000000"
                    />
                  </svg>
                </div>

                <div className={this.sideBarExpanded ? 'uk-flex siteTitle' : 'uk-flex siteTitle uk-hidden'}>
                  Dashboard
                </div>
              </div>

              <div
                className={
                  (AppStore.CurrentSite == SiteType.KnowledgeBase ? 'active' : '') + ' siteButton  uk-flex uk-hidden'
                }
                onClick={() => {
                  this.toggleSite(SiteType.KnowledgeBase);
                }}>
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path
                      d="M14 2v-2h-13v17h13v-2h2v-13h-2zM2 16v-15h2v15h-2zM13 16h-8v-15h8v15zM15 14h-1v-3h1v3zM15 10h-1v-3h1v3zM14 6v-3h1v3h-1zM6 4h5v1h-5v-1zM6 6h4v1h-4v-1z"
                      fill="#000000"
                    />
                  </svg>
                </div>

                <div className={this.sideBarExpanded ? 'uk-flex siteTitle' : 'uk-flex siteTitle uk-hidden'}>
                  Knowledge Base
                </div>
              </div>
            </div>

            <div className="extraButtons_wrapper ">
              <div className="siteButton  uk-flex">
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path
                      d="M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z"
                      fill="#000000"
                    />
                  </svg>
                </div>

                <div className={this.sideBarExpanded ? 'uk-flex siteTitle' : 'uk-flex siteTitle uk-hidden'}>
                  Settings
                </div>
              </div>
              <div className="siteButton  uk-flex">
                <div className="uk-flex siteIcon">
                  <svg version="1.1" width="17" height="17" viewBox="0 0 17 17">
                    <g></g>
                    <path
                      d="M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM9.658 12.219c0 0.568-0.462 1.031-1.031 1.031-0.571 0-1.033-0.463-1.033-1.031 0-0.57 0.462-1.032 1.033-1.032 0.569 0 1.031 0.461 1.031 1.032zM10.662 4.215c0.448 0.565 0.674 1.328 0.55 1.855-0.243 1.027-0.842 1.567-1.371 2.043-0.543 0.489-0.934 0.84-0.934 1.647h-1c0-1.251 0.671-1.856 1.264-2.39 0.461-0.415 0.896-0.807 1.066-1.529 0.034-0.143-0.039-0.6-0.36-1.005-0.307-0.389-0.728-0.586-1.248-0.586-1.779 0-1.869 1.444-1.873 1.609l-1-0.027c0.024-0.893 0.655-2.582 2.873-2.582 0.818 0 1.539 0.343 2.033 0.965z"
                      fill="#000000"
                    />
                  </svg>
                </div>

                <div className={this.sideBarExpanded ? 'uk-flex siteTitle' : 'uk-flex siteTitle uk-hidden'}>Help</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainBar uk-flex uk-flex-1">{this.getCurrentSite()}</div>
      </div>
    );
  }
}
declare let module: object;

export default hot(module)(Skeleton);
