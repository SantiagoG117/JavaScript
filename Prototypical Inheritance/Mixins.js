/* 
    ? Composition:
    Favor composition over inheritance. 
    With composition, instead of having multi-level inheritance hierarchies we can compose a few objects together to create a new Object. 
    This is a more flexible and simple approach for code reusability
*/ 


//*   Composition (Mixin) function: Copy the properties and methods from one or more objects to the target object ; 
function mixin(target, ...sourceObjects){
    Object.assign(target.prototype, ...sourceObjects);
};

//? Create some features

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim');
    }
}

//? Compose these objects together to create objects with simmilar behaviors
function Person() {
}


mixin(Person.prototype, canEat, canWalk);

function GoldFish(){    
}

mixin(GoldFish.prototype, canSwim);