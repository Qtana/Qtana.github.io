var mainButton = document.getElementById('main_button');
var clearButton = document.getElementById('clear_button');
var bigCounterLabel = document.getElementById('big_counter_label');
var smallCounterLabel = document.getElementById('small_counter_label');
var mainButtonLabel = document.getElementById('main_button_label');

var state = 'not_started'; // not_started, paused, counting
var smallCounterTimerId;
var bigCounterTimerId;
var smallCounter = 0; // in milliseconds
var bigCounter = 0; // in seconds

clearButton.addEventListener('click', clearButtonHandler);
mainButton.addEventListener('click', mainButtonHandler);

function mainButtonHandler() {
    if(state === 'not_started' || state === 'paused') {
        mainButtonLabel.innerHTML = 'Pause';
        mainButton.className = 'pause button';

        state = 'counting';

        smallCounterTimerId = setInterval(startSmallTimer, 0.001);
        bigCounterTimerId = setInterval(startBigTimer, 1000);
    } else if(state === 'counting') {
        mainButtonLabel.innerHTML = 'Cont..';
        mainButton.className = 'main button';

        state = 'paused';
        
        clearInterval(smallCounterTimerId);
        clearInterval(bigCounterTimerId);
    }
}

function clearButtonHandler() {
    bigCounterLabel.innerHTML = '00:00:00';
    smallCounterLabel.innerHTML = '0';
    mainButtonLabel.innerHTML = 'Start';
    mainButton.className = 'main button';

    state = 'not_started';

    clearInterval(smallCounterTimerId);
    clearInterval(bigCounterTimerId);

    smallCounter = 0;
    bigCounter = 0;
}

function startSmallTimer() {
    if(smallCounter < 1000) {
        smallCounter += 9;
    } else {
        smallCounter = 0;
    }

    smallCounterLabel.innerHTML = smallCounter;
}

function startBigTimer() {
    bigCounter++;

    var seconds = bigCounter % 60;
    var minutes = Math.floor(bigCounter / 60);
    var hours = Math.floor(minutes / 60);

    bigCounterLabel.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    if(time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}
