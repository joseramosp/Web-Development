var gameIsOver = true;
var buttons = document.querySelectorAll("button");

var sequence = [];
var index = 0;
var sequenceIndex = 0;
var level = 1;

buttons.forEach(function (button){
    pressedAnimation(button);
});

function addRandomColor(){
    var index = Math.floor(Math.random() * 4)
    sequence.push(buttons[index]);
}

function runSequence(){
    var index = 0;
    for(var i = 0; i < sequence.length; i++){
        var buttons = sequence;
        setTimeout(function () {
            playSquare(buttons[index++]);
        }, ((index++ + 1) * 1000));
    }
    index = 0;
    sequenceIndex = 0;
}

function pressedAnimation(button){
    $(button).on("click", function(){
        userSelectedSquare(button);
    });
}

function userSelectedSquare(button){

    if(button === sequence[sequenceIndex]){
        sequenceIndex++;
        $(button).css("background-color","grey");
        setTimeout(function () {
            $(button).css("background-color",button.id);
        }, 200);
        var audio;
        audio = new Audio("sounds/" + button.id + ".mp3");
        audio.play();
        // level++;
    }
    else{
        $("body").css("background-color","red");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").css("background-color","#0A1F40");
        }, 1000);
        var audio;
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        sequenceIndex = 0;
        level = 1;
    }
    if(sequenceIndex === sequence.length){
        level++;
        continueGame();
        sequenceIndex = 0;
    }
}

function playSquare(button){
    $(button).addClass("pressed");
    setTimeout(function () {
        $(button).removeClass("pressed");
    }, 200);
    var audio;
    audio = new Audio("sounds/" + button.id + ".mp3");
    audio.play();
}

$("body").on("keypress", function(){
        sequence = [];
        continueGame();
});

function continueGame(){
    addRandomColor();
    runSequence();
    $("h1").text("Level " + level);
}
