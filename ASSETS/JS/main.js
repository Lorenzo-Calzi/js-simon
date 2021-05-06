//1. Un alert() espone 5 numeri generati casualmente.
var x = []
for(i = 0; i < 5; i++) {
    x.push(Math.floor(Math.random() * (100 - 1)) + 1);
}

console.log(x);
alert(x);

//2. Da li parte un timer di 30 secondi.
var timer = 30;

var intervallo = setInterval(function(){
    
    if(timer <= 0) {
        alert('Tempo Scaduto!');
        clearInterval(intervallo);
    } else {
        timer--;
    }
    document.getElementById('timer').innerHTML = timer;

}, 1000);
//3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().



//4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.