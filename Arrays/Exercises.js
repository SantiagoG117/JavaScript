/*
*   Write a function that takes two numbers and returns an array made up of the range
*   between both numbers.
*/

function arrayFromRange(min, max){
    const result = [];
 
    while(min < max)
        result.push(min++)

    return result;
};

/* 
* Write a function that takes two arrays and returns a new one without the values of 
* the second array.
*/

function except(array, excluded){
    const result = [];

    for (var number of array)
        if(!excluded.includes(number))
            result.push(number);
    
    return result
}

/* 
*   Create a function that takes an array, moves an element and returns a new one with the items reorded.
*     index: represents the index of the element we want to move
*     offset: positions to the right we want to move the value
*       If the offset is greater than the lenght of the array, display an error: 
*       We can provide a negative value as an offset, which will move the value to the left

*/

    


function move(array, index, offset){
    
    let newPosition = index + offset;
    
    //Validation: Verify that the new position is within the limits of the array
    if(newPosition >= array.length || newPosition < 0){
        console.error('Invalid offset')
        return;
    }
    
    //Clone the original array into a new array
    const output = [...array];
    //Remove the element from the array
    const deletedValue = output.splice(
        index,//Starting index
        1, //Number of items we wish to remove from the index
    )[0];// *returns an array containing the deleting items. [0] represents the value we deleted from the array  
    
    //Add the value to the array at a specific position:
    output.splice(
        newPosition, //Index where we wish to add the value
        0, //We don't wish to delete any item
        deletedValue //item we wish to place into the array 
    );
    
    return output
    
}

/* 
*  Write a function that takes an array and a search element, and returns the number of times that the search element
*  has occurred in this array.
*/

function countOccurrences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error('Please enter an array as the first argument');
    

    /* 
    ?   Reduce executes an arrow callback function on each element of the array, passing in 
    ?    the return value from the calculation on the preceding element to the next one.
    */

    return array.reduce((accumulator, current) => 
            {
                //*Verify if current is equal to searchElement 
                const occurrance = (current === searchElement) ?
                                        //*If they are add 1 to accummulator
                                        1 :
                                        //* Otherwise add 0 to accummulator:
                                        0 ;
                
                /* 
                    TODO UNCOMMENT TO UNDERSTAND BEHAVTIOR: console.log('accumulator ' + accumulator, 'Current ' + current, 'Search element ' + searchElement);
                */
                
                return accumulator + occurrance;

            }, 0); //*Initial value of accummulator
};
try {
    const numbers = [1,2,3,4,5,1];
    const count = countOccurrences(null, 1);        
    console.log(count);
} catch (error) {
    alert(error);
}


/* 
    * Create a function to get all the movies in 2003 with a raiting greater than 8
    * Sort them by their raiting in descending order  (Movies with a better raiting should come first)
    * Just display their title
*/
const movies = [
    {title: 'The Lord of the Rings: The Fellowship of the ring', year: 2001, raiting: 9.5},
    {title: 'Kill Bill: Vol. 1', year: 2003, raiting: 7.9},
    {title: 'The Lord of the Rings: The Two Towers', year: 2002, raiting: 9.7},
    {title: 'Finding Nemo', year: 2003, raiting: 8.2},
    {title: 'The Lord of the Rings: The Return of the King', year: 2003, raiting: 9.0},
];

function movieFilter(movies){

    const bestMovies = movies
                        //Get all the movies in 2003
                        .filter(m => m.year === 2003)
                        //Filter by movies wit a rating greater than 8.0
                        .filter(m => m.raiting > 8.0)
                        //*Sort by raiting:
                            //* Negative result indicates that a comes before b
                            //* Positive result indicates that b comes before a
                            //* Zero indicates that both are considered equal  
                        .sort((a, b) => a.raiting - b.raiting)
                        //Order by descending order
                        .reverse()
                        //Display just the title
                        .map(m => m.title)
                        ;

    return bestMovies;
}

const bestMovies = movieFilter(movies);






