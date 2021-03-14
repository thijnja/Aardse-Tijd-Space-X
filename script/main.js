var klok = document.getElementById('klok');

function time() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
klok.textContent = 
    ("0" + h).substr(-2) + " : " + ("0" + m).substr(-2) + " : " + ("0" + s).substr(-2);
}

setInterval(time, 1000);



var today = new Date();

var datum = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

document.getElementById('datum').innerHTML = datum;

/*
var s = today.getSeconds();
    if (s < 10) {
    s = '0' + s;
}

var minutes = today.getMinutes();
    if (m < 10) {
    m = '0' + m;
}

document.getElementById('klok').innerHTML = 
today.getHours() + ':' + m + ':' + s;

function start() {
    update();
    var interval = setInterval(update, 250);
}




getElementById('klok').onload = function startTime() 

function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('tijd').innerHTML =
                h + ": " + m + ":" + s;
            var t = setTimeout(startTime, 500);
        }

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
} */