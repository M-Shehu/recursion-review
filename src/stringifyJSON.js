// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Change the object which can take the form of {[a: key, b: key2, d: {c: key3, d: key4}]} to a string
  // BASE CASES

  
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    return '[' + obj.map(function(element) {
      return stringifyJSON(element);
    }) + ']';
  }

  if (typeof obj === 'object' && !(Array.isArray(obj))) {
    var result = [];
    Object.keys(obj).forEach(function(element) {
      if (typeof obj[element] === 'function' || obj[element] === undefined) {
        return '{}'
      } else {
        result.push ( stringifyJSON(element) + ':' + stringifyJSON(obj[element]) );
      }
    });
    return '{' + result.join(',') + '}';
  }
};

console.log(stringifyJSON({'foo': true, 'bar': false, 'baz': null}));