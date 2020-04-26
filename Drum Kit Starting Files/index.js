var buttons = document.querySelectorAll("button");
var pressedKey;
buttons.forEach(function (drum) {
    drum.addEventListener("click", function (){
        // drum.style.color = "white";
        pressedKey = drum.innerHTML;
        var audio

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
    });
    addEventListener("keypress",function (){
        console.log("working");
    }).
});
