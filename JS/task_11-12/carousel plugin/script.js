$(function () {
	var leftArrow = $('.carousel-arrow-left');
	var rightArrow = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 125;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	console.log(elementsCount)
	var minimumOffset = - (elementsCount  * pixelsOffset);
	console.log(minimumOffset)
	var maximumOffset = 0;

	leftArrow.click(function () {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += 125;
			elementsList.animate({
				left: currentLeftValue + 'px'
			}, 500);
		}
	})
	rightArrow.click(function () {
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 125;
			elementsList.animate({
				left: currentLeftValue + 'px'
			}, 500);
		}
	});
});
