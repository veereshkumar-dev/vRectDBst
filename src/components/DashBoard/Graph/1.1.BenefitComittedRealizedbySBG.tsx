import React, { PureComponent } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';

import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'Jan', CEE: 0, ENG: 0, FIN: 0, HR: 0, ISC: 0 },
  { name: 'Feb', CEE: 0, ENG: 0, FIN: 0, HR: 5500, ISC: 0 },
  { name: 'Mar', CEE: 0, ENG: 0, FIN: 0, HR: 5500, ISC: 0 },
  { name: 'Apr', CEE: 0, ENG: 0, FIN: 244267, HR: 9085, ISC: 0 },
  { name: 'May', CEE: 0, ENG: 0, FIN: 171267, HR: 11170, ISC: 0 },
  { name: 'Jun', CEE: 5500, ENG: 0, FIN: 27600, HR: 16670, ISC: 4000000 },
  { name: 'July', CEE: 5500, ENG: 10800, FIN: 181474, HR: 25254, ISC: 0 },
  { name: 'Aug', CEE: 5500, ENG: 10800, FIN: 196632, HR: 27339, ISC: 0 },
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
              <Bar dataKey="CEE" stackId="a" fill="#8884d8" />
              <Bar dataKey="ENG" stackId="a" fill="#82ca9d" />
              <Bar dataKey="FIN" stackId="a" fill="#bc5090" />
              <Bar dataKey="HR" stackId="a" fill="#003f5c" />
              <Bar dataKey="ISC" stackId="a" fill="#ffa600" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
