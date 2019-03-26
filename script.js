
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
console.log(computer);

//convert random number to array
let toIntArray = (computer) => ([...computer + ""].map(Number));
 console.log(toIntArray(computer));


function game(user, computer){
     if (user == computer) {
         alert("You picked the correct number!");
     }else if (user > computer) {
            arrowDown();
     }else if (user < computer) {
            arrowUp();
    };
}

function arrowUp() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://image.flaticon.com/icons/png/512/32/32065.png");
    x.setAttribute("width", "150");
    x.setAttribute("height", "150");
    x.setAttribute("alt", "Arrow up");
    x.setAttribute("margin", "20");
    document.body.appendChild(x);
 }
 function arrowDown() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYX1oiYsGa2EvqcHZKnRHOw-v1N9IjTM0E5V-fX15lKcFaQy45");
    x.setAttribute("width", "150");
    x.setAttribute("height", "150");
    x.setAttribute("alt", "Arrow up");
    x.setAttribute("margin", "20");
    document.body.appendChild(x);
 }
    

 
 document.getElementById('myform').addEventListener('submit', function(e){
     let user = document.getElementById("userinput").value;
     
     game(user, computer);
     
     e.preventDefault();
 });
 
 //Convert user imput to array 
 function myFunction() {
    let user = document.getElementById("userinput").value;
    var aUser = user.split("").map(Number);
    return(aUser);
 }


function init(){
    arr1 = toIntArray(computer);
    arr2 = myFunction();
   
 var matches = arr1.filter(function(item){
    return arr2.indexOf(item) > -1
  })

  console.log(matches)
  document.getElementById('matches').innerHTML = "Matched numbers: " + matches;
}
 