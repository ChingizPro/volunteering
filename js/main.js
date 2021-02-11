(function () {
    function $(el) {
        return document.querySelector(el);
    }

    var elToTopBtn = $('.toTop');

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function forToTopButton() {
        if (window.scrollY > 400) {
            elToTopBtn.classList.add('toTop--show')
        }
        else {
            elToTopBtn.classList.remove('toTop--show')
        }
    }

    document.addEventListener('scroll', debounce(forToTopButton, 20));
})();