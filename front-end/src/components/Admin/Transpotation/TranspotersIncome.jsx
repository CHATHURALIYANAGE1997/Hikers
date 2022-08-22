import React from "react";
import './admintranspotation.css';
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
		income: 156000
	},
	{
		name: 'Mar',
		income: 132000
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
		income: 88000
	},
	{
		name: 'Jul',
		income: 88000
	},
	{
		name: 'Aug',
		income: 108000
	},
	{
		name: 'Sep',
		income: 58000
	},
	{
		name: 'Oct',
		income: 98000
	},
	{
		name: 'Nov',
		income: 28000
	},
	{
		name: 'Dec',
		income: 168000
	},
];

function TranspotersIncome() {
	return (

		<div className="hotel-income-chart">
			<h4 className="hotel-income-title-description">
				Overall Transport Income
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

export default TranspotersIncome;
