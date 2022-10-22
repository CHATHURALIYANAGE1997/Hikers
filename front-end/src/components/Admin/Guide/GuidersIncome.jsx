import React from "react";
import './adminguide.css';
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
		income: 12000
	},
	{
		name: 'Feb',
		income: 15600
	},
	{
		name: 'Mar',
		income: 13200
	},
	{
		name: 'Apr',
		income: 52000
	},
	{
		name: 'May',
		income: 41000
	},
	{
		name: 'Jun',
		income: 28000
	},
	{
		name: 'Jul',
		income: 38000
	},
	{
		name: 'Aug',
		income: 10800
	},
	{
		name: 'Sep',
		income: 5000
	},
	{
		name: 'Oct',
		income: 9800
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

function GuidersIncome() {
	return (

		<div className="hotel-income-chart">
			<h4 className="hotel-income-title-description">
				Overall Guiders' Income
			</h4>
			<ResponsiveContainer width="100%" aspect={3} className="">
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

export default GuidersIncome;
