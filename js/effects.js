$(window).resize(function () {
    adjustHeight('.articles__item');
});

$(document).ready(function(e) {
    adjustHeight('.articles__item');

    $('.panel-heading').on('click', accordionEffects);
    $('.navbar a').on('click', scrollToAnchor);
    $('.intro__button').on('click', scrollToAnchor);
});

function scrollToAnchor(event) {
	var headerHeight = $('navbar').height(),
		anchorTarget = $(this).attr('href');
    	
    if ($(anchorTarget).offset() !== undefined) {
    	var distanceToScroll = $(anchorTarget).offset().top - headerHeight;

		event.preventDefault();

	    $('html, body').animate({
	        scrollTop: distanceToScroll
	    }, 900);
    }
}

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