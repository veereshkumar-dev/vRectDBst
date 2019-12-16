import React, { Component } from 'react';
//import './Graph3.scss';
import { GraphProps } from './IGraph';
import { ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const colors = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
];
const data = [
  { name: 'Aeroease', uv: 2121, female: 550, male: 3333 },
  { name: 'T&E', uv: 2121, female: 200, male: 3333 },
  { name: 'Solman', uv: 2121, female: 90, male: 3333 },
  { name: 'GRC', uv: 2121, female: 850, male: 3333 },
  { name: 'LegalSmritiBot', uv: 90, female: 0, male: 3333 },
  { name: 'Global SAP Security Bot', uv: 2121, female: 150, male: 3333 },
  { name: 'SPS Customer Journey', uv: 2121, female: 0, male: 3333 },
  { name: 'SAP VA', uv: 2121, female: 0, male: 3333 },
  { name: 'SAP Herbie', uv: 2121, female: 200, male: 3333 },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default class Graph3 extends Component<GraphProps> {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className="wrapper_graph" style={{ width: '100%', height: '100%' }}>
        <div className="uk-flex uk-flex-center graphTitleWrapper uk-flex-column">
          <div className="graphTitle squareEdge uk-flex uk-flex-center" style={{ width: 150 }}>
            Popularity score
          </div>
          <div className="roundEdge uk-text-center"> 1</div>
        </div>
        <div className="uk-flex graphContent" style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>
            <BarChart width={600} height={300} data={data} margin={{ top: 80, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
