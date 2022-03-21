



$(document).ready(function () {

    $('.gallery__slider').slick({
        // infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // centerMode: true,
        //               centerPadding: '0px',
        dots: true
    });


    $('.gallery__slider-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		// image: {
		// 	verticalFit: true,
		// 	titleSrc: function(item) {
		// 		return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		// 	}
		// },
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
		  breakpoint: 1600,
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



const ctx = document.getElementById('graph_activation');
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Jun', 'Dec', 'Nov', 'Oct', 'Sep', 'Aug'],
		datasets: [
			/* Параметры первой таблицы для IOS*/
			{
				label: '',
				data: [11, 11, 11, 11, 11, 11],
				backgroundColor: [
					'#0073FF',
				],
				borderColor: [
					'#0073FF',
				],
				borderWidth: 1
			},
			/* Параметры первой таблицы для Android*/
			{
				label: '',
				data: [7, 7, 7, 7, 7, 7],
				backgroundColor: [
					'#009E8B',
				],
				borderColor: [
					'#009E8B',
				],
				borderWidth: 1,

			},

		],

	},
});


let ctx2 = document.getElementById('graph_retention');
let chart = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: ['1m', '2m', '4m', '6m', '8m', '10m', '12m'],
		datasets: [{ // График зелёного цвета
				label: 'График 1',
				backgroundColor: 'transparent',
				borderColor: 'green',
				data: [70, 60, 60, 50, 40, 30, 20],
			},
			{ // График синего цвета
				label: 'График 2',
				// backgroundColor: 'transparent',
				borderColor: 'blue',
				data: [90, 80, 80, 70, 60, 50, 40]
			}
		],
	},
});



