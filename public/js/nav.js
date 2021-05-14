let header = document.querySelector('.header')

document.addEventListener('scroll', function() {
	if(window.scrollY > 20) {
		header.style.background = 'black';

	} else {
		header.style.background = 'transparent';

	}
})