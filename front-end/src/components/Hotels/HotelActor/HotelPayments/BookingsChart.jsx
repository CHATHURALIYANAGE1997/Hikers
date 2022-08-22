import React from "react";
import './hotelpayments.css';
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
		bookings: 120
	},
	{
		name: 'Feb',
		bookings: 12
	},
	{
		name: 'Mar',
		bookings: 10
	},
	{
		name: 'Apr',
		bookings: 5
	},
	{
		name: 'May',
		bookings: 4
	},
	{
		name: 'Jun',
		bookings: 8
	},
	{
		name: 'Jul',
		bookings: 8
	},
	{
		name: 'Aug',
		bookings: 8
	},
	{
		name: 'Sep',
		bookings: 8
	},
	{
		name: 'Oct',
		bookings: 8
	},
	{
		name: 'Nov',
		bookings: 8
	},
	{
		name: 'Dec',
		bookings: 8
	},
];

function BookingChart() {
	return (

		<div className="hotel-income-chart">
			<h4 className="hotel-income-title-description">
				Overall Hotel Bookings
			</h4>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="bookings"
						stroke="black" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default BookingChart;
