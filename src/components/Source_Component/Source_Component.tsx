import React, { PureComponent } from 'react';
import './Source_Component.scss';
import { Source_ComponentProps } from './ISource_Component';

export default class Source_Component extends PureComponent<Source_ComponentProps> {
  render() {
    return (
      <div className="wrapper_source_component">
        <div>Source_Component Div</div>
      </div>
    );
  }
}
