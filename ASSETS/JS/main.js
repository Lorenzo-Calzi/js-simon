//1. Un alert() espone 5 numeri generati casualmente.
var listNumber = []
for(i = 0; i < 5; i++) {
    listNumber.push(Math.floor(Math.random() * (100 - 1)) + 1);
}

console.log(listNumber);
alert(listNumber);

//2. Da li parte un timer di 30 secondi.
var timer = 2;
var userNumber;
var counter = 0;
var numberCorrect = [];
var numberWrong = [];


var intervallo = setInterval(function(){
    
    if(timer <= 0) {
        alert('Tempo Scaduto!');
        clearInterval(intervallo);

        for(i = 0; i < listNumber.length; i++){
            userNumber = Number(prompt('Indovina i numeri che hai visto prima!'));
            if(userNumber == listNumber[i]) {
                counter++;
                console.log('Numeri Indovinati :' + counter);
                document.getElementById('result').innerHTML = counter;

                numberCorrect.push(userNumber);
                console.log('Numeri Corretti: ' + numberCorrect);
                document.getElementById('correct').innerHTML = 'Numeri Corretti: ' + numberCorrect;

            } else {
                numberWrong.push(userNumber);
                console.log('Numeri sbagliati: ' + numberWrong);
                document.getElementById('wrong').innerHTML = 'Numeri sbagliati: ' + numberWrong;
            
            } 
        }
    } 
      
    else {
        timer--;
    }
    document.getElementById('timer').innerHTML = timer;
    

},1000);







//3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().



//4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


