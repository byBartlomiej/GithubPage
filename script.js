//Hamburger przycisk
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
    setTimeout(autoScroll, 9000);

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
    const $windowHeight = $(window).height();
    const $scrollValue = $(this).scrollTop();
    // elementy animacji napisu + strony
    $txtAnim = $('section.animation')
    const $txtAnimFromTop = $txtAnim.offset().top;
    const $txtAnimHeight = $txtAnim.outerHeight();
    // elementy contactHeader H1
    const $webDev = $('.webDev');
    const $webDevFromTop = $webDev.offset().top;
    const $webDevHeight = $webDev.outerHeight();

    if ($scrollValue < 100) {
        $('.strona, .opisAnimacji, .webDev').removeClass('active');
    }
    if ($scrollValue > $txtAnimFromTop + $txtAnimHeight / 2 - $windowHeight) {
        // console.log('start animacji');
        $('.strona, .opisAnimacji').addClass('active');
    }

    if ($scrollValue > $webDevFromTop + $webDevHeight * 2 - $windowHeight) {
        $webDev.addClass('active');
    }
});