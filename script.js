let lastScrollTop = 0;
// כאן אנחנו מוודאים שהקוד ירוץ רק אחרי שהדף נטען לגמרי
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header'); 

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // גלילה למטה
            header.classList.add('header-hidden');
        } else {
            // גלילה למעלה
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
});
