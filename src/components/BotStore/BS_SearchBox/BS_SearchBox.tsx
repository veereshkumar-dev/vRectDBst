import React, { Component } from 'react';
import './style/bs_searchbox.scss';
import { BS_SearchBoxProps } from './IBS_SearchBox';

import { hot } from 'react-hot-loader';
import AppStore from '../../../Store/AppStore';
import { observer } from 'mobx-react';

//const reactLogo = require("./../../assets/Honeywell_logo.svg");

@observer
class BS_SearchBox extends Component<BS_SearchBoxProps> {
  render() {
    return (
      <div className="wrapper_bs_searchbox uk-flex-1 uk-flex uk-flex-center uk-flex-middle">
        <form className="uk-search uk-search-default uk-flex">
          <input
            className="uk-search-input"
            type="search"
            placeholder="Search..."
            onChange={e => {
              AppStore.SearchFilterNormal = e.target.value;
            }}
            value={AppStore.SearchFilterNormal}
          />
          <button
            className="uk-flex uk-flex-middle uk-flex-center cancleButton"
            onClick={e => {
              AppStore.SearchFilterNormal = '';
              e.preventDefault();
            }}>
            x
          </button>
          <button
            className="uk-flex uk-flex-middle uk-flex-center searchButton"
            onClick={e => {
              e.preventDefault();
            }}>
            <svg width="20" height="20" viewBox="0 0 20 20" data-svg="search">
              <circle fill="none" stroke="#000" strokeWidth="2.4" cx="9" cy="9" r="7"></circle>
              <path fill="none" stroke="#000" strokeWidth="2.4" d="M14,14 L18,18 L14,14 Z"></path>
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default BS_SearchBox;

//declare let module: object;

//export default hot(module)(BS_SearchBox);
