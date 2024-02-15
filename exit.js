var score = localStorage.getItem("score", score);
console.log(score);
document.getElementById("score").innerHTML = score + " out of 5"
function Restart() {
    window.location = "index.html";
}