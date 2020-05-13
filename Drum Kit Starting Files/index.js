var buttons = document.querySelectorAll("button");
var pressedKey;

buttons.forEach(function (sound) {
    sound.addEventListener("click", function (){
        // drum.style.color = "white";
        pressedKey = sound.innerHTML;
        playSound(pressedKey);
    });
});

// Detecting keyboard press

addEventListener("keypress",function (event){
    playSound(event.key);
});

function playSound(pressedKey){
    buttonAnimation(pressedKey);

    var audio;
    switch (pressedKey) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(pressedKey);
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){ activeButton.classList.toggle("pressed");; }, 100);
}
