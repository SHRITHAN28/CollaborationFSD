/*Write a class Rectangle with two properties width and height. Add a method 
area() that calculates the area of the rectangle. Then, create an instance 
of Rectangle with a width of 5 and height of 10 and log the area to the console.  */
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area());