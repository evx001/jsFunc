//Pattern Matching -- not regex

var fact = fun(
    [0, function ()  1], // first condition 
    [$, function (n) n * fact(n - 1)] // the otherwise 
);
// install it 
npm install funcy

// in file require it. 
var fun = require('funcy');


//Patterns will be of type: atom, Object, Array, Function, or the special wild-card and parameter patterns.

// Atoms match against values that are strictly equal. 
// Number, String, Boolean, null, undefined, NaN, and Infinity -- strictly 

// Objects match against values that are objects, of the same type (determined by the object.constructor property). No Wild-cards.

// Arrays match against values that are arrays, have the same number of elements with all elements being strictly equal and in the same order as the pattern array. 

// Parameter matches against a value of any type, and returns that value as an argument to the anonymous function in the pattern expression. The values are given in the order the parameters are defined in the pattern(s).

// Wildcard matches against a value of any type, but does not return that value.

// Functions match against values that are of the same type (determined by function.constructor.) If a match is successful the value is returned. Parameter and Wild-card are special instances of the Function pattern which do not check if the value and pattern are of the same type.

 
