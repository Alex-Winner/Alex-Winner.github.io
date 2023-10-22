// Navigation bar
const header = document.querySelector('header');
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')


function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navlist a[href*=' + sectionId + ']').classList.add('active');
        } else {

            document.querySelector('.navlist a[href*=' + sectionId + ']').classList.remove('active');
        };

    });
};

window.addEventListener('scroll', scrollActive)


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


// Skills 
const skills = document.querySelectorAll('.skills__content');
const skillArrows = document.querySelectorAll('.skills__arrow');

skills.forEach(skill => {
    const skillHeader = skill.querySelector('.skills__header');
    const arrow = skillHeader.querySelector('.skills__arrow');

    skillHeader.addEventListener('click', () => {
        const menuIsOpen = skill.classList.contains('skills__open')
        closeMenu(skills, skillArrows);
        if (!menuIsOpen) {
            skill.classList.toggle('skills__open');
            skill.classList.toggle('skills__close');
            arrow.classList.toggle('bx-chevron-down');
            arrow.classList.toggle('bx-chevron-up');
        }
    });

});


function closeMenu(menus, arrows) {
    menus.forEach(skill => {
        skill.classList.remove('skills__open');
        skill.classList.add('skills__close');
    });

    arrows.forEach(skillArrow => {
        skillArrow.classList.remove('bx-chevron-up');
        skillArrow.classList.add('bx-chevron-down');
    })
};


function scrollTop() {
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

