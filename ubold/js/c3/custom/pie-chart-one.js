var chart12 = c3.generate({
	bindto: '#pieChart1',
	data: {
		// iris data from R
		columns: [
			['Mon', 219],
			['Tue', 167],
			['Wed', 115],
			['Thu', 87],
			['Fri', 60],
			['Sat', 30],
		],
		type : 'pie',
		colors: {
			Mon: '#3e7ba8',
			Tue: '#2a8ea6',
			Wed: '#19a6b0',
			Thu: '#68b4b4',
			Fri: '#95c0b7',
			Sat: '#bad0b7',
		},
		onclick: function (d, i) { console.log("onclick", d, i); },
		onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		onmouseout: function (d, i) { console.log("onmouseout", d, i); }
	},
});