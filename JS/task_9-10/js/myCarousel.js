		$(function() {
			$('.jcarousel').jcarousel({
				wrap: 'circular'
			});

			$('.jcarousel-prev').jcarouselControl({
				target: '-=1'
			});

			$('.jcarousel-next').jcarouselControl({
				target: '+=1'
			});

			$('.jcarousel').jcarouselAutoscroll({
				interval: 3000,
				target: '+=1',
				autostart: true
			});

			$('.jcarousel-pagination').jcarouselPagination({
				item: function(page) {
					return '<a href="#' + page + '" class="item">' + 
					'<div class=" myitem' + page + '"> </div>' + '</a>';
				}
			});

			$('.jcarousel-pagination')
			.on('jcarouselpagination:active', 'a', function() {
				$(this).addClass('active');
			})
			.on('jcarouselpagination:inactive', 'a', function() {
				$(this).removeClass('active');
			});

			$('.jcarousel').jcarousel({
				animation: {
					duration: 500,
					easing: 'linear',
					complete: function() {
					}
				}
			});

			//  arrow
			$('.arrow').hover(function(){
				$(this).parent().css("background-color", "rgba(0, 0, 0, .5)");
			}, function(){
				$(this).parent().css("background-color", "transparent");
			});
		});