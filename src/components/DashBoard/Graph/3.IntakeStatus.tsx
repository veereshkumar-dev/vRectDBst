import React, { PureComponent } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';

import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'CEE', Approved: 30, Rejected: 4 },
  { name: 'ENG', Approved: 8, Rejected: 2 },
  { name: 'FIN', Approved: 19, Rejected: 1 },
  { name: 'HR', Approved: 19, Rejected: 0 },
  { name: 'ISC', Approved: 12, Rejected: 0 },
  { name: 'IT', Approved: 3, Rejected: 0 },
  { name: 'PROC', Approved: 14, Rejected: 1 },
];
export default class Graph1 extends PureComponent<GraphProps> {
  render() {
    return (
      <div className="wrapper_graph" style={{ width: '100%', height: '100%' }}>
        <div className="uk-flex uk-flex-center graphTitleWrapper uk-flex-column">
          <div className="graphTitle squareEdge uk-flex uk-flex-center" style={{ width: 250 }}>
            Benefit realized by function
          </div>
          <div className="roundEdge uk-text-center"> 1</div>
        </div>
        <div className="uk-flex graphContent" style={{ width: '100%', height: '100%' }}>
          {' '}
          <ResponsiveContainer>
            <BarChart width={600} height={300} data={data} margin={{ top: 90, right: 30, left: 5, bottom: 15 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Approved" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Rejected" stackId="a" fill="#bc5090" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
