$(function () {
	var leftArrow = $('.carousel-arrow-left');
	var rightArrow = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');
	var currentLeftValue = 0;
// FIRST ELEMENT WILL BE HIDDEN (LOOKING TO css)
	$('.carousel-list li:first').before($('.carousel-list li:last'));

	leftArrow.click(function () {
		elementsList.animate({
			left: '0px'
		}, 500, function () {
			$('.carousel-list li:first').before($('.carousel-list li:last'));
			$('.carousel-list').css({'left': '-225px'})
		});
	})
	rightArrow.click(function () {
		currentLeftValue = parseInt($('.carousel-list').css('left')) - 200;
		console.log(currentLeftValue)
		elementsList.animate({
			left: currentLeftValue
		}, 500, function () {
			$('.carousel-list li:last').after($('.carousel-list li:first'));
			$('.carousel-list').css({'left': '-225px'})
		});
	});
});
