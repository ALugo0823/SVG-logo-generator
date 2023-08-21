class Shape {
    constructor() {
        this.logoText = '';
        this.textColor = '';
        this.shapeColor = '';
    }
//sets color based on user input on the terminal
    setTextColor(data){
        this.textColor = data;
    }
    //conditional statement to check if the user is inputting up to three letters, and if not the error message will logged to the console
    renderText(data){
        if (data.length > 3){
            console.log('Must be up to 3 letters only please');
            this.logoText = "error"
            return  
        } else {
            this.logoText = data;
        }
    }
//this will set the color of the shape based on the user input in the terminal
    setColor(data){
        this.shapeColor = data;
    }};

module.exports = Shape;