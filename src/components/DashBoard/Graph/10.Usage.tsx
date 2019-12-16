import React, { Component } from 'react';
import './Graph.scss';
import { GraphProps } from './IGraph';
import { ResponsiveContainer } from 'recharts';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

//For Jan
const data01 = [
  { hour: 'Aeroease', index: 1, value: 0 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 10 },
  { hour: 'Solman', index: 1, value: 0 },
  { hour: 'GRC', index: 1, value: 333 },
  { hour: 'LegalSmritiBot', index: 1, value: 0 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 30 },
  { hour: 'SAP Herbie', index: 1, value: 22 },
];

//For Feb
const data02 = [
  { hour: 'Aeroease', index: 1, value: 0 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 25 },
  { hour: 'Solman', index: 1, value: 3 },
  { hour: 'GRC', index: 1, value: 282 },
  { hour: 'LegalSmritiBot', index: 1, value: 0 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 20 },
  { hour: 'SAP Herbie', index: 1, value: 20 },
];

//For March

const data03 = [
  { hour: 'Aeroease', index: 1, value: 0 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 30 },
  { hour: 'Solman', index: 1, value: 10 },
  { hour: 'GRC', index: 1, value: 350 },
  { hour: 'LegalSmritiBot', index: 1, value: 2 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 70 },
  { hour: 'SAP Herbie', index: 1, value: 27 },
];

//For April
const data04 = [
  { hour: 'Aeroease', index: 1, value: 0 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 10 },
  { hour: 'Solman', index: 1, value: 17 },
  { hour: 'GRC', index: 1, value: 350 },
  { hour: 'LegalSmritiBot', index: 1, value: 5 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 20 },
  { hour: 'SAP Herbie', index: 1, value: 21 },
];

//For May
const data05 = [
  { hour: 'Aeroease', index: 1, value: 30 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 23 },
  { hour: 'Solman', index: 1, value: 27 },
  { hour: 'GRC', index: 1, value: 110 },
  { hour: 'LegalSmritiBot', index: 1, value: 5 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 10 },
  { hour: 'SAP Herbie', index: 1, value: 50 },
];

//For June
const data06 = [
  { hour: 'Aeroease', index: 1, value: 50 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 7 },
  { hour: 'Solman', index: 1, value: 21 },
  { hour: 'GRC', index: 1, value: 750 },
  { hour: 'LegalSmritiBot', index: 1, value: 0 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 65 },
  { hour: 'SAP Herbie', index: 1, value: 59 },
];

//For July
const data07 = [
  { hour: 'Aeroease', index: 1, value: 120 },
  { hour: 'T&E Virtual Assistant', index: 1, value: 35 },
  { hour: 'Solman', index: 1, value: 30 },
  { hour: 'GRC', index: 1, value: 100 },
  { hour: 'LegalSmritiBot', index: 1, value: 4 },
  { hour: 'GlobalSAPsecuritybot', index: 1, value: 62 },
  { hour: 'SAP Herbie', index: 1, value: 65 },
];

const parseDomain = () => {
  return [
    0,
    Math.max.apply(null, [
      ...data01.map(entry => entry.value),
      ...data02.map(entry => entry.value),
      ...data03.map(entry => entry.value),
      ...data04.map(entry => entry.value),
      ...data05.map(entry => entry.value),
      ...data06.map(entry => entry.value),
      ...data07.map(entry => entry.value),
    ]),
  ];
};

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
    const domain = parseDomain();
    const range = [16, 225];

    return (
      <div className="wrapper_graph" style={{ width: '100%', height: '100%' }}>
        <div className="uk-flex-center graphTitleWrapper uk-flex-column">
          <div className="graphTitle squareEdge uk-flex-center" style={{ width: 200 }}>
            Active Bots by Function
          </div>
          <div className="roundEdge uk-text-center"> 1</div>
        </div>
        <div className="graphContent" style={{ width: '100%', height: '100%' }}>
          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              name="sunday"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'July', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data07} fill="#8884d8" />
          </ScatterChart>

          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'June', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data06} fill="#8884d8" />
          </ScatterChart>

          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'May', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data05} fill="#8884d8" />
          </ScatterChart>

          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'April', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data04} fill="#8884d8" />
          </ScatterChart>

          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'March', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data03} fill="#8884d8" />
          </ScatterChart>

          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Feb', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data02} fill="#8884d8" />
          </ScatterChart>

          <ScatterChart width={1200} height={60} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Jan', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data01} fill="#8884d8" />
          </ScatterChart>
        </div>
      </div>
    );
  }
}
