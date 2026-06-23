const stringUtilsFuncs = require("./stringUtils");

console.log(stringUtilsFuncs.capitilize("hello!"));

console.log(stringUtilsFuncs.contains("Hello, world", "Hello"));
console.log(stringUtilsFuncs.contains("Hello", "ell"));

console.log(stringUtilsFuncs.reverse("Hello"));