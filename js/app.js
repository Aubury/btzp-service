//------------------------------------------------------------------------
//                   WIDTH AND HEIGHT
//------------------------------------------------------------------------

let width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight;
    section_height = document.querySelector('section').clientHeight;

document.documentElement.style.setProperty('--screen_width', `${width}px`);
document.documentElement.style.setProperty('--screen_height', `${height}px`);
document.documentElement.style.setProperty('--section_height', `${section_height}px`);

// слушаем событие resize
window.addEventListener('resize', () => {

    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    section_height = document.querySelector('section').clientHeight;
    document.documentElement.style.setProperty('--screen_width', `${width}px`);
    document.documentElement.style.setProperty('--screen_height', `${height}px`);
    document.documentElement.style.setProperty('--section_height', `${section_height}px`);
});
//------------------------------------------------------------------------
//                       MENU
//------------------------------------------------------------------------
const icon_menu = document.querySelector('#icon_menu'),
    menu =  document.querySelector('.hamburger-menu'),
    red__box = document.querySelector('#red__box'),
    menu__box = document.querySelector('#menu__box'),
    close_btn = document.querySelector('#close_btn');
let links = menu__box.querySelectorAll('.menu-item');

icon_menu.addEventListener('click', ()=>{
    menu.style.transitionDelay = '.01s';
    menu__box.style.transitionDelay = '.40s';
    red__box.style.transitionDelay = '.20s';
    menu.classList.add('left_null');
    red__box.classList.add('left_null');
    menu__box.classList.add('left_null');
})
close_btn.addEventListener('click', close_menu)

links.forEach(el =>{
    el.addEventListener('click', close_menu);
})
function close_menu() {
    menu__box.style.transitionDelay = '.20s';
    red__box.style.transitionDelay = '.40s';
    menu.style.transitionDelay = '.80s';
    menu.classList.remove('left_null');
    red__box.classList.remove('left_null');
    menu__box.classList.remove('left_null');
}

