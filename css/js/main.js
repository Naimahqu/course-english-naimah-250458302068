const menu = document.querySelector('.menu');
const hamburger= document.querySelector('hamburger.menu');
const iconBars= document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click, displayMernu');
menu.addEventListener('click, displayMenu');

function displaymenu(){
    if(menu.classList.contains('.tampil')) {
        menu.classList.remove('tampil');
        iconBars.Style.display='inline';
        iconClose.style.display='none';
    }else{
        menu.classList.add('tampil');
        iconBars.Style.display='none';
        iconClose.style.display='inline';
    }
}
