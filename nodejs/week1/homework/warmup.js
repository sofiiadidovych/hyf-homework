console.log("inside warmup file");

class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return  2 * this.radius;
    }
    getCircumference() {
        return Math.PI * 2 * this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());

const circle1 = new Circle(5);
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

const circle2 = new Circle(1.25);
console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());