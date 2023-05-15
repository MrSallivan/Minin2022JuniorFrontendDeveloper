//! Делегирование событий
const mainNavigation = document.querySelector('.main-navigation')
const allNavButton = document.querySelectorAll('.main-navigation__button-item')

mainNavigation.addEventListener('click', (e) => {
	console.log('target', e.target);

	const isNavButton = e.target.closest('.main-navigation__button-item')

	console.log(isNavButton);

	if(isNavButton){
		allNavButton.forEach(button => {
			button.classList.remove('clicked')
		})
		const { target } = e
		target.classList.add('clicked')
	}
})