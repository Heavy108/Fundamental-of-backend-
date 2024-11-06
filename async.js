const fs =require("fs");
console.log("1")
fs.readFile("test.txt" , (err,data)=> console.log(data.toLocaleString()))
console.log("File:" )
console.log("2")