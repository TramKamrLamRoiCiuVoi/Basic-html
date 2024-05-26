var ranNum1 = Math.floor(Math.random() * 6 + 1);
if (ranNum1 === 1){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice1.png");
} else if (ranNum1 === 2){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice2.png");
} else if (ranNum1 === 3){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice3.png");
} else if (ranNum1 === 4){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice4.png");
} else if (ranNum1 === 5){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice5.png");
} else if (ranNum1 === 6){
    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice6.png");
}

var ranNum2 = Math.floor(Math.random() * 6 + 1);
if (ranNum2 === 1){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice1.png");
} else if (ranNum2 === 2){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice2.png");
} else if (ranNum2 === 3){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice3.png");
} else if (ranNum1 === 4){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice4.png");
} else if (ranNum1 === 5){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice5.png");
} else if (ranNum1 === 6){
    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice6.png");
}

if (ranNum1 > ranNum2){
    document.querySelector("h1").textContent = "Player 1 won!";
} else if (ranNum2 > ranNum1){
    document.querySelector("h1").textContent = "Player 2 won!";
} else {
    document.querySelector("h1").textContent = "Draw";
}