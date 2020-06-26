/*
	Template Name: Ubold Admin Template
	File: Common js

	Scroll to top, Sidebar menu toggle,
	Sidebar menu, Tooltip & Popover, Task list
	Page loading, News ticker, Button Loading,
	Material Button, Setting main container min-height,
	Chat box height - Chat App Page, 
	Mail box height - Mail App Page, 
	Settings select/cancel - Data Widgets Page, 
	Done toggle button - Todo page html,
	Mark all as done - Todo page html
*/

var $border_color = "#F5F8FA";
var $grid_color = "#e1e8ed";
var $default_black = "#666";
var $red = "#E24B46";
var $grey = "#999999";
var $yellow = "#FAD150";
var $pink = "#666";
var $blue = "#d12a16";
var $green = "#6EBB41";

// ScrollUp full options
$(function () {
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 180, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 300, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationSpeed: 200, // Animation in speed (ms)
		scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
		//scrollTarget: false, // Set a custom target element for scrolling to the top
		scrollText: '<i class="icon-chevron-up"></i>', // Text for element, can contain HTML // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required.
		scrollImg: false, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});
});


// Sidebar menu toggle
'use strict';
var tid = setInterval( function () {
	if ( document.readyState !== 'complete' ) return;
	clearInterval( tid );
	var querySelector = document.querySelector.bind(document);
	var nav = document.querySelector('.vertical-nav');
	// Toggle menu click
	querySelector('.mobile-menu').onclick = function () {
		nav.classList.toggle('vertical-nav-opened');
	};
}, 1000 );


// Sidebar menu
$(function () {
	$('.vertical-nav').metisMenu();

	// Vertical nav small disabling click function
	// $('.vertical-nav-sm ul li').each(function () {
	// 	this.style.pointerEvents = 'none'; 
	// });

});


// Tooltip & Popover
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();


// Task list
$('.task-list').on('click', 'li.list', function() {
	$(this).toggleClass('completed');
});


// Page loading
setTimeout(function() {
	$('body').addClass('loaded');
}, 3000);


// News ticker
var nt_title = $('#live-stats').newsTicker({
	row_height: 64,
	max_rows: 1,
	duration: 5000,
	pauseOnHover: 0
});
var nt_title = $('#header-news').newsTicker({
	row_height: 30,
	max_rows: 1,
	duration: 3000,
	pauseOnHover: 1
});
var nt_example1 = $('#news-ticker-multiline').newsTicker({
	row_height: 90,
	max_rows: 3,
	duration: 4000,
	prevButton: $('#news-ticker-multiline-up'),
	nextButton: $('#news-ticker-multiline-down')
});


// Button Loading
$('.btn-loading').on('click', function() {
	var $this = $(this);
	$this.button('loading');
	setTimeout(function() {
		$this.button('reset');
	}, 3000);
});


// Material Button
var element, circle, d, x, y;
$(".btn").on('click', function(e) {
	element = $(this);
	if(element.find(".circles").length == 0)
	element.prepend("<span class='circles'></span>");
	circle = element.find(".circles");
	circle.removeClass("animate");
	if(!circle.height() && !circle.width())
	{
		d = Math.max(element.outerWidth(), element.outerHeight());
		circle.css({height: d, width: d});
	}
	x = e.pageX - element.offset().left - circle.width()/2;
	y = e.pageY - element.offset().top - circle.height()/2;
	
	circle.css({top: y+'px', left: x+'px'}).addClass("animate");
});


// Main Container Height

// $(function() {
// 	$(window).on("resize", function() {
// 		var h = $(window).height() - $('header').height() - $('.top-bar').height() - $('.footer').height() - 60;
// 		$('.main-container').height(h);
// 	}).trigger("resize");
// });


// $(document).on("resize", function() {
// 	function setHeight() {
// 		windowHeight = $(document).innerHeight() - $("header").height() - $(".top-bar").height() - $(".footer").height() - 50;
// 		$('.main-container').css('height', windowHeight);
// 	};
// 	setHeight();
// 	$(window).resize(function() {
// 		setHeight();
// 	});
// });


// Chat box height - Chat App Page
$(window).resize(function() {
	$('.users-container').height($(window).height() - $("header").height() - $(".top-bar").height() - $(".footer").height() - $(".search-box").height() - 150);
	$('.chat-container').height($(window).height() - $("header").height() - $(".top-bar").height() - $(".footer").height() - $(".selected-user").height() - $(".chat-form").height() - 150);
});
$(window).trigger('resize');


// Mail box height - Mail App Page
$(window).resize(function() {
	$('.mailbox-left-scroll').height($(window).height() - 300);
	$('.inbox-container').height($(window).height() - 340);
});
$(window).trigger('resize');


// Settings select/cancel Data Widgets Page
$('.select').on('click', function(e) {
	$(this).toggleClass("selected");
	e.preventDefault();
});
$('.cancel').on('click', function(e) {
	$(this).toggleClass("cancelled");
	e.preventDefault();
});


// Done toggle button - Todo page html
$('.done').on('click', function(e) {
	$(this).toggleClass("btn-success btn-default");
	e.preventDefault();
});


// Mark all as done - Todo page html
$('#mark-all-done').on('click', function(e) {
	$('.done').toggleClass("btn-success btn-default");
	$('#mark-all-done').toggleClass("btn-danger");
	e.preventDefault();
});
