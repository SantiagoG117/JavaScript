/* 
*   Factory functions:
*       A function that returns a new object
*/
function factoryCreateCircle (radius) {
    return {
        radius,

        draw() {
            console.log('Draw function called');
        }
    };    
};

let circleFactory = factoryCreateCircle(1);

/* 
*   Constructor function:
*       A function that uses the 'this' keyword to create a new object 
*/ 

function constructorCreateCircle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
};

let circleConstructor = new constructorCreateCircle(1);

