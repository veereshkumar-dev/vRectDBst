import React, { Component } from 'react';
import './Graph2.scss';
import { Graph2Props } from './IGraph2';
import { ResponsiveContainer } from 'recharts';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  Legend,
} from 'recharts';
var moment = require('moment');

export default class Graph2 extends Component<Graph2Props> {
  seed = this.props.viewsCount;

  giveRandomBenefitsAround(month) {
    if (parseInt(moment(this.props.BenefitsStartsOn).format('M')) - parseInt(moment(month, 'MMM').format('M')) < 0)
      return Math.round(this.props.benefits * this.random());
    else return 0;
  }

  data = [
    {
      name: 'Jan',
      Execution: this.giveRandomBenefitsAround('Jan'),
      Benefit: this.giveRandomBenefitsAround('Jan'),
      amt: 2400,
    },
    {
      name: 'Feb',
      Execution: this.giveRandomBenefitsAround('Feb'),
      Benefit: this.giveRandomBenefitsAround('Feb'),
      amt: 2210,
    },
    {
      name: 'Mar',
      Execution: this.giveRandomBenefitsAround('Mar'),
      Benefit: this.giveRandomBenefitsAround('Mar'),
      amt: 2290,
    },
    {
      name: 'Apr',
      Execution: this.giveRandomBenefitsAround('Apr'),
      Benefit: this.giveRandomBenefitsAround('Apr'),
      amt: 2000,
    },
    {
      name: 'May',
      Execution: this.giveRandomBenefitsAround('May'),
      Benefit: this.giveRandomBenefitsAround('May'),
      amt: 2181,
    },
    {
      name: 'Jun',
      Execution: this.giveRandomBenefitsAround('Jun'),
      Benefit: this.giveRandomBenefitsAround('Jun'),
      amt: 2500,
    },
    {
      name: 'Jul',
      Execution: this.giveRandomBenefitsAround('Jul'),
      Benefit: this.giveRandomBenefitsAround('Jul'),
      amt: 2100,
    },
    {
      name: 'Sep',
      Execution: this.giveRandomBenefitsAround('Sep'),
      Benefit: this.giveRandomBenefitsAround('Sep'),
      amt: 2100,
    },
    {
      name: 'Oct',
      Execution: this.giveRandomBenefitsAround('Oct'),
      Benefit: this.giveRandomBenefitsAround('Oct'),
      amt: 2100,
    },
    {
      name: 'Nov',
      Execution: this.giveRandomBenefitsAround('Nov'),
      Benefit: this.giveRandomBenefitsAround('Nov'),
      amt: 2100,
    },
    {
      name: 'Dec',
      Execution: this.giveRandomBenefitsAround('Dec'),
      Benefit: this.giveRandomBenefitsAround('Dec'),
      amt: 2100,
    },
  ];

  random() {
    let min = 0.95;
    let max = 1.05;

    var x = Math.sin(this.seed++) * 1000;
    return (x - Math.floor(x)) * (+max - +min) + +min;
  }

  render() {
    return (
      <div className="wrapper_graph2">
        <ResponsiveContainer>
          <LineChart width={600} height={300} data={this.data} margin={{ top: 15, right: 5, left: -15, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="Execution" stroke="#8884d8" />
            <Line yAxisId="left" type="monotone" dataKey="Benefit" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
