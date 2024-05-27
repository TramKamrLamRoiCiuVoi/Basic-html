var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var started = false;

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    playSound(userChosenColour);

    pressAnimation(userChosenColour);

    checkAnswer(userPattern.length-1);
});

$(document).keydown(function(){
    if(!started){
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }


    
});

function nextSequence(){
    userPattern = [];

    level++;
    $("h1").text("Level " + level);
    
    var ranNum = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[ranNum];

    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function pressAnimation(color){
    $("." + color).addClass("pressed");
    setTimeout(function(){
        $("." + color).removeClass("pressed");
    },100);
}

function checkAnswer(level){
    if (userPattern[level] === gamePattern[level]){
        if(userPattern.length === gamePattern.length){

            setTimeout(function(){
                nextSequence();
            },1000);
        }

    } else {
        var wrongAudio = new Audio ("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");

        },200);
        $("h1").text("Game Over! Press Any Key To Restart!")
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}





