import React, { Component } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';
import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'AERO', uv: 4000, ProductionBots: 1, amt: 2400 },
  { name: 'PMT', uv: 2000, ProductionBots: 0, amt: 2290 },
  { name: 'SPS', uv: 2780, ProductionBots: 0, amt: 2000 },
  { name: 'HBT', uv: 1890, ProductionBots: 0, amt: 2181 },
  { name: 'CORP', uv: 2390, ProductionBots: 6, amt: 2500 },
];

export default class Graph9 extends Component<GraphProps> {
  renderTooltip(props) {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10 }}>
          <p>{data.hour}</p>
          <p>
            <span>value: </span>
            {data.value}
          </p>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="wrapper_graph" style={{ width: '100%', height: '100%' }}>
        <div className="uk-flex uk-flex-center graphTitleWrapper uk-flex-column">
          <div className="graphTitle squareEdge uk-flex uk-flex-center" style={{ width: 200 }}>
            Active Bots by Function
          </div>
          <div className="roundEdge uk-text-center"> 1</div>
        </div>
        <div className="uk-flex graphContent" style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>
            <BarChart width={600} height={300} data={data} margin={{ top: 80, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ProductionBots" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
