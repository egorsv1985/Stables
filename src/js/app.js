



$(document).ready(function () {

    $('.gallery__slider').slick({
        dots: true
    });


    $('.gallery__slider-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


	$(function() {
		$('.event-slider').slick ({
		 dots: true,
		 arrows: false,
		 infinite: true,
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 responsive: [
		  {
		  breakpoint: 1900,
		  settings: "unslick"
		  },
		  {
			breakpoint: 768,
			setting:{
			  speed: 300,
			  slidesToShow: 1,
			  slidesToScroll: 1,
		  }
		  }
		  ]
		});
	  });
	  

}); 


const formBtn = document.querySelectorAll('.form__place');

formBtn.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		formBtn.forEach((item) => {
			item.classList.remove('active')
		})
		
		item.classList.add('active')
	})
})
document.querySelector('.form__place').click()





