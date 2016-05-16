$(function () {
	function mainChecked () {
		var i, 
				some = '',
				allAnswers = ['Тест не пройден!', 'Oтвет на вопрос №1 неправильный', 'Oтвет на вопрос №2 неправильный', 'Oтвет на вопрос №3 неправильный']
				rightAnswers = ['ответ 4', 'ответ 25', 'ответ 144'];
		// циклы обхода выбранных чекбоксов
		for (var j = 1; j < 4; j += 1) {
			for(i = 1; i < 4; i += 1) {
				// проверка на нажат ли чекбокс
				if ( $('#quest_' + j + '_' + i).is( ":checked" ) ) {
					// проверка на соответсвие нажатому чекбоку и правильному значению
					if ( $('#quest_' + j + '_' + i).attr('value') == rightAnswers[j-1] ) {
						some = 'Oтвет на вопрос №' + j + ' правильный';
						allAnswers.splice(j, 1, some);
					} else {
						// выходим из цикла если несоответсвие
						break;
				};
			}	
		}
		if (i !== 4) {
			some = 'Oтвет на вопрос №' + j + 'неправильный'
			allAnswers.splice(j, 1, some);
		}
	}
	if (allAnswers[1] == 'Oтвет на вопрос №1 правильный' && 
			allAnswers[2] == 'Oтвет на вопрос №2 правильный' &&
			allAnswers[3] == 'Oтвет на вопрос №3 правильный') {
				allAnswers.splice(0, 1, 'Тест пройден!');
	}
	// сбрасываю чекбоксы
		$('[type=checkbox]').attr('checked', false)
		popUp(allAnswers); 
	}
// вызов функции проверки
	$('#myBtn').on('click', mainChecked)
// функция формирования сообщения а также будущего цвета фона модального окна
	function popUp(message) {
			var bg = 0,
					finalMessage = $('<h1 class="finalAnswer"> ' + message[0] + '</h1><ul><li>' + message[1] + '</li><li>' + message[2] + 
				'</li><li>' + message[3] + '</li></ul>');
			if (message[0] === 'Тест пройден!') {
				bg = 1;
			}
			modal(finalMessage, bg);
	}
// вывод модального окна
	function modal(message, bg) {
		$('#modal_content').html('')
		if( bg === 1) {
			$('#modal').css('background', 'rgba(0, 204, 0, .5)');
		} else {
			$('#modal').css('background', 'rgba(255, 32, 34, .5)');
		}
		$('#modal_content').append(message);
		$('#modal').show();
		$('#modal_content').show();
		$('#modal').one('click', function () {
			$('#modal').hide();
			$('#modal_content').hide();
		})
	}
})