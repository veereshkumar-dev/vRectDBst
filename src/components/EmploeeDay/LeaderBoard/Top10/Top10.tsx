import React, { PureComponent } from 'react';
import './Top10.scss';
import { Top10Props } from './ITop10';
import AppStore from '../../../../Store/AppStore';

import { observer } from 'mobx-react';

@observer
export default class Top10 extends PureComponent<Top10Props> {
  render() {
    return (
      <div className="wrapper_top10 uk-flex uk-flex-1">
        <table className="uk-table uk-table-middle uk-table-divider">
          <thead>
            <tr>
              <th className="uk-width-small profileImage"></th>
              <th className=" profileName">Name</th>
              <th className=" profileScore">Score</th>
            </tr>
          </thead>
          <tbody>
            {AppStore.ed_images.map(item => {
              return (
                <tr>
                  <td>
                    <img className="badge " src={item.ImageURL} />
                  </td>
                  <td>{item.Name}</td>
                  <td>
                    <span className="uk-badge">{(item.Score * 100).toFixed(2)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
