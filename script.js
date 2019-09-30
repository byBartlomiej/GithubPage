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
    //Animacja pisania na maszynie i kursora
    const divText = document.querySelector('span.text');
    const txt = ['Stworzę Twoją wymarzoną stronę!', 'Opublikuję ulubiony film!', 'I o wiele więcej =;)']
    let indexLetter = 0;
    let indexText = 0;
    let doAnimation = true;

    const addLetter = () => {
        divText.textContent += txt[indexText][indexLetter];
        indexLetter++;
        if (indexLetter === txt[indexText].length) {
            indexText++;
            if (indexText === txt.length) return;
            return setTimeout(() => {
                indexLetter = 0;
                divText.textContent = '';
                addLetter();
            }, 6000)
        }
        setTimeout(addLetter, 150)
    };

    //wejscie animacji na scrolla
    $(document).on('scroll', function () {

        const $scrollValue = $(this).scrollTop();
        // elementy animacji napisu + strony
        const $txtAnim = $('section.animation');
        const $txtAnimFromTop = $txtAnim.offset().top;
        // elementy contactHeader H1
        const $webDev = $('.webDev');
        const $webDevFromTop = $webDev.offset().top;

        if ($scrollValue < 100) {
            $('.strona, .webDev').removeClass('active');
        }
        if ($scrollValue > $txtAnimFromTop - 10) {
            // console.log('start animacji');
            $('div.strona').addClass('active');
            $('div.tv').addClass('active');
            //Implementacja pisania na maszynie i kursora
            if (doAnimation) {
                console.log('działa');
                addLetter();
                doAnimation = false;
            }
        }

        if ($scrollValue > $webDevFromTop - 10) {
            $webDev.addClass('active');
            // console.log('start weba');
        }
    });
}
window.onload = init;
// console.log('treść załadowana')