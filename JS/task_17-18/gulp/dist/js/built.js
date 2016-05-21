var timerText = document.getElementById('time');
var start = document.getElementById('toggle');
var reset = document.getElementById('reset');
var lap = document.getElementById('lap');
 

var watch = new Stopwatch(timerText);

function startMy() {
	watch.stop()
	start.innerHTML = 'Start'
}

function stop() {
	watch.start();
	start.innerHTML = 'Stop'
}

lap.addEventListener('click', function() {
	watch.lap();
})

start.addEventListener('click', function() {
	watch.isOn ? startMy() : stop(); 
})

reset.addEventListener('click', function() {
	watch.reset();
})
function Stopwatch(elem) {
	var time = 0, 
			interval,
			offset;

	function update() {
		if(this.isOn) {
			time += delta();
		}
		var formatedTime = timeFormatter(time);
		elem.textContent = formatedTime;
	}

	function delta() {
		var now = Date.now();
		var timePased = now - offset;
		offset = now;
		return timePased;
	}

	function timeFormatter(timeMilliseconds) {
		var time = new Date(timeMilliseconds);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		if(minutes.length < 2) {
			minutes = '0' + minutes;
		}
		if(seconds.length < 2) {
			seconds = '0' + seconds;
		}
		if(milliseconds.length < 3) {
			milliseconds = '0' + milliseconds;
		} 

		return minutes + ' : ' + seconds + ' . ' + milliseconds
	}

	this.isOn = false;
	this.start = function() {
		if(!this.isOn) {
			offset = Date.now();
			interval = setInterval(update.bind(this), 10);
			this.isOn = true;
		}
	};
	this.stop = function() {
		if(this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};
	this.reset = function() {
		if(!this.isOn) {
			time = 0;
			document.getElementById('time').innerHTML = '00 : 00 . 000';
			document.getElementById('demo').innerHTML = '';
		}
	};
	this.lap = function() {
		document.getElementById('demo').innerHTML += timeFormatter(time) + '<br>';
	}
}

