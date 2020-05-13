var isGameOver = true;
var buttons = document.querySelectorAll("button");

var sequence = [];
var index = 0;

// var audio;
// audio = new Audio("sounds/" + buttons[1].className + ".mp3");
// audio.play;

buttons.forEach(function (button){
    pressedAnimation(button);


});

function addRandomColor(){
    var index = Math.floor(Math.random() * 4)
    sequence.push(buttons[index]);
    // switch(index){
    //     case 0:
    //         sequence.push(buttons[index]);
    //         break;
    //     case 1:
    //         sequence.push("red");
    //         break;
    //     case 2:
    //         sequence.push("yellow");
    //         break;
    //     case 3:
    //         sequence.push("blue");
    //         break;
    //
    //     default:
    //         break;
    // }
}

function runSequence(){

    var audio;
    var button;

    // for(index; index < sequence.length; index++){
    for(index; index < 4; index++){
        // setTimeout(function(){
        //     alert("running");
        //     pressedAnimation($(sequence[i]));
        //     audio = new Audio("sounds/" + sequence[i] + ".mp3");
        //     audio.play();
        // }, 800);
        // pressedAnimation($(sequence[index]));
        // console.log("sounds/" + sequence[index] + ".mp3");
        // audio = new Audio("sounds/" + sequence[index] + ".mp3");
        // audio.play();
        // console.log("sounds/" + sequence[index] + ".mp3");
        // setTimeout(function(){
        //     pressedAnimation($(sequence[index]));
        //     console.log("sounds/" + sequence[index] + ".mp3");
        //     audio = new Audio("sounds/" + sequence[index] + ".mp3");
        //     audio.play;
        // }, 500);
        // console.log("sounds/" + sequence[index].className + ".mp3");
        // audio = new Audio("sounds/" + sequence[index].className + ".mp3");
        // console.log(audio.ended);
        // audio.play;
        // console.log(audio.ended);
        // button = $("button");
        // alert(button);
        playSquare(buttons[index]);

    }
    index = 0;
    // console.log(audio.ended);
}

function pressedAnimation(button){
    $(button).on("click", function(){
        playSquare(button);
    });
}

function playSquare(square){
    console.log("sounds/" + square.className + ".mp3");
    var audio;
    audio = new Audio("sounds/" + square.className + ".mp3");
    audio.play;
    $(square).addClass("pressed");
    setTimeout(function () {
        $(square).removeClass("pressed");
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

    console.log(sequence);
    var audio;
    audio = new Audio("sounds/red.mp3");
    audio.play;

    runSequence();

    // while(!isGameOver){
    //
    //     $("h1").text("Level " + level);
    //     // isGameOver = true;
    //
    // }

    // loopArrayAsync(["1","2","3"]);

    // function loopArrayAsync(ar, callback) {
    //     var index;
    //
    //     $("h1").text("Level " + level);
    //     index = 0;
    //     loop();
    //     // level++;
    //     function loop() {
    //         if (index < ar.length) {
    //             // doSomething(ar[index++]);
    //             alert(index++ + " " + level++);
    //             setTimeout(loop, 0);
    //         }
    //         else {
    //             isGameOver = true;
    //             callback();
    //         }
    //     }
    // }

    // isGameOver = true;
    // $("h1").text("Game Over, Press Any Key to Restart");
    // $("body").css("background-color","red");
    // setTimeout(function () {
    //     $("body").css("background-color","#0A1F40");
    // }, 500);
    // random

}
