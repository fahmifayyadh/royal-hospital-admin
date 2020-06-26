$( document ).ready(function() {
	$("#direct").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#e25a48',
		backgroundColor: '#e6ecf3',
		multiPercentage: 1,
		width: 75,
		percentages: [10, 20, 30]
	});
	$("#referrals").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 43,
		fontColor: '#000000',
		foregroundColor: '#ffb400',
		backgroundColor: '#e6ecf3',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});
	$("#search-engines").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 29,
		fontColor: '#000000',
		foregroundColor: '#74b749',
		backgroundColor: '#e6ecf3',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});

	$("#sessions").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 39,
		fontColor: '#000000',
		foregroundColor: '#e25a48',
		backgroundColor: '#e6ecf3',			
		icon: 'e094',
		iconColor: '#e25a48',
		iconPosition: 'middle',
		textBelow: false
	});

	$("#users").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 87,
		fontColor: '#000000',
		foregroundColor: '#ffc510',
		backgroundColor: '#e6ecf3',			
		icon: 'e63d',
		iconColor: '#ffc510',
		iconPosition: 'middle',
		textBelow: false
	});

	$("#duration").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 66,
		fontColor: '#000000',
		foregroundColor: '#74b749',
		backgroundColor: '#e6ecf3',			
		icon: 'e014',
		iconColor: '#74b749',
		iconPosition: 'middle',
		text: 'Duration',
		textBelow: true
	});	
	
	$("#bounce-rate").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 21,
		fontColor: '#000000',
		foregroundColor: '#4bb5ea',
		backgroundColor: '#e6ecf3',			
		icon: 'e87e',
		iconColor: '#4bb5ea',
		iconPosition: 'middle',
		text: 'Bounce Rate',
		textBelow: true
	});
	
	$("#on-trials").circliful({
		animationStep: 5,
		foregroundBorderWidth: 2,
		backgroundBorderWidth: 10,
		percent: 34,
		fontColor: '#000000',
		foregroundColor: '#ab7967',
		backgroundColor: '#e6ecf3',			
		icon: 'f206',
		iconColor: '#ab7967',
		iconPosition: 'middle',
		text: 'Trails',
		textBelow: true
	});

	$("#base-plan").circliful({
		animationStep: 5,
		foregroundBorderWidth: 2,
		backgroundBorderWidth: 10,
		percent: 21,
		fontColor: '#000000',
		foregroundColor: '#fa5555',
		backgroundColor: '#e6ecf3',			
		icon: 'f21c',
		iconColor: '#fa5555',
		iconPosition: 'middle',
		text: 'Base',
		textBelow: true
	});

	$("#premium-plan").circliful({
		animationStep: 5,
		foregroundBorderWidth: 2,
		backgroundBorderWidth: 10,
		percent: 52,
		fontColor: '#000000',
		foregroundColor: '#1d90ce',
		backgroundColor: '#e6ecf3',			
		icon: 'f1b9',
		iconColor: '#1d90ce',
		iconPosition: 'middle',
		text: 'Premium',
		textBelow: true
	});	
	
	$("#platinum-plan").circliful({
		animationStep: 5,
		foregroundBorderWidth: 2,
		backgroundBorderWidth: 10,
		percent: 88,
		fontColor: '#000000',
		foregroundColor: '#6bc298',
		backgroundColor: '#e6ecf3',			
		icon: 'f072',
		iconColor: '#6bc298',
		iconPosition: 'middle',
		text: 'Platinum',
		textBelow: true
	});

	$("#saleA").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#ffd75f',
		backgroundColor: '#e6ecf3',
		multiPercentage: 1,
		percentages: [10, 20, 30],
		width: 75,
	});
	$("#saleB").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 48,
		fontColor: '#000000',
		foregroundColor: '#8fe0ff',
		backgroundColor: '#e6ecf3',
		multiPercentage: 1,
		percentages: [10, 20, 30],
		width: 75,
	});
	$("#saleC").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 20,
		backgroundBorderWidth: 10,
		percent: 88,
		fontColor: '#000000',
		foregroundColor: '#ff7171',
		backgroundColor: '#e6ecf3',
		multiPercentage: 1,
		percentages: [10, 20, 30],
		width: 75,
	});

});