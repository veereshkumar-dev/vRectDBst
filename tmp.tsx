const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } = Recharts;
const data = [
  { name: 'ISC', uv: 4000, ProductionBots: 1, amt: 2400 },
  { name: 'FPA', uv: 3000, ProductionBots: 146, amt: 2210 },
  { name: 'AERO', uv: 2000, ProductionBots: 4, amt: 2290 },
  { name: 'PMT', uv: 2780, ProductionBots: 5, amt: 2000 },
  { name: 'Procurment', uv: 9, ProductionBots: 9, amt: 2181 },
  { name: 'Finance', uv: 3, ProductionBots: 75, amt: 2500 },
  { name: 'HR', uv: 3490, ProductionBots: 96, amt: 2100 },
];
const StackedBarChart = React.createClass({
  render() {
    return (
      <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ProductionBots" stackId="a" fill="#8884d8" />
      </BarChart>
    );
  },
});

ReactDOM.render(<StackedBarChart />, document.getElementById('container'));
