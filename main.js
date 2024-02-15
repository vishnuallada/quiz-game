var question1 = "what is the capital of greece."
var answer1 = "athens"

var question2 = "what is the biggest planet in the solar system"
var answer2 = "jupiter"

var question3 = "what is the tallest building in the world"
var answer3 = "burj khalifa"

var  question4 = "what is the tallest rocket"
var answer4 = "spacex starship"

var question5 = "which astronaut played golf on the moon"
var  answer5 = "alan shepard"

score = 0;
count = 0;
var question = [question1,question2,question3,question4,question5]
var answer = [answer1,answer2,answer3,answer4,answer5]

function done () {
   var current = answer[count];
var input = document.getElementById("ui").value;
if (current == input ) {
    score= score+1
}
count = count+1;
   console.log(count);
   document.getElementById("question").innerHTML = question[count]
console.log(input)
console.log(current)
console.log(score);
 if (count==5) {
    localStorage.setItem("score", score)
    window.location = "exit.html";
 }  
}