$(window).resize(function () {
    adjustHeight('.articles__item');
});

$(document).ready(function(e) {
    adjustHeight('.articles__item');

    $('.panel-heading').on('click', accordionEffects);
});

function adjustHeight(elem){
    var maxHeight = 0;
    $(elem).css('height','auto');
    $(elem).each(function(){
       if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    $(elem).height(maxHeight);
}

function accordionEffects() {
	$('.panel-heading').not(this).removeClass('panel_expanded');
	$('.panel-body').removeClass('animate_in');
	$(this).toggleClass('panel_expanded');
	$(this).next().find('.panel-body').toggleClass('animate_in');
}