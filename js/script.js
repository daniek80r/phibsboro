let $j = jQuery.noConflict();

function getNativeElement(object) {
    return object[0];
}

window.onscroll = (() => {
    if (window.scrollY >= 15) {
        $j('#header').addClass('shrink');
    } else {
        $j('#header').removeClass('shrink');
    }
});
