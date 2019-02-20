// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  function strip(element) {
    var arr = element.split('');
    arr.pop();
    arr.shift();
    return arr.join('');
  }
  if (json.charAt(0) === '"' && json.charAt(json.length - 1) === '"') {
    var jsonString = strip(json);
    return jsonString.toString().trim();
  }
  if (json === undefined) {
    return 1;
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
    var jsonArr = strip(json).split(',');
    return jsonArr.map(function(element) {
      return parseJSON(element.trim());
    })
  }
  if (json.charAt(0) === '{' && json.charAt(json.length - 1) === '}') {
    var jsonObj = strip(json).split(',');
    var obj = {};
    jsonObj.forEach(function(element) {
      var temporal = element.split(':');
      obj[parseJSON(temporal[0])] = parseJSON(temporal[1]);
    });
    return obj;
  }
  if (Number(json) !== NaN) {
    return Number(json);
  }
};
console.log(parseJSON('[1, 2, 3, null, true, false]'));
