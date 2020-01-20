enum Color {Red = 1, Green, Blue} 
let colorName: string = Color[2]; 
let c: Color = Color.Green; console.log("Enum: Value of colorName is: "+colorName); 
console.log("Enum: Value of c is: "+c); 
console.log("Enum: Name of c is: " + Color[c]);