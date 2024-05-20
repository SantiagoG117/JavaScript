/* Objects:
*   Collections of Key-value pairs that are highly related to each other. 
*   Their purpose is to group related properties and functions

*/

let circle = {
    //!Properties: 
    //! Can be any data type
    radius: 1,
    isVisible: true,
    //! Can be another object
    location: {
        x: 1,
        y: 1
    },

    //!Methods
    fDraw: function(){
        console.log('Draw function called');
    },
};



circle.color = 'Yellow';
delete circle.color;

/* Functions are objects: 
*   Functions have access to built-in properties and methods, as well to its own properties 
*   and methods.
*/

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
};




