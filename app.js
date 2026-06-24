//Tests:

const stringUtilsFuncs = require("./stringUtils");

console.log(stringUtilsFuncs.capitilize(" "));

console.log(stringUtilsFuncs.contains("Hello, world", "Hello"));
console.log(stringUtilsFuncs.contains("Hello", " "));

console.log(stringUtilsFuncs.reverse("Hello"));