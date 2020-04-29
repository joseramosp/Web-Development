var isGameOver = true;
var buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach(function (button){
        pressedAnimation(button);


});

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

    while(!isGameOver){

        $("h1").text("Level " + level);
        isGameOver = true;

    }

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

    isGameOver = true;
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").css("background-color","red");
    setTimeout(function () {
        $("body").css("background-color","#0A1F40");
    }, 500);
    // random

}
