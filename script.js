
function getRndNumber() {
    digits = "123456789".split(''),
         first = shuffle(digits).pop();
     // Add "0" to the array
     digits.push('0');
     return parseInt( first + shuffle(digits).join('').substring(0,3), 10);
 }
 
 ///Always different digits
 function shuffle(o){
     for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
     return o;
 }
 var computer = getRndNumber();
 console.log(computer)
 
 function game(user, computer){
     if (user == computer) {
         alert("You picked the correct number!");
     }else if (user > computer) {
         alert("Too high.");
     }else if (user < computer) {
         alert("Too low.");
     }
 }
 
 document.getElementById('myform').addEventListener('submit', function(e){
     var user = document.getElementById("userinput").value;
     
     game(user, computer);
     
     e.preventDefault();
 });