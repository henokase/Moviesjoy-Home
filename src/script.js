const openBtn = document.getElementById('hum-btn');
const closeBtn = document.getElementById('back-btn');
const mobileMenu = document.getElementById('mobile-menu');
// const menuContent = document.querySelectorAll('.menu-content');
const wrapper = document.getElementById('wrapper');
const layer = document.getElementById('layer');
const dropBtns = document.querySelectorAll('.drop-btn');


function layering() {
    wrapper.classList.toggle('overflow-hidden');
    layer.classList.toggle('hidden');
}

function openMenu() {
    layering();
    mobileMenu.style.left = '0';
}

function closeMenu() {
    layering();
    mobileMenu.style.left = '-150%';
}


openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
dropBtns.forEach(dropBtn => {
    dropBtn.addEventListener('click', () => {
        dropBtn.classList.toggle('text-lightViolet');
        const list = dropBtn.nextElementSibling;
        if(!list.style. maxHeight){
            list.style.maxHeight = list.scrollHeight + 'px';
        } else {
            list.style.maxHeight = null;
        }
    });
});
