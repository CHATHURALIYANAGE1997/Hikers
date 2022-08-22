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
		income: 120000
	},
	{
		name: 'Feb',
		income: 12000
	},
	{
		name: 'Mar',
		income: 10000
	},
	{
		name: 'Apr',
		income: 5000
	},
	{
		name: 'May',
		income: 40000
	},
	{
		name: 'Jun',
		income: 10000
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
		income: 51800
	},
	{
		name: 'Oct',
		income: 8500
	},
	{
		name: 'Nov',
		income: 7400
	},
	{
		name: 'Dec',
		income: 12300
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
