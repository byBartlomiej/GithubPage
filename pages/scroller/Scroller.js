class Scroller {
    constructor(rootSelector) {
        const page = document.getElementById(rootSelector);
        this.sections = document.querySelectorAll("section");
        this.scrollerNavigation = document.querySelector(".navigation__list");
        // this.sectionIndex = 0; potrzebne przy braku "bajeru"
        this.isThrottled = false;

        //poniżej "bajer" ,który przy odświeżaniu strony sprawdza, na której sekcji sie znajdujesz
        //ps bez niego nie ma dużej różnicy ;)
        const sectionsArr = [...this.sections];
        const sectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
        this.sectionIndex = sectionIndex < 0 ? 0 : sectionIndex;
        this.drawNavigation();
    }
    //do "bajeru"
    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = Math.floor(rect.bottom);
        const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
        return isVisible;
    }
    //UWAGA koniec "bajeru" ;)

    addActiveToNavigation() {
        const itemList = document.querySelectorAll('.navigation__item');
        itemList.forEach((item, index) => {
            if (index === this.sectionIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }

    scrollToSection() {
        this.addActiveToNavigation();
        this.sections[this.sectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    scrollDirection(direction) {
        if (direction === 1 && this.sectionIndex === this.sections.length - 1) return;
        else if (direction === -1 && this.sectionIndex === 0) return;
        this.sectionIndex += direction;
        this.scrollToSection();
    }

    scrollPage(e) {
        if (this.isThrottled) return;
        this.isThrottled = true;
        setTimeout(() => {
            this.isThrottled = false;
        }, 350);
        const direction = e.deltaY > 0 ? 1 : -1;
        this.scrollDirection(direction);
    }

    drawNavigation() {
        const sectionsArr = [...this.sections];
        sectionsArr.map((item, index) => {
            item = document.createElement('li');
            item.classList.add('navigation__item');
            item.addEventListener('click', () => {
                this.sectionIndex = index;
                this.scrollToSection();
            })
            this.scrollerNavigation.appendChild(item);
            this.addActiveToNavigation();
        })
    }
}