var timer = document.getElementById('alarm-clock');
var alaramHour = document.getElementById('hour-input');
var alaramMinutes = document.getElementById('minute-input');
var alaramSeconds = document.getElementById('second-input');
var alaramTimeFormat = document.getElementById('time-format-input');
var upcomingAlarm = document.getElementById('upcoming-alarm');
var currentTime;
setInterval(() => {
    var showTime = getCurrentTime();

    timer.innerText = showTime;
}, 1000)
function getCurrentTime() {
    currentTime = new Date();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // Check whether AM or PM
    var timeFormat = hour >= 12 ? "PM" : "AM";
    // Coverting the hour in 12-hour format
    hour = hour % 12;
    //Showing '0' as '12'
    hour = hour ? hour : 12;
    hour = hour.toString().length < 2 ? "0" + hour : hour;
    min = min.toString().length < 2 ? "0" + min : min;
    seconds = seconds.toString().length < 2 ? "0" + seconds : seconds;
    return hour + ":" + min + ":" + seconds + " " + timeFormat;
}
// Display option tag data using loops
for (let i = 0; i < 60; i++) {
    var option = document.createElement("option");
    if (i < 10) {
        i = "0" + i;
    }
    option.text = i;
    alaramMinutes.add(option);
}
for (let i = 1; i < 12; i++) {
    var option = document.createElement("option");
    if (i < 10) {
        i = "0" + i;
    }
    option.text = i;
    alaramHour.add(option);
}
for (let i = 0; i < 60; i++) {
    var option = document.createElement("option");
    if (i < 10) {
        i = "0" + i;
    }
    option.text = i;
    alaramSeconds.add(option);
}
var allAlrlams = [];
// set alarm function
function setAlaram() {
    var alarm = alaramHour.value + ":" + alaramMinutes.value + ":" + alaramSeconds.value + "  " + alaramTimeFormat.value;
    var div = document.createElement("div");
    div.className = "alarm-list-block row mx-0 justify-content-between align-items-center border m-3 p-2";
    upcomingAlarm.classList.add("p-2", "border", "border-primary", "rounded-3");
    var p = document.createElement("p");
    p.className = "alarm-time col-4";
    var deletAlarm = document.createElement("button");
    p.innerHTML = alarm;
    allAlrlams.push(p.innerHTML);
    document.cookie=allAlrlams;
    deletAlarm.innerHTML = "<i class='fa fa-trash text-danger'></i>";
    deletAlarm.className = "delete-alarm col-2 border-0 bg-transparent ";
    div.appendChild(p);
    div.appendChild(deletAlarm);
    upcomingAlarm.appendChild(div);

    var deleteBtn = document.getElementsByClassName('delete-alarm');
    var alarmTime = document.getElementsByClassName('alarm-time');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].onclick = () => {
            var alarmList = deleteBtn[i].parentNode;
            alarmList.innerText="";
            alarmList.style.display = "none";
        }

    }
}
// calling the fuction to read data from cookie.
setInterval(showAllalrams,1000);
function showAllalrams() {
    currentTime=timer.innerText;
    let x = document.cookie.split(',');
    for(var i=0; i<x.length; i++) {

// Remove all white space from both strings
currentTime = currentTime.replace(/\s/g, '');
x[i] = x[i].replace(/\s/g, '');
        if(x[i]===currentTime) {
            alert("Reminder, Hello There!")
        }
    }
}
