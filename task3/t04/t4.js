function createSquare(posX, posY){
    this.x = posX
    this.y = posY
}

createSquare.prototype.showSquare = function() {
    var square = document.createElement('div');
    square.classList.add("square");
    square.style.position = 'absolute'
    square.style.top = this.x +'px'
    square.style.left = this.y + 'px'
    var element = document.getElementById("new");
    element.appendChild(square);
    console.log(square.style.top)
}

function createTriangle(posX, posY){
    this.x = posX
    this.y = posY
}

createTriangle.prototype.showTriangle = function() {
    var triangle = document.createElement('div');
    triangle.classList.add("triangle");
    triangle.style.position = 'absolute'
    triangle.style.top = this.x + 'px'
    triangle.style.left = this.y + 'px'
    var element = document.getElementById("new");
    element.appendChild(triangle);
}

let squareObj = new createSquare(10, 10)
let triangleObj = new createTriangle(150, 10)

squareObj.showSquare()
triangleObj.showTriangle()