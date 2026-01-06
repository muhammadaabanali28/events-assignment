function increment(event) {
 var count = document.getElementById("value")
 var count = count.innerText++
var count = count++

console.log("count => " , count ) 
}
function decrement() {
     var count = document.getElementById("value")
 var count = count.innerText--
}
function reset() {
     var count = document.getElementById("value")
 var count = count.innerText = 0
}
