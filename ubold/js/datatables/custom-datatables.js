// Basic DataTable
$(function(){
	$('#basicExample').DataTable({
		'iDisplayLength': 3,
	});
});

// Autofill DataTable
$(function(){
	$('#autoFill').DataTable({
		autoFill: true,
		'iDisplayLength': 3,
	});
});

// Fixed Header DataTable
$(function(){
	var table = $('#fixedHeader').DataTable( {
		fixedHeader: true,
		'iDisplayLength': 5,
	});
});

// Responsive Table
$(function(){
	$('#responsiveTable').DataTable({
		responsive: true,
		'iDisplayLength': 3,
	});
});

$(function(){
	$('#scrollTable').DataTable({
		"scrollY": "180px",
		"scrollCollapse": true,
		"paging": false,
	});
});

$(function(){
	$('#copy-print-csv').DataTable( {
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		'iDisplayLength': 5,
	});
});
