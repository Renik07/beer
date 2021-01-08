window.addEventListener('DOMContentLoaded', function() {
	console.log('Hello');
	const slider = document.querySelector('.slider__inner'),
				sliderWrapper = document.querySelector('.slider__wrapper'),
				slides = document.querySelectorAll('.slider__item'),
				btnPrev = document.querySelector('.arrow__left'),
				btnNext = document.querySelector('.arrow__right'),
				width = window.getComputedStyle(slider).width;
	let offset = 0;

	// устанавливаем ширину обертки по кол-ву слайдов
	sliderWrapper.style.width = slides.length * 100 + '%';
	
	btnNext.addEventListener('click', () => {
		if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.replace(/\D/g, '');
		}
		sliderWrapper.style.transform = `translateX(-${offset}px)`;
	});

	btnPrev.addEventListener('click', () => {
		if (offset == 0) {
			offset = +width.replace(/\D/g, '') * (slides.length - 1);
		} else {
			offset -= +width.replace(/\D/g, '');
		}
		sliderWrapper.style.transform = `translateX(-${offset}px)`;
	});
	console.log(width);
});