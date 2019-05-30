// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === undefined) {
    return null;
  }
  if (json === "") {
    return '';
  }
  if (json === "[]") {
    return [];
  }
  if (json === "{}") {
    return {};
  }
  if (json.charAt(0) === '"' && json.charAt(json.length - 1) === '"') {
    var jsonString = strip(json);
    return jsonString.toString();
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  
  if (json === 'null') {
    return null;
  }                           
  if (json.charAt(0) === '[' && json.charAt(json.length - 1) === ']') {
    // debugger;
    var jsonArr = strip(json).split(',');
    return jsonArr.map(function(element) {
      return parseJSON(element.trim());
    })
  }
  if (json.charAt(0) === '{' && json.charAt(json.length - 1) === '}') {
    // debugger;
    var jsonObj = strip(json).split(/(?!\B"[^"]*),(?![^"]*"\B)/);
    var obj = {};
    jsonObj.forEach(function(element) {
      var temporal = element.split(':');
      // debugger;
      obj[parseJSON(temporal[0].trim())] = parseJSON(temporal[1].trim());
    });
    return obj;
  }
  if (Number(json) !== NaN) {
    return Number(json);
  }
  function strip(element) {
    var arr = element.split('');
    arr.pop();
    arr.shift();
    return arr.join('');
  }
};
console.log(parseJSON('[1, 2, 3, null, true, false]'));
