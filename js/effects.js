$(window).resize(function () {
    adjustHeight('.articles__item');
    makeStickyFooter();

    if ($(window).width() >= 1200){
        adjustHeight('.column_height-adjusted');
    } else if ($(window).width() < 1200){
        $('.column_height-adjusted').eq(1).css('height', 'auto');
    }
});

$(document).ready(function(e) {
    var operatingSystem = navigator.userAgent.toLowerCase(),
        isAndroid = operatingSystem.indexOf('android') > -1;

    adjustHeight('.articles__item');
    makeStickyFooter();

    if ($(window).width() >= 1200){
        adjustHeight('.column_height-adjusted');
    }

    $('.panel-heading').on('click', accordionEffects);
    $('.navbar a').on('click', scrollToAnchor);
    $('.intro__button').on('click', scrollToAnchor);

    if(isAndroid) {
        fixScrollingOnAndroid();
    }
});

function fixScrollingOnAndroid() {
    $('html').addClass('fix-Android');
}

function scrollToAnchor(event) {
    var headerHeight = $('.navbar').height(),
        anchorTarget = $(this).attr('href');
    	
    if ($(anchorTarget).offset() !== undefined) {
    	var distanceToScroll = $(anchorTarget).offset().top;

		event.preventDefault();

	    $('body').animate({
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

function makeStickyFooter() {
    var footerPosition = $('footer').offset().top,
        windowHeight = $(window).height(),
        footerHeight = $('footer').height();

    if (footerPosition < windowHeight) {
        $('footer').offset({top: windowHeight - footerHeight});
        $('.container-fluid').height(windowHeight);
    }
}