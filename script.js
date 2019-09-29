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
    //Animacja migającego kursora
    const spnCursor = document.querySelector('span.cursor');
    const cursorAnimation = () => {
        spnCursor.classList.toggle('active');
    };
    setInterval(cursorAnimation, 400);
    //warunek do wyświetlenia animacji pisania na maszynie
    let doAddLetter = true;

    //wejscie animacji na scrolla
    $(document).on('scroll', function () {

        const $scrollValue = $(this).scrollTop();
        // elementy animacji napisu + strony
        const $txtAnim = $('section.animation');
        const $txtAnimFromTop = $txtAnim.offset().top;
        // elementy contactHeader H1
        const $webDev = $('.webDev');
        const $webDevFromTop = $webDev.offset().top;
        //Animacja pisania na maszynie
        const divText = document.querySelector('span.text');
        const text = 'Stworzę Twoją wymarzoną stronę!';
        let indexText = 0;

        if ($scrollValue < 100) {
            $('.strona, .webDev').removeClass('active');
        }
        if ($scrollValue > $txtAnimFromTop - 10) {
            // console.log('start animacji');
            $('div.strona').addClass('active');
            //Animacja pisania na maszynie i kursora
            if (doAddLetter) {
                doAddLetter = false;
                const addLetter = () => {
                    divText.textContent += text[indexText];
                    indexText++;
                    if (indexText === text.length) clearInterval(indexTyping);
                };
                const indexTyping = setInterval(addLetter, 150);
            };
        }

        if ($scrollValue > $webDevFromTop - 10) {
            $webDev.addClass('active');
            // console.log('start weba');
        }
    });
}
window.onload = init;
// console.log('treść załadowana')