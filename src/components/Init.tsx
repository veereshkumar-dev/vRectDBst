import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
//import BS_SearchBox from './BS_SearchBox/index';
import Skeleton from './Skeleton/Skeleton';

export default class Init extends Component {
  render() {
    return (
      <div>
        {/* <DevTools /> */}
        <Skeleton />
        {/* <BS_SearchBox /> */}
      </div>
    );
  }
}
