const gift = document.querySelector('.present');
const wind = document.getElementById("modalwindow");
const close = document.getElementById("closewind");

gift.onclick = function() {
    wind.style.display = "block";
}
close.onclick = function() {
    wind.style.display = "none";
}
const audio = document.querySelector('audio')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
console.log (next, prev, audio)
let treck;
window.onload = function() {
    treck = 0; 
}
let music = ["audio/music1.mp3","audio/music2.mp3","audio/music3.mp3","audio/music4.mp3","audio/music5.mp3","audio/music6.mp3","audio/music7.mp3","audio/music8.mp3","audio/music9.mp3","audio/music10.mp3","audio/music11.mp3"]
function switchMusic (numMusic) {
        audio.src = music[numMusic];
        audio.currentTime = 0;
        audio.play();
}
prev.addEventListener("click", function() {
    
    if (treck > 0) {
        treck--; 
        switchMusic(treck); 
    } else { 
        treck = music.length; 
        switchMusic(treck); 
    }
});
next.addEventListener("click", function() {
    
    if (treck < music.length) { 
        treck++; 
        switchMusic(treck); 
    } else { 
        treck = 0; 
        switchMusic(treck); 
    }
});
