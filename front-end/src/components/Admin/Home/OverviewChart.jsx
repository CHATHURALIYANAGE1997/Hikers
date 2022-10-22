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
		orders: 8
	},
	{
		name: 'Feb',
		orders: 7
	},
	{
		name: 'Mar',
		orders: 10
	},
	{
		name: 'Apr',
		orders: 15
	},
	{
		name: 'May',
		orders: 12
	},
	{
		name: 'Jun',
		orders: 10
	},
	{
		name: 'Jul',
		orders: 5
	},
	{
		name: 'Aug',
		orders: 8
	},
	{
		name: 'Sep',
		orders: 12
	},
	{
		name: 'Oct',
		orders: 10
	},
	{
		name: 'Nov',
		orders: ''
	},
	{
		name: 'Dec',
		orders: ''
	},
];

function OverViewChart() {
	return (

		<div className="overview-chart">
			<h3 className="text-heading overview-chart-title-description">
				Overall Trip Orders
			</h3>
			<ResponsiveContainer width="100%" aspect={3} className="overview-chart-container">
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="orders"
						stroke="black" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default OverViewChart;
