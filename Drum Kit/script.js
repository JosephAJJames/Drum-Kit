var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btn5 = document.getElementById("btn-5")
var btn6 = document.getElementById("btn-6")
var btn7 = document.getElementById("btn-7")
var btn8 = document.getElementById("btn-8")
var btn9 = document.getElementById("btn-9")

btn1.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_clap.wav")
    audio.play()
})

btn2.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_hihat.wav")
    audio.play()
})

btn3.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_kick.wav")
    audio.play()
})

btn4.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_openhat.wav")
    audio.play()
})

btn5.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_boom.wav")
    audio.play()
})

btn6.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_ride.wav")
    audio.play()
})

btn7.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_snare.wav")
    audio.play()
})

btn8.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_tom.wav")
    audio.play()
})

btn9.addEventListener("click", () => {
    var audio = new Audio("01 - JavaScript Drum Kit_sounds_tink.wav")
    audio.play()
})