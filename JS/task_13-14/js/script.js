$(function () {

	var str = {
		data: {
			'question_1': 'Вопрос №1. Сколько будет 2 + 2:',
			'asks_1' : {
				'ask_1_1' : 'ответ 2',
				'ask_1_2' : 'ответ 4',
				'ask_1_3' : 'ответ 10'
			},
			'question_2': 'Вопрос №2. Сколько будет 5 * 5:',
			'asks_2' : {
				'ask_2_1' : 'ответ 25',
				'ask_2_2' : 'ответ 20',
				'ask_2_3' : 'ответ 15'
			},
			'question_3': 'Вопрос №3. Сколько будет 12 * 12:',
			'asks_3' : {
				'ask_3_1' : 'ответ 122',
				'ask_3_2' : 'ответ 146',
				'ask_3_3' : 'ответ 144'
			},
		}
	}
	// записываем в localStorage объект предварительно преобразовав его в формат JSON
	localStorage.key = JSON.stringify(str);
	// преобразовываем из localstorage JSON строку в объект
	var test = JSON.parse(localStorage.key);
 	// далее работаем с шаблонизатором
	var template = $('#myTest').html();

	var content = tmpl(template, test);

	$('.pasteJS').prepend(content)
})