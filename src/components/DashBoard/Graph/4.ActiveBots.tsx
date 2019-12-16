import React, { Component } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';
import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'ISC', uv: 4000, ProductionBots: 1, amt: 2400 },
  { name: 'FPA', uv: 3000, ProductionBots: 146, amt: 2210 },
  { name: 'AERO', uv: 2000, ProductionBots: 4, amt: 2290 },
  { name: 'PMT', uv: 2780, ProductionBots: 5, amt: 2000 },
  { name: 'Procurment', uv: 9, ProductionBots: 9, amt: 2181 },
  { name: 'Finance', uv: 3, ProductionBots: 75, amt: 2500 },
  { name: 'HR', uv: 3490, ProductionBots: 96, amt: 2100 },
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
          <div className="graphTitle squareEdge uk-flex uk-flex-center">Active bots (v)</div>
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
              <Bar dataKey="ProductionBots" stackId="a" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
