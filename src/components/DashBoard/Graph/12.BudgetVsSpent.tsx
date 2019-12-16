import React, { Component } from 'react';
import './GraphPie.scss';
import { GraphProps } from './IGraph';

import { ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector } from 'recharts';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
const data = [{ name: 'Remaining', value: 1.2 }, { name: 'Spend Commitment', value: 3.8 }];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        $ 5 Million.
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={payload.name == 'Remaining' ? '#82ca9d' : '#8884d8'}
      />

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={payload.name == 'Remaining' ? '#8884d8' : '#82ca9d'}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={payload.name == 'Remaining' ? '#8884d8' : '#82ca9d'} stroke="none" />

      {payload.name == 'Remaining' ? (
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{` Remaining`}</text>
      ) : (
        ''
      )}

      {payload.name == 'Spend Commitment' ? (
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{` Spend`}</text>
      ) : (
        ''
      )}
      {payload.name == 'Spend Commitment' ? (
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#333">{` Commitment`}</text>
      ) : (
        ''
      )}

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={payload.name == 'Spend Commitment' ? 38 : 18}
        textAnchor={textAnchor}
        fill={fill}>
        {/* {` ${(percent * 100).toFixed(2)}%`} */}
        {`$ ${value} m.`}
      </text>
    </g>
  );
};

@observer
export default class Graph1 extends Component<GraphProps> {
  @observable
  activeIndex = 0;

  @action
  onpointerenter = (data, index) => {
    this.activeIndex = index;
  };

  render() {
    return (
      <div className="pie1" style={{ width: '100%', height: '100%' }}>
        <PieChart width={500} height={400}>
          <Pie
            activeIndex={this.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={300}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            onMouseEnter={this.onpointerenter}
          />
        </PieChart>
      </div>
    );
  }
}
