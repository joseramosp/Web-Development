var isGameOver = true;
var buttons = document.querySelectorAll("button");
console.log(buttons);

var sequence = [];

buttons.forEach(function (button){
    pressedAnimation(button);


});

function addRandomColor(){
    switch(Math.floor(Math.random() * 4)){
        case 0:
            sequence.push("green");
            break;
        case 1:
            sequence.push("red");
            break;
        case 2:
            sequence.push("yellow");
            break;
        case 3:
            sequence.push("blue");
            break;

        default:
            break;
    }
}

function runSequence(){

    var audio;

    for(var i = 0; i<sequence.length; i++){
        setTimeout(function(){
            pressedAnimation($(sequence[i]));
            audio = new Audio("sounds/" + sequence[i] + ".mp3");
            audio.play();
    }, 800);

    }
}

function pressedAnimation(button){
    $(button).on("click", function(){
        $(button).addClass("pressed");
        setTimeout(function () {
            $(button).removeClass("pressed");
        }, 200);
    });
}

$("body").on("keypress", function(){
    if(isGameOver === true){
        isGameOver = false;
        startGame();
    }
});



function startGame(){
    var level = 1;

    alert("test");

    addRandomColor();
    addRandomColor();
    addRandomColor();
    addRandomColor();
    addRandomColor();

    alert(sequence);

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
