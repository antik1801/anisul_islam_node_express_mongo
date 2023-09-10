const path = require("node:path")

console.log(path.basename('/foo/bar/baz/asdf/quux.html')) // path base name return the last part of the directory
console.log(path.extname("gavi.css"))  // returns the extainsion name of the file
console.log(path.isAbsolute("/")) // return the real pathname or fake path name
console.log(path.join("rak","make","coffee","syneb")) // join al the paths 
console.log(path.normalize("/ha/ha/ja.../jaka/..hehe"))
console.log(path.parse("/root/project/manhaten/openhaimer.js").name) // ! Amazing all objects 

