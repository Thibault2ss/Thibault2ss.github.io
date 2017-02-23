

var didScroll;
// on scroll, let the interval function know the user has scrolled
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


$(window).scroll(function(event){
    didScroll = true;
    var $test1=$('.test1');
    var pos=$('.fond_blanc').offset().top;
    var top = $(window).scrollTop();
    if(top > pos && !$test1.hasClass('affix')){
        $test1.addClass('affix');
        console.log('added '+pos+' '+top);
    }
    if (top < pos && $test1.hasClass('affix')) {
         $test1.removeClass('affix');
        console.log('removed '+pos+' '+top);
    }

    if ($(this).scrollTop()<400) {
        if ($('header').hasClass('nav-up')) {$('header').removeClass('nav-up').addClass('nav-down')};
        $('.header_fond').css('opacity',$(this).scrollTop()/400);
        $('#logo_fond').css('opacity',1-$(this).scrollTop()/400);
    }
    // $('header').css('background-color', '#111111');
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight && st>400){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if(st + $(window).height() < $(document).height() && st>400) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;

}



