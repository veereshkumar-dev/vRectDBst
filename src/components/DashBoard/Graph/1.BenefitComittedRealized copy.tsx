import React, { PureComponent } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';

import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'Finance', Success: 640, Failure: 45, amt: 2400 },
  { name: 'FPA', Success: 166, Failure: 25, amt: 2210 },
  { name: 'HR', Success: 5116, Failure: 347, amt: 2290 },
];
export default class Graph1 extends PureComponent<GraphProps> {
  render() {
    return (
      <div className="wrapper_graph" style={{ width: '100%', height: '100%' }}>
        <div className="uk-flex uk-flex-center graphTitleWrapper uk-flex-column">
          <div className="graphTitle squareEdge uk-flex uk-flex-center" style={{ width: 250 }}>
            Benefit committed v/s realized
          </div>
          <div className="roundEdge uk-text-center"> 1</div>
        </div>
        <div className="uk-flex graphContent" style={{ width: '100%', height: '100%' }}>
          {' '}
          <ResponsiveContainer>
            <BarChart width={600} height={300} data={data} margin={{ top: 80, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Failure" stackId="a" fill="#8884d8" />
              <Bar dataKey="Success" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
