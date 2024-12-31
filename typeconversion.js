/*Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans


Number("3.14") + "<br>" + 
Number(Math.PI) + "<br>" +
Number("    ") + "<br>" +
Number("") + "<br>" +
Number("99 88") + "<br>" +
Number("John") + "<br>";

answer
3.14
3.141592653589793
0
0
NaN
NaN



Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer

let y = "5";
let x = + y; 
typeof x :-string
typeof y :-number  unary change into number


let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)


Converting Numbers to Strings
The global method String() can convert numbers to strings.
String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123
String(100 + 23)  // returns a string from a number from an expression


Converting Booleans to Numbers
The global method Number() can also convert booleans to numbers.

Number(false)     // returns 0
Number(true)      // returns 1

Converting Booleans to Strings
String(false)      // returns "false"
String(true)       // returns "true"

The Boolean method toString() does the same.

false.toString()   // returns "false"
true.toString()    // returns "true"


Automatic Type Conversion
When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect:
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 



let x = undefined;
"Number : " + Number(x) + "<br>"  output NAN
"String : " + String(x) + "<br>"  undefined
"Boolean: " + Boolean(x);  false



let y = null;
"Number : " + Number(x) + "<br>" +  output :-0
"String : " + String(x) + "<br>" + NULL 
"Boolean: " + Boolean(x);  false



const z = {};
"Number : " + Number(x) + "<br>" +  NAN
"String : " + String(x) + "<br>" +  object
"Boolean: " + Boolean(x);  true



let x = "";
"Number : " + Number(x) + "<br>" +  output 0
"String : " + String(x) + "<br>" + string 
"Boolean: " + Boolean(x); false*/
