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