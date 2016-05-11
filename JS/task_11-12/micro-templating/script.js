$(function() {
	var template = $('#aboutMe').html();

	var articles = {
		data: [
		{
			title: 'Соколовский Илья Владимирович',
			img: 'img/IlliaSokolovskyi.png',
			text: 'Photo IlliaSokolovskyi',
			student: 'Окончил ДонНТУ(ДПИ)',
			desire: 'Хочу учить фронтенд, потому что:'
		},
		{
			whyStudy: 'Очень интересно'
		},
		{
			whyStudy: 'Всегда есть что учить'
		},
		{
			whyStudy: 'Возможность работать с любого места'
		},
		[
		"<p class='myPhone'>Мой контактный телефон</p>",
		"<p class=\"phoneNumber\">+380507571731</p>",
		'<p class=\"socialNetwork\">Мой профиль в facebook (профиля <a href=\"http://vk.com\">vk.com</a> нет)<br>',
		'<a href=\"https://www.facebook.com/Illia.Sokolovskyi\" class=\"socialLink\">facebook.com</a></p>'
		],
		{
			feedback: 'Мой фидбек:',
			myCooments: 'Терпения всем, все получится!'
		}
		]
	};
	var content = tmpl(template, articles)

	$('body').append(content);

})