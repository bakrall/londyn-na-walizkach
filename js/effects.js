$(document).ready(function() {
	$('.panel').on('click', function() {
		$('.panel-heading').removeClass('panel_selected');
		$(this).find('.panel-heading').toggleClass('panel_selected');
	});
});