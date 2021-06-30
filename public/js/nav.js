let header = document.querySelector('.header')

let home = document.querySelector('#home');
let services = document.querySelector('#services');
let portfolios = document.querySelector('#portfolios');
let contact = document.querySelector('#contact');

let goTop = document.querySelector('.goTop')



function goToTop() {
	window.scroll(0, 0);
}
document.addEventListener('scroll', function() {
	if(window.scrollY > 500) {
		goTop.style.opacity = 1;
		goTop.style.visibility = 'visible';
	} else {
		goTop.style.opacity = 0;
		goTop.style.visibility = 'hidden';
	}
})

// fade in and fade out nav bar
document.addEventListener('scroll', function() {
	if(window.scrollY > 20) {
		header.style.background = 'black';

	} else {
		header.style.background = 'transparent';

	}
})



// change active status of the nav items
switch(window.location.pathname) {
	case '/':
		home.className = `nav__link active`;
		break;
	case '/our-services.html':
		services.className = `nav__link active`;
		break;
	case '/our-portfolios.html':
		portfolios.className = `nav__link active`;
		break;
	case '/contact-us.html':
		contact.className = `nav__link active`;
		break;
	default:
		home.className = 'nav__link active'
}