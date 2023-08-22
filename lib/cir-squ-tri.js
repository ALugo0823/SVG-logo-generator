//importing our shape class from the shapes.js file
const Shape = require('./shapes');

//this will render our circle if the user chooses this option
class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }

    renderLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    }
};

//this will render our triangle if the user chooses this option
class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }

    renderLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 1 0, 275 400,425" fill="${this.shapeColor}"/>

        <text x="155" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    }
};
//this will render our square if the user chooses this option
class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor)
    }

    renderLogo() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    }
};

module.exports = {Circle, Triangle, Square}