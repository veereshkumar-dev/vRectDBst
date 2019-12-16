import React, { PureComponent } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';

import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'Jan', AERO: 0, CORP: 0, HBT: 0, PMT: 0, SPS: 0 },
  { name: 'Feb', AERO: 0, CORP: 5500, HBT: 0, PMT: 0, SPS: 0 },
  { name: 'Mar', AERO: 0, CORP: 5500, HBT: 0, PMT: 0, SPS: 0 },
  { name: 'Apr', AERO: 127000, CORP: 140752, HBT: 2600, PMT: 0, SPS: 0 },
  { name: 'May', AERO: 0, CORP: 179837, HBT: 2600, PMT: 0, SPS: 0 },
  { name: 'Jun', AERO: 4003333, CORP: 38337, HBT: 2600, PMT: 0, SPS: 5500 },
  { name: 'July', AERO: 14133, CORP: 200795, HBT: 2600, PMT: 0, SPS: 5500 },
  { name: 'Aug', AERO: 14133, CORP: 214705, HBT: 2600, PMT: 3333, SPS: 5500 },
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
            <BarChart width={600} height={300} data={data} margin={{ top: 90, right: 30, left: 60, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="AERO" stackId="a" fill="#8884d8" />
              <Bar dataKey="CORP" stackId="a" fill="#82ca9d" />
              <Bar dataKey="HBT" stackId="a" fill="#bc5090" />
              <Bar dataKey="PMT" stackId="a" fill="#003f5c" />
              <Bar dataKey="SPS" stackId="a" fill="#ffa600" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
