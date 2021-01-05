//Set up size for canvas
const canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create a class
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        const circle = canvas.getContext('2d');
        circle.fillStyle = this.fillColor;
        circle.beginPath();
        circle.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        circle.fill();
    }
}

//Create circles with different radiuses, positions and fill colors
const circle1 = new Circle(40, 60, 20, 0, 2 * Math.PI, '#b085f5');
circle1.draw();

const circle2 = new Circle(100, 100, 40, 0, 2 * Math.PI, '#ff94c2');
circle2.draw();

const circle3 = new Circle(280, 180, 100, 0, 2 * Math.PI, '#62efff');
circle3.draw();

//Art part
setInterval(() => {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    const r = Math.floor((Math.random() * 100) + 10);
    function getRandomColor() {
        const n = ((Math.random() * 0xfffff * 1000000).toString(16));
        return '#' + n.slice(0, 6);
    };
    const circle = new Circle(x, y, r, 0, 2 * Math.PI, getRandomColor());
    circle.draw();
}, 100);

//Follow the mouse
let mouseX;
let mouseY;

canvas.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

setInterval(() => {
    const x = mouseX;
    const y = mouseY;
    const r = Math.floor((Math.random() * 100) + 10);
    function getRandomColor() {
        const n = ((Math.random() * 0xfffff * 1000000).toString(16));
        return '#' + n.slice(0, 6);
    };
    const circle = new Circle(x, y, r, 0, 2 * Math.PI, getRandomColor());
    circle.draw();
}, 100);