//DESKTOP NAVBAR ANIMATION

const navDesktop = document.getElementById('nav-desktop');
window.addEventListener('scroll', () => {
    if(pageYOffset >= 400) {
        navDesktop.style.transform = "translateY(0px)"
    } else {
        navDesktop.style.transform = "translateY(-70px)"
    }
})

//DESKTOP NAVBAR ACTIVELINK
const desktopLinkList = document.querySelectorAll('#nav-desktop--link');
const sectionHeadline = document.querySelectorAll('.section-headline');


function removeActive(item) {
    item.firstElementChild.classList.remove('active-link')
}

desktopLinkList.forEach(liItem => liItem.addEventListener('click' , () => {
    desktopLinkList.forEach(item => removeActive(item));
    liItem.firstElementChild.classList.add('active-link')
    
    if(liItem.firstElementChild.innerHTML == 'blog') {
        sectionHeadline[0].classList.add('active-link')
        sectionHeadline[1].classList.remove('active-link')
    }
    else if(liItem.firstElementChild.innerHTML == 'about/contact') {
        sectionHeadline[1].classList.add('active-link')
        sectionHeadline[0].classList.remove('active-link')
    }
    else if(liItem.firstElementChild.innerHTML == 'home') {
        sectionHeadline[1].classList.remove('active-link')
        sectionHeadline[0].classList.remove('active-link')
    }
    
}))

