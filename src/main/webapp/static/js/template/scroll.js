$(document).ready(function scrollToElement (selector) {
    function scrollToElement(selector) {
        var animation = {scrollTop: $(selector).offset().top};
        $('html,body').animate(animation, 'slow', 'swing', function () {
//            if (typeof callback == 'function') {
//                callback();
//            }
//            callback = null;
        });
    }
});

