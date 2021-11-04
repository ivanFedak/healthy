const Slider = ()=>{
	let sliders = document.querySelectorAll('._swiper');
	if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-bild')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement('div');
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = '';
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-bild');
	
				if (slider.classList.contains('_swiper_scroll')) {
					let sliderScroll = document.createElement('div');
					sliderScroll.classList.add('swiper-scrollbar');
					slider.appendChild(sliderScroll);
				}
			}
			if (slider.classList.contains('_gallery')) {
				//slider.data('lightGallery').destroy(true);
			}
		}
		sliders_bild_callback();
	}
	function sliders_bild_callback(params) { }
	
	let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: true,
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
	
	
	function sliders_bild_callback(params) { }
	

	if (document.querySelector('.programs__body')) {
		new Swiper('.programs__body', {
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			speed: 800,
			loop: true,
			watchOverflow: true,
			// Arrows
			navigation: {
				nextEl: '.programs .programs__arrow_next',
				prevEl: '.programs .programs__arrow_prev',
			},

			breakpoints:{
				//when window width is >= 320px //More
				320:{
					slidesPerView: 1.1,
					spaceBetween: 15
				},

				768:{
					slidesPerView: 2,
					spaceBetween: 20
				},

				992:{
					slidesPerView: 3,
					spaceBetween: 32
				}
			}
		});
	}
}
export default Slider