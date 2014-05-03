
$(document.head).append('<link rel="stylesheet" href="tabs/tabs-1.0.css"/>');

$.fn.tabbify = (function() {
	var $tabs = this.find('h3'),
		$contents = this.find('ul');
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