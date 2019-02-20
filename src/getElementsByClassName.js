// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
    var allNodesArr = [];
    if (node === undefined) {
        node = document;
    } 
    var allNodes = node.childNodes;
    allNodes.forEach(function(element) {
        if (element.classList && element.classList.contains(className)) {
            allNodesArr.push(element);
        }
        if (element.hasChildNodes()) {
            allNodesArr = allNodesArr.concat(getElementsByClassName(className, element));
        }
    });
    return allNodesArr;
};
