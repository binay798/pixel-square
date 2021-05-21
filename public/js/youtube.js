let modal = document.querySelector('.modal');
let modalMain = document.querySelector('.modal__main');
let iframe = document.querySelector('.iframe');

const openModal = (videoSrc) => {
	modal.style.visibility = 'visible';
	modal.style.opacity = 1;
	modalMain.style.display = 'block';
	modalMain.innerHTML = `
		<iframe width=100% 
		height=100% class="iframe" 
		src=${videoSrc}?controls=0&autoplay=1&enablejsapi=1&title=''&modestbranding=0&fs=0&cc_load_policy=0&iv_load_policy&autohide=0
		frameborder="0" 
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`
}
modal.addEventListener('click', (e) => {
	if(e.target.className === 'modal' ) {
		e.target.style.visibility = 'hidden';
		e.target.style.opacity = 0;
		modalMain.innerHTML = null;
	}
})