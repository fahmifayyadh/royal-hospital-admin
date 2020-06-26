$(function(){
	var codes = $('.highlight code');
	codes.each(function (ind, el) {
		hljs.highlightBlock(el);
	});

	$('.lobipanel-custom').lobiPanel({
		reload: false,
		unpin: false,
		editTitle: false,
		sortable: true,
	});
	$('.lobipanel-fullscreen').lobiPanel({
		reload: false,
		unpin: false,
		editTitle: false,
		minimize: false,
		unpin: false,
		close: false,
		sortable: true,
	});	
	$('.lobipanel-edit').lobiPanel({
		reload: false,
		close: false,
		minimize: false,
		unpin: false,
		expand: false,
		sortable: true,
	});
	$('.lobipanel-unpin').lobiPanel({
		reload: false,
		close: false,
		minimize: false,
		expand: false,
		editTitle: false,
		sortable: true,
	});
	$('.lobipanel-close').lobiPanel({
		reload: false,
		minimize: false,
		expand: false,
		unpin: false,
		editTitle: false,
		sortable: true,
	});
	$('.lobipanel-reload').lobiPanel({
		close: false,
		minimize: false,
		expand: false,
		unpin: false,
		editTitle: false,
		sortable: true,
	});
	$('.lobipanel-minimize').lobiPanel({
		close: false,
		reload: false,
		expand: false,
		unpin: false,
		editTitle: false,
		sortable: true,
	});
	$('.lobipanel-constrain').lobiPanel({
		minWidth: 300,
		minHeight: 300,
		maxWidth: 600,
		maxHeight: 480,
		reload: false,
		close: false,
		minimize: false,
		expand: false,
		editTitle: false,
		sortable: true,
	});
	$('.lobipanel-sortable').lobiPanel({
		sortable: true,
		close: false,
		reload: false,
		expand: false,
		minimize: false,
		editTitle: false,
	});
	$('.lobipanel-basic').lobiPanel({
		sortable: true,
	});
});

