$(document).ready(function() {
	$('.panel-heading').on('click', function() {
		$('.panel-heading').not(this).removeClass('panel_expanded');
		$('.panel-body').removeClass('animate_in');
		$(this).toggleClass('panel_expanded');
		$(this).next().find('.panel-body').toggleClass('animate_in');
	});
});