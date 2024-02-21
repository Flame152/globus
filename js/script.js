function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.programs-children__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.programs-children__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			slidesPerView: 1,
			spaceBetween: 24,
			autoHeight: true,
			
			scrollbar: {
				el: '.scrollbar-wrapper__swiper-scrollbar',
				draggable: true,
			 },
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.programs-children__button-prev',
				nextEl: '.programs-children__button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
		});
	}
}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});