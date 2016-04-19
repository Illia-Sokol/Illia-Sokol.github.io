$(function () {
	myfun('one')

	$('.header .one').click(function(event) {
		myfun('one');
	});
	$('.header .two').click(function(event) {
		myfun('two');
	});
	$('.header .three').click(function(event) {
		myfun('three');
	});
	function myfun(pos) {
		$('.' + pos + '').parent().siblings('.' + pos + '').show();
		$('.horAccordion p:not(.'+ pos + ')').hide(); 
		$('h3.' + pos + '').addClass('changeColor');
		$('.horAccordion h3:not(.'+ pos + ')').removeClass('changeColor'); 
	}
})