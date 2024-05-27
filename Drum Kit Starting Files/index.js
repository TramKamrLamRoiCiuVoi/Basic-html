var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');

function keyCheckPlay(key){
    switch (key){
        case "w":
            crash.play();
            break;
        case "a":
            kick.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "l":
            tom4.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

for (var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    keyCheckPlay(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown", function (event){
    keyCheckPlay(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(key){
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100);
}