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
		orders: 120
	},
	{
		name: 'Feb',
		orders: 12
	},
	{
		name: 'Mar',
		orders: 10
	},
	{
		name: 'Apr',
		orders: 5
	},
	{
		name: 'May',
		orders: 4
	},
	{
		name: 'Jun',
		orders: 8
	},
	{
		name: 'Jul',
		travelers: 10,
		orders: 8
	},
	{
		name: 'Aug',
		orders: 8
	},
	{
		name: 'Sep',
		orders: 8
	},
	{
		name: 'Oct',
		orders: 8
	},
	{
		name: 'Nov',
		orders: 8
	},
	{
		name: 'Dec',
		orders: 8
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
					<Line dataKey="Income"
						stroke="black" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default IncomeChart;
