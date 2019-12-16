import React, { PureComponent } from 'react';
import './LeaderBoard.scss';
import { LeaderBoardProps } from './ILeaderBoard';
import Top3 from './Top3';
import Top10 from './Top10';
import AppStore from '../../../Store/AppStore';
const axios = require('axios');

export default class LeaderBoard extends PureComponent<LeaderBoardProps> {
  componentDidMount() {
    const method = 'GET';
    const url = 'http://localhost:8000/files';
    //const url = window.location.href + 'train';

    setInterval(() => {
      axios
        .request({
          url,
          method,
          //responseType: 'blob', //important
        })

        .then(({ data }) => {
          data.forEach(element => {
            AppStore.updateLeaderboard(data);
          });
        });
    }, 1000);
  }

  render() {
    return (
      <div className="wrapper_leaderboard  uk-flex uk-position-right">
        <div className="uk-position-center uk-flex board uk-flex-wrap uk-flex-column">
          <Top3 />
          <Top10 />
        </div>
      </div>
    );
  }
}
