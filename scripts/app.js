//game
var colors = getRandomColor(6);
console.log(colors);
var square = document.querySelectorAll('.square');
var pickedColor = colors[randColor()];
var displayMessage = document.querySelector('.messageDisplay');
var reset = document.querySelector('.reset');
var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector('h1');

reset.addEventListener("click",function(){
    colors = getRandomColor(6);
    pickedColor = colors[randColor()];    
    for (var i = 0; i < colors.length; i++) {        
        colorDisplay.textContent = pickedColor; //added color rgb to span
        square[i].style.background = colors[i]; //assign colors to boxes
    };        
})

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
            this.style.background = '#000';
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