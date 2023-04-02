const path=require("path");
//console.log(path.extname("C://Users//DELL//Desktop//node//index.js"));
//console.log(path.basename("C://Users//DELL//Desktop//node//index.js"));
console.log(path.parse("C://Users//DELL//Desktop//node//index.js"));
const data=path.parse("C://Users//DELL//Desktop//node//index.js");
console.log(data.root);
console.log(data.name);