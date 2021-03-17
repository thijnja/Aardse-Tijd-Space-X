// klok js
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

// datum js
var today = new Date();

var datum = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var h = today.getHours();

document.getElementById('datum').innerHTML = datum;


// berichtgeving js
var achtergrond = document.getElementById('achtergrond');
var titel1 = document.getElementById('titel1');
var titel2 = document.getElementById('titel2');


// het is ochtend
if(h >=6 && h < 12){
document.getElementById('opstaan').className ='laatZien';
achtergrond.classList.add('veranderKleurOchtend');

}

// het is middag
else if(h >= 12 && h < 18){
document.getElementById('lunchen').className ='laatZien';
achtergrond.classList.add('veranderKleurMiddag');

}

// het is avond
else{
document.getElementById('slapen').className ='laatZien';
achtergrond.classList.add('veranderKleurAvond');  
titel1.classList.add('veranderTitel');
titel2.classList.add('veranderTitel');  
}
