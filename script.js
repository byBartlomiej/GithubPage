//Hamburger przycisk
function init() {
    $('.burger').on('click', function () {
        $('.menu, .fas').toggleClass("off");
    })
    //Uniwersalny program dla wielu elementów
    // $('nav a').on('click', function () {
    //     const goToSection = 'section.' + $(this).attr('class');
    //     $('body, html').animate({
    //         scrollTop: $(goToSection).offset().top,
    //     }, 2000)
    // })
    //Programy do poszczególnych elementów
    $('a.contact').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.contactHeader').offset().top,
        }, 2000)
    });
    $('.animation').on('click', function () {
        $('body, html').animate({
            scrollTop: $('section.animation').offset().top,
        }, 1000);
        //Automatyczne przewijanie do video
        setTimeout(autoScroll, 9500);

        function autoScroll() {
            $('body, html').animate({
                scrollTop: $('section.video').offset().top,
            }, 1000);
        }
    });
    $('button.arrow').on('click', function () {
        $('body, html').animate({
            scrollTop: $('Header').offset().top,
        }, 2000)
    });
    $('span.reg, span.hide').on('click', function () {
        $('section.popup').toggleClass('active');
    });
    //wejscie animacji na scrolla
    $(document).on('scroll', function () {
        // const $windowHeight = $(window).height();  opcjonalnie
        const $scrollValue = $(this).scrollTop();
        // elementy animacji napisu + strony
        const $txtAnim = $('section.animation')
        const $txtAnimFromTop = $txtAnim.offset().top;
        // const $txtAnimHeight = $txtAnim.outerHeight();   opcjonalnie
        // elementy contactHeader H1
        const $webDev = $('.webDev');
        const $webDevFromTop = $webDev.offset().top;
        // const $webDevHeight = $webDev.outerHeight();   opcjonalnie

        if ($scrollValue < 100) {
            $('.strona, .opisAnimacji, .webDev').removeClass('active');
        }
        if ($scrollValue > $txtAnimFromTop - 1) {
            // console.log('start animacji');
            $('div.strona, div.opisAnimacji').addClass('active');
        }

        if ($scrollValue > $webDevFromTop - 1) {
            $webDev.addClass('active');
            // console.log('start weba');
        }
    });
}
window.onload = init;
// console.log('treść załadowana')