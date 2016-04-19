$(function () {
	$('.ui-tooltip div').append('<p></p>');

	$('input').hover(function() {
		$(this).siblings('p').animate({opacity: "show", top: "-20", left: 260}, "slow");
		var hoverText = $(this).attr('title');
		$(this).siblings('p').text(hoverText);
	}, function() {
		$(this).siblings('p').animate({opacity: "hide", top: "-20", left: 260}, "fast");
	});

// click button
	$('#btn-help').click( function(e) {
		e.preventDefault();
		hover('firstname');
		hover('lastname');
		hover('address');
	});
// function input hover when button is click
	function hover(id) {
		var hoverText	= $('#' + id + '').attr('title');
		$('#' + id + '').siblings('p').text(hoverText).animate({opacity: "show", top: "-20", left: 260}, "slow");
	}
});