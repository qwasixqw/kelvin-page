const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__button');
const navBtnImg = document.querySelector('.nav__img');

navBtn.addEventListener('click', menuHandler);

function menuHandler() {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = '../assets/img/icons/nav-close.svg';
		document.body.style.overflow = 'hidden';
	} else {
		navBtnImg.src = '../assets/img/icons/nav-open.svg';
		document.body.style.overflow = '';
	}
}

AOS.init();