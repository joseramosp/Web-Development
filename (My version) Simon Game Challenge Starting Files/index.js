var isGameOver = true;
var buttons = document.querySelectorAll("button");

var sequence = [];

buttons.forEach(function (button){
    pressedAnimation(button);
});

function addRandomColor(){
    var index = Math.floor(Math.random() * 4)
    sequence.push(buttons[index]);
}

function runSequence(){

    for(var index = 0; index < sequence.length; index++){
        playSquare(sequence[index]);
    }
}

function pressedAnimation(button){
    $(button).on("click", function(){
        playSquare(button);
        var audio;
        audio = new Audio("sounds/" + button.id + ".mp3");
        audio.play();
    });
}

function playSquare(button){
    $(button).addClass("pressed");
    setTimeout(function () {
        $(button).removeClass("pressed");
    }, 200);
}

$("body").on("keypress", function(){
    if(isGameOver === true){
        isGameOver = false;
        startGame();
    }
});

function startGame(){
    var level = 1;

    addRandomColor();
    addRandomColor();
    addRandomColor();
    addRandomColor();
    addRandomColor();

    runSequence();

}
