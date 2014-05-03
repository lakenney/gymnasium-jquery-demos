
$(document.head).append('<link rel="stylesheet" href="tabs-1.0.css"/>');

$(document).ready(function(){
	var $tabs = $('#categories > h3'),
		$contents = $('#categories > ul');
	/*$($tabs[0]).click(function() {
		$tabs.removeClass('active');
		$($tabs[0]).addClass('active');
		$contents.removeClass('active');
		$($contents[0]).addClass('active');
	});
	$($tabs[1]).click(function() {
		$tabs.removeClass('active');
		$($tabs[1]).addClass('active');
		$contents.removeClass('active');
		$($contents[1]).addClass('active');
	});
	$($tabs[2]).click(function() {
		$tabs.removeClass('active');
		$($tabs[2]).addClass('active');
		$contents.removeClass('active');
		$($contents[2]).addClass('active');
	});*/

	$tabs.each(function(i, tab) {
		var $tab = $(tab),
			$content = $($contents[i]);
		// Closures are magic!
		$tab.click(function(){
			$tabs.removeClass('active');
			$tab.addClass('active');
			$contents.removeClass('active');
			$content.addClass('active');
		})
	});

	// Set initial state
	$tabs.first().addClass('active');
	$tabs.last().addClass('last');
	$contents.first().addClass('active');
	$contents.first().addClass('active');

});