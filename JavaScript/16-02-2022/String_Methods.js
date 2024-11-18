       //   String Length 
var txt = "My Name Is Ram";
var length = txt.length;
console.log(length);    // To Check Lenght

   
         //  String slice()
const part1 = txt.slice(7, 13);
const part2 = txt.slice(-12, -6);
const part3 = txt.slice(7);
const part4 = txt.slice(-7);
console.log(part1);     //   To get the extracted string
console.log(part2);     
console.log(part3);
console.log(part4);


       //  String substr()
var text = "Hello I Am Devang";
let part5 = text.substr(7);          
let part6 = text.substr(7,8);
let part7 = text.substr(-4);
console.log(part5);     
console.log(part6);
console.log(part7);


     //    String Converting to Upper and Lower Case
  var x = "String Methods";
var x1 = x.toUpperCase();
var x2 = x.toLowerCase();
console.log(x1);
console.log(x2);


      //   String concat()
let x3 = x.concat(" ", text);    
console.log(x3);  


     //     Trim use to remove white Space.
let x4 = text.trim();  
console.log(x4);   

        // String  Padding
// let x5 = x.padStart(14,0);
// console.log(x5);

      //  Split
var y = "Hello";     
var y1= y.split('');
console.log(y1);
       
var y2 = y.charAt(2);      // Its Index Value reture
console.log(y2);

let y3 = y.charCodeAt(0);   // UniCode 
console.log(y3);