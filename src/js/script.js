document.addEventListener('DOMContentLoaded', () => {
		const tabs = document.querySelector('.tabs');
		const tabsBtn = document.querySelectorAll('.tabs__btn');
		const tabsContent = document.querySelectorAll('.tabs__content');
	
		if (tabs) {
			tabs.addEventListener('click', (e) => {
				if (e.target.classList.contains('tabs__btn')) {
					const tabsPath = e.target.dataset.tabsPath;
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn_active')});
					document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn_active');
					tabsHandler(tabsPath);
				}
			});
		}
	
		const tabsHandler = (path) => {
			tabsContent.forEach(el => {el.classList.remove('tabs__content_active')});
			document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content_active');
		};
	});

		//плавный скролл
$( document ).ready(function() {
		$('a[href^="#"').on('click', function() {

			let href = $(this).attr('href');
	
			$('html, body').animate({
					scrollTop: $(href).offset().top
			});
			return false;
	});

});

$(window).scroll(function() {
	if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});




	

