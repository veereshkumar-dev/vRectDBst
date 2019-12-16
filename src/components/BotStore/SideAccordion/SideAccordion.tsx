import React, { Component } from 'react';
import './SideAccordion.scss';
import { SideAccordionProps } from './ISideAccordion';
import { observer } from 'mobx-react';
import AppStore from '../../../Store/AppStore';

import { pull, includes } from 'lodash';

@observer
export default class SideAccordion extends Component<SideAccordionProps> {
  render() {
    return (
      <div className="wrapper_sideaccordion uk-flex uk-flex-1">
        <ul className=" uk-flex uk-flex-1 uk-flex-column" uk-accordion="multiple: true">
          <li className="uk-open">
            <a className="uk-accordion-title" href="#">
              By Type
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-list">
                {AppStore.uniqBotTypes.map(e => {
                  return (
                    <li className="uk-text-truncate" key={e}>
                      <label>
                        <input
                          className="uk-checkbox"
                          type="checkbox"
                          onChange={event => {
                            if (event.target.checked) AppStore.Filter_Type.push(e);
                            else pull(AppStore.Filter_Type, e);
                          }}
                          checked={includes(AppStore.Filter_Type, e)}
                        />
                        {e}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="uk-open">
            <a className="uk-accordion-title" href="#">
              By SBG
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-list">
                {AppStore.uniqSBG.map(e => {
                  return (
                    <li className="uk-text-truncate" key={e}>
                      <label>
                        <input
                          className="uk-checkbox"
                          type="checkbox"
                          onChange={event => {
                            if (event.target.checked) AppStore.Filter_SBG.push(e);
                            else pull(AppStore.Filter_SBG, e);
                          }}
                          checked={includes(AppStore.Filter_SBG, e)}
                        />{' '}
                        {e}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              By Function
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-list">
                {AppStore.uniqFunction.map(e => {
                  return (
                    <li className="uk-text-truncate" key={e}>
                      <label>
                        <input
                          className="uk-checkbox"
                          type="checkbox"
                          onChange={event => {
                            if (event.target.checked) AppStore.Filter_Function.push(e);
                            else pull(AppStore.Filter_Function, e);
                          }}
                          checked={includes(AppStore.Filter_Function, e)}
                        />{' '}
                        {e}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
