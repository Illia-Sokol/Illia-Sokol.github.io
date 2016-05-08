$('.dropdown').hover(
	function(){
		$(this).children('.subMenu').slideDown(400);
	},
	function() {
		$(this).children('.subMenu').slideUp(400);
	});