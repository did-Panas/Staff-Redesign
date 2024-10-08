/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, EffectFade } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	// ===== SLIDER-PORTF ================================================================
	if (document.querySelector('.slider-portf')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-portf', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			// slidesPerView: 2.65,
			spaceBetween: 15,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-portf__pagination',
				type: "progressbar",
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-portf__button-prev',
				nextEl: '.slider-portf__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				431: {
					slidesPerView: 1.4,
					spaceBetween: 15,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2.65,
					spaceBetween: 40.5,
				},
			},

			// Події
			on: {
				slideChangeTransitionEnd: function () {
					getSlideLink();
				},
			}
		});
	}
	// ============================================================= >>>SLIDER-PORTF =====

	// ===== SLIDER-BLOG-TABS ================================================================
	if (document.querySelector('.blog-tabs__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.blog-tabs__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 26,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			// simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"

			navigation: {
				prevEl: '.blog-tabs__btn-prev',
				nextEl: '.blog-tabs__btn-next',
			},

			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	// ============================================================= >>>SLIDER-BLOG-TABS =====

	// ===== SLIDER-CAREERS ================================================================
	if (document.querySelector('.careers__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.careers__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			// autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			// preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-careers__pagination',
				type: "progressbar",
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-careers__button-prev',
				nextEl: '.slider-careers__button-next',
			},

			// Брейкпоінти

			breakpoints: {
				490: {
					slidesPerView: 1.5,
				},
				650: {
					slidesPerView: 2,
				},
				810: {
					slidesPerView: 2.5,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1270: {
					slidesPerView: 3.15,
					spaceBetween: 30,
				},
			},


			// Події
			on: {

			}
		});
	}
	// ============================================================= >>>SLIDER-CAREERS =====

	// ===== SLIDER-WHY ====================================================================

	if (document.querySelector('.slider-why__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-why__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 21,
			direction: "vertical",
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-why__pagination',
				type: "progressbar",
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-why__button-prev',
				nextEl: '.slider-why__button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}

	// ================================================================= >>>SLIDER-WHY =====

	// ===== SLIDER-HOW ====================================================================

	if (document.querySelector('.slider-how__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-how__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			// direction: "vertical",
			//autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-how__pagination',
				type: "progressbar",
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-how__button-prev',
				nextEl: '.slider-how__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				679: {
					slidesPerView: 1.5,
				},
				869: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1100: {
					slidesPerView: 2.3,
					spaceBetween: 22,
				},
			},

			// Події
			on: {

			}
		});
	}

	// ================================================================= >>>SLIDER-HOW =====

	// ===== SLIDER-SERVICES-MSERV =========================================================

	if (document.querySelector('.slider-mserv__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-mserv__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Thumbs, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: true,
			speed: 300,


			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			thumbs: {
				swiper: {
					el: '.slider-mserv-thumbs__slider',
					slidesPerView: 'auto',
					spaceBetween: 20,
					direction: "vertical",
				}
			},

			// Пагінація

			pagination: {
				el: '.slider-mserv__pagination',
				type: "progressbar",
				progressbarOpposite: 'true',
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-mserv__button-prev',
				nextEl: '.slider-mserv__button-next',
			},

			/*
			// Брейкпоінти
			breakpoints: {
				320: {
					
				},
				650: {
					
				},
			},
			*/

			// Події
			on: {

			}
		});
	}

	// ====================================================== >>>SLIDER-SERVICES-MSERV =====
}

// Button's link changing after active slide changing
function getSlideLink() {
	const btn = document.querySelector('[data-slide-btn]');
	const slidesLinks = document.querySelectorAll('.slider-portf__slide-link');

	for (const link of slidesLinks) {

		if (link.closest('.slider-portf__slide.swiper-slide-active')) {
			btn.href = link.href;
		}

	}


}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});