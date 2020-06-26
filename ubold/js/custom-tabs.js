// Custom Tabs One
$('.custom-tabs-group > div').hide();
$('.custom-tabs-group > div:first-of-type').show();
$('.custom-tabs-one a').on('click', function(e){
  e.preventDefault();
	var $this = $(this),
	tabgroup = '#'+$this.parents('.custom-tabs-one').data('tabgroup'),
	others = $this.closest('li').siblings().children('a'),
	target = $this.attr('href');
	others.removeClass('active');
	$this.addClass('active');
	$(tabgroup).children('div').hide();
	$(target).show();
})

// Custom Tabs Two
$('.custom-tabs-group > div').hide();
$('.custom-tabs-group > div:first-of-type').show();
$('.custom-tabs-two a').on('click', function(e){
  e.preventDefault();
	var $this = $(this),
	tabgroup = '#'+$this.parents('.custom-tabs-two').data('tabgroup'),
	others = $this.closest('li').siblings().children('a'),
	target = $this.attr('href');
	others.removeClass('active');
	$this.addClass('active');
	$(tabgroup).children('div').hide();
	$(target).show();
})