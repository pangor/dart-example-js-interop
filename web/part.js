// Generated by dart2js, the Dart to JavaScript compiler version: 0.5.16.0_r23799.
var old$=$
$=I.prototype
$$={};(function (reflectionData) {
  if (!init.libraries) init.libraries = [];
  if (!init.mangledNames) init.mangledNames = {};
  var libraries = init.libraries;
  var mangledNames = init.mangledNames;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var length = reflectionData.length;
  for (var i = 0; i < length; i++) {
    var data = reflectionData[i];
    var name = data[0];
    var uri = data[1];
    var metadata = data[2];
    var descriptor = data[3];
    var classes = [];
    var functions = [];
    for (var property in descriptor) {
      if (!hasOwnProperty.call(descriptor, property)) continue;
      var element = descriptor[property];
      if (property.substring(0, 1) == "@") {
        property = property.substring(1);
        $[property]["@"] = element;
      } else if (typeof element === "function") {
        $[property] = element;
        functions.push(property);
      } else {
        var newDesc = {};
        var previousProp;
        for (var prop in element) {
          if (!hasOwnProperty.call(element, prop)) continue;
          var firstChar = prop.substring(0, 1);
          if (firstChar == "+") {
            mangledNames[previousProp] = prop.substring(1);
          } else if (firstChar == "@" && prop != "@") {
            newDesc[prop.substring(1)]["@"] =element[prop];
          } else {
            newDesc[previousProp = prop] = element[prop];
          }
        }
        $$[property] = newDesc;
        classes.push(property);
      }
    }
    libraries.push([name, uri, classes, functions, metadata]);
  }
})([])
$$=null
$=old$
