import React from "react";
import './home.css';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
	{
		name: 'Jan',
		income: 23200
	},
	{
		name: 'Feb',
		income: 10800
	},
	{
		name: 'Mar',
		income: 10000
	},
	{
		name: 'Apr',
		income: 50000
	},
	{
		name: 'May',
		income: 42000
	},
	{
		name: 'Jun',
		income: 15000
	},
	{
		name: 'Jul',
		income: 8500
	},
	{
		name: 'Aug',
		income: 20400
	},
	{
		name: 'Sep',
		income: 31800
	},
	{
		name: 'Oct',
		income: 8500
	},
	{
		name: 'Nov',
		income: ''
	},
	{
		name: 'Dec',
		income: ''
	},
];

function IncomeChart() {
	return (

		<div className="overview-chart">
			<h3 className="text-heading overview-chart-title-description">
				Overall Income
			</h3>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="income"
						stroke="black" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default IncomeChart;
