var clicks = 0

function talk() {
    var speech = document.getElementById("speech")
    clicks++
    speech.innerHTML = "Bob says hi! You have clicked Bob " + clicks + " times!"
}