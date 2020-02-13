document.addEventListener('DOMContentLoaded', () => {
    const scroller = new Scroller('scroller');
    document.addEventListener('wheel', (e) => scroller.scrollPage(e));

    document.addEventListener('swipeUp', () => scroller.scrollDirection(1));
    document.addEventListener('swipeDown', () => scroller.scrollDirection(-1));

    document.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
            case 40:
                return scroller.scrollDirection(1);
            case 38:
                return scroller.scrollDirection(-1);
            default:
                return;
        }

    })
});