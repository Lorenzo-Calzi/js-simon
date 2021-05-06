
var listNumber = []
for(i = 0; i < 5; i++) {
    listNumber.push(Math.floor(Math.random() * (100 - 1)) + 1);
}

console.log(listNumber);
alert(listNumber);

var timer = 10;
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
                document.getElementById('result').innerHTML = 'Punteggio: ' + counter;

                numberCorrect.push(userNumber);
                document.getElementById('correct').innerHTML = 'Corretti: ' + numberCorrect;

            } else {
                numberWrong.push(userNumber);
                document.getElementById('wrong').innerHTML = 'Errati: ' + numberWrong;
            
            } 
        }
    } else {
        timer--;
    }
    document.getElementById('timer').innerHTML = timer;
    

},1000);



