import React, { Component } from 'react';
//import './Graph3.scss';
import { GraphProps } from './IGraph';
import { ResponsiveContainer } from 'recharts';
import { ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const data = [
  { name: 'Jan', Actual: 0, Planned: 4 },
  { name: 'Feb', Actual: 2, Planned: 16 },
  { name: 'Mar', Actual: 6, Planned: 40 },
  { name: 'Apr', Actual: 10, Planned: 52 },
  { name: 'May', Actual: 21, Planned: 64 },
  { name: 'Jun', Actual: 32, Planned: 86 },
  { name: 'Jul', Actual: 39, Planned: 99 },
  { name: 'Aug', Actual: 52, Planned: 111 },
  { name: 'Sep', Actual: 81, Planned: 130 },
  { name: 'Oct', Actual: 84, Planned: 133 },
  { name: 'Nov', Actual: 88, Planned: 145 },
  { name: 'Dec', Actual: 91, Planned: 145 },
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
          <div className="graphTitle squareEdge uk-flex uk-flex-center">Bots: Actual v/s Planned</div>
          <div className="roundEdge uk-text-center"> 1</div>
        </div>
        <div className="uk-flex graphContent" style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>
            <ComposedChart width={600} height={300} data={data} margin={{ top: 80, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" label={{ value: '', position: 'insideBottomRight', offset: 0 }} />
              <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />

              <Bar dataKey="Planned" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Actual" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
