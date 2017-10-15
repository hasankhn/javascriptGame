//game
var numSquares = 6;
var colors = getRandomColor(numSquares);
var square = document.querySelectorAll('.square');
var pickedColor = colors[randColor()];
var displayMessage = document.querySelector('.messageDisplay');
var reset = document.querySelector('.reset');
var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector('h1');
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    displayMessage.textContent = "";
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = getRandomColor(numSquares);
    pickedColor = colors[randColor()];
    colorDisplay.textContent = pickedColor; //added color rgb to span    
    for (var i = 0; i < square.length; i++) {
        if(colors[i]){
            square[i].style.background = colors[i];
        }else{
            square[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    displayMessage.textContent = "";
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = getRandomColor(numSquares);
    pickedColor = colors[randColor()];
    colorDisplay.textContent = pickedColor; //added color rgb to span    
    for (var i = 0; i < square.length; i++) {
            square[i].style.background = colors[i];
            square[i].style.display = "block";
    }
    h1.style.background = "steelblue";
});

reset.addEventListener("click", function () {
    colors = getRandomColor(numSquares);
    this.textContent = "New Colors";    
    pickedColor = colors[randColor()];
    displayMessage.textContent = "";
    for (var i = 0; i < colors.length; i++) {
        colorDisplay.textContent = pickedColor; //added color rgb to span
        square[i].style.background = colors[i]; //assign colors to boxes
    };
    h1.style.background = "steelblue";
});

for (var i = 0; i < colors.length; i++) {
    colorDisplay.textContent = pickedColor; //added color rgb to span
    square[i].style.background = colors[i]; //assign colors to boxes
    //assigning click event
    square[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        if (clickedColor == pickedColor) {
            displayMessage.textContent = "Success";
            h1.style.background = pickedColor;
            reset.textContent = "Play Again?";
            succeed();
        } else {
            this.style.background = '#232323';
            displayMessage.textContent = "Try Again";
        }
    })
};

function randColor() {
    return Math.floor(Math.random() * colors.length);
}

function succeed() {
    for (var index = 0; index < square.length; index++) {
        square[index].style.background = pickedColor; //assign colors to boxes        
    }
}

function getRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(generateColor())
    }
    return arr;
}

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}