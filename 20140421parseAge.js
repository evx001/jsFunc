//20140421parseAge.js
function parseAge(age) {
if (!_.isString(age)) throw new Error("Expecting a string"); var a;
      console.log("Attempting to parse an age");
      a = parseInt(age, 10);
if (_.isNaN(a)) {
console.log(["Could not parse age:", age].join(' '));
a = 0; }
return a; }


