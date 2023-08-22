//importing our dependancy
const inquirer = require('inquirer');

//importing our class from our ./lib/shapes file
const Shape = require('./lib/shapes');


const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/cir-squ-tri');

//array of questions that the user will answer in the terminal
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 letters of your choice for your logo: ',
    },
    {
        type: 'input',
        name: 'letterColor',
        message: 'What color would you like the letters to be? You may input the name of your color or the hex code of the color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? You may input the name of your color or the hex code of the color',
    },
];
//function that will generate the svg logo and assign in to its own file
function generateFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err
        }
        console.log('Success! logo.svg file has been generated!')
    })
};
//function that will render the color and shape that the user chooses for their logo and finally generate the logo.svg file
const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log('Must be up to 3 letters only please')
            } else {
                let shape;
                if (answers.shape === 'circle') {
                    shape = new Circle();
                };
                if (answers.shape === 'triangle') {
                    shape = new Triangle();
                };
                if (answers.shape === 'square') {
                    shape = new Square();
                };
                shape.renderText(answers.text);
                shape.setTextColor(answers.letterColor);
                shape.setColor(answers.shapeColor);
                generateFile('./examples/logo.svg', shape.renderLogo(answers))
            }
        });
};

init();