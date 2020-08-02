/*
			 Even or Odd 
				Instructions
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//const { describe } = require("yargs");

/* ------------------------------------------CODE-------------------------------------------------------
//function
function even_or_odd(number) {
  if(number %2 == 0){
  	return number = "Even";
  }else{
  	return number = "Odd";
  }
}

//Test 
//Test.assertEquals(even_or_odd(2), "Even")
//Test.assertEquals(even_or_odd(0), "Even")
//Test.assertEquals(even_or_odd(7), "Odd")
//Test.assertEquals(even_or_odd(1), "Odd")
// Console.log
console.log(even_or_odd(2),2);
console.log(even_or_odd(0),0);
console.log(even_or_odd(7),7);
console.log(even_or_odd(1),1);
*/
//-----------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Opposite number
/*Instructions
Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/
// -----------------------------------------------CODE--------------------------------------------------
/*
function opposite(number) {
    if (number <= 0) {
        return number *= -1;
    } else {
        return number *= -1;
    }
}
console.log(opposite(1), 1);
console.log(opposite(-10), -10);
*/
//-------------------------------------------------------------------------------------------------------
//Test.assertEquals(opposite(1), -1,)

/*Test Results:
Test Passed: Value == -1
Test Passed: Value == 0
Test Passed: Value == -4.25
Test Passed: Value == -3.3333333
Test Passed: Value == 12525220.3325
Test Passed: Value == 5
You have passed all of the tests! :)*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
//  Growth of a Population
/*
In a small town the population is p0 = 1000 at the beginning of a year.The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.How many years does the town need to see its population greater or equal to p = 1200 inhabitants ?

    At the end of the first year there will be :
    1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2 nd year there will be:
    1070 + 1070 * 0.02 + 50 => 1141 inhabitants(number of inhabitants is an integer)

At the end of the 3 rd year there will be:
    1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

    p0, percent, aug(inhabitants coming or leaving each year), p(population to surpass)

the
function nb_year should
return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers( > 0)

Examples:
    nb_year(1500, 5, 100, 5000) - > 15
nb_year(1500000, 2.5, 10000, 2000000) - > 10
Note: Don 't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

/*
function nbYear(p0, percent, aug, p) {
    let i = 0;
    for (i; p0 < p; i++) {
        p0 = p0 + p0 * percent / 100 + aug;
    }
    return i;
}

//Test.describe("nbYear",function() {
//    Test.it("Basic tests",function() {    
//        Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//       Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//      Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
// })})

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Algorithms => Credit Card Mask
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

/*
function maskify(cc) {
    for (let i = 0; i < cc.length; i++) {
        if (i < cc.length - 4) {
            return cc.replace(/\w(?=\w{4})/mg, "#");
        } else {
            return cc;
        }
    }
}

console.log(maskify("1321326454"));
console.log(maskify("maskify"));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Algorithms => Sum of odd numbers
// Given the triangle of consecutive odd numbers:
/*
1
3     5
7     9    11
13    15    17    19
21    23    25    27    29

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
    // TODO
    if (n > 1) {
        return n **= 3;
    } else {
        return n;
    }
}ccc c

//Test.assertEquals(rowSumOddNumbers(1), 1);
//Test.assertEquals(rowSumOddNumbers(42), 74088);

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Algorithms => is this a triangle
/*
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && a + c > b && b + c > a) {
            return true;
        } else {
            return false;
        }
    }
}


//Test.describe("PublicTest", function() {
//    Test.assertEquals(isTriangle(1,2,2), true);
//    Test.assertEquals(isTriangle(7,2,2), false);
//});


console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false); 
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Data-Types => Return Negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if(num <= 0){
      return num;
    } else{
      return num *= -1;
    }
  }

//Test.assertEquals(makeNegative(42), -42);
console.log(makeNegative(42), -42);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Data-Types => Remove First and Last Character
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/


/*

function removeChar(str) {

    return str.substring(1, str.length - 1);

} *
/
/*
Test.describe("Tests", function() {

    Test.assertEquals(removeChar('eloquent'), 'loquen');
    Test.assertEquals(removeChar('country'), 'ountr');
    Test.assertEquals(removeChar('person'), 'erso');
    Test.assertEquals(removeChar('place'), 'lac');

});
*/

/*
console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Data-Types => Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.
/*

function noSpace(x) {
    return x.replace(/ /g, "");
}

//Test.describe("Example tests",_=>{
//Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
//Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
//});

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Numbers => Basic Mathematical Operations
/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/
/*
function basicOp(operation, value1, value2)
{
  // Code
  switch(operation){
    case '+' :
   return value1 + value2 ;
    case '-':
  return value1 - value2 ;
    case '*':
  return value1 * value2 ;
   case'/':
  return value1 / value2 ;  
  }
 }
//console.log("Basic tests\n");
//Test.assertSimilar(basicOp('+', 4, 7), 11);
//Test.assertSimilar(basicOp('-', 15, 18), -3);
//Test.assertSimilar(basicOp('*', 5, 5), 25);
//Test.assertSimilar(basicOp('/', 49, 7), 7);

console.log(basicOp('+', 4, 7),11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Numbers => Sum of the first nth term of Series
/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
NOTE: In PHP the function is called series_sum().
*/
/*
function SeriesSum(n)
{
  let a = 1;
  let b = 4;
  let c = 0;
  let d = 1 ;
  if(n > 0){
    for(let i=1;i<n ; i++){
      c +=a/b;
      b += 3;
      d = 1 + c;
    }
  }else{
    d = d -1;
   return d.toFixed(2).toString();
  }
  return d.toFixed(2).toString();
}

//Test.assertEquals(SeriesSum(1), "1.00")
//Test.assertEquals(SeriesSum(2), "1.25")
//Test.assertEquals(SeriesSum(3), "1.39")
//Test.assertEquals(SeriesSum(4), "1.49")

console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Numbers => Keep Hydrated!
/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/
/*
function litres(time) {
    time /= 2;
    return Math.floor(time);
}

//Test.describe('Fixed tests', _ => {
//  Test.it('Tests', _ => {
//    Test.assertEquals(litres(2), 1, 'should return 1 litre');
//    Test.assertEquals(litres(1.4), 0, 'should return 0 litres');
//    Test.assertEquals(litres(12.3), 6, 'should return 6 litres');
//    Test.assertEquals(litres(0.82), 0, 'should return 0 litres');
//    Test.assertEquals(litres(11.8), 5, 'should return 5 litres');
//    Test.assertEquals(litres(1787), 893, 'should return 893 litres');
//    Test.assertEquals(litres(0), 0, 'should return 0 litres');
//  });
//});

console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings => Reversed Strings
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/
/*
function solution(str) {
    return str.split("").reverse().join("");
}


//Test.assertEquals(solution('world'), 'dlrow')
//Test.assertEquals(solution('hello'), 'olleh')
//Test.assertEquals(solution(''), '')
//Test.assertEquals(solution('h'), 'h')

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings => String ends with?
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

/*
///////////////////////////////////////ES6//////////////////////////////////
function solution(str, ending){
  // TODO: complete
  
  if(str.endsWith(ending)){
    return true;
  }else{
    return false;
  }
}
/////////////////////////////////////////////////////////////////////////////
// deuxième solution

function solution(str, ending) {
 let b = str.slice(str.length - ending.length);
   if(b == ending){
    return true;
  }else{
    return false ;
  }
}
//Test.assertEquals(solution('abcde', 'cde'), true)
//Test.assertEquals(solution('abcde', 'abc'), false)
console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings => Do I get a bonus?
/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).
*/
/*
function bonusTime(salary, bonus) {
    // your code here

    if (bonus == true) {
        salary *= 10;
        return "£" + salary.toString();
    } else {
        return "£" + salary.toString();
    }
}

//Test.describe("Basic tests",_=>{
//Test.assertEquals(bonusTime(10000, true), '£100000');
//Test.assertEquals(bonusTime(25000, true), '£250000');
//Test.assertEquals(bonusTime(10000, false), '£10000');
//Test.assertEquals(bonusTime(60000, false), '£60000');
//Test.assertEquals(bonusTime(2, true), '£20');
//Test.assertEquals(bonusTime(78, false), '£78');
//Test.assertEquals(bonusTime(67890, true), '£678900');
//})

console.log(bonusTime(10000, true), '£100000');
console.log(bonusTime(25000, true), '£250000');
console.log(bonusTime(10000, false), '£10000');
console.log(bonusTime(60000, false), '£60000');
console.log(bonusTime(2, true), '£20');
console.log(bonusTime(78, false), '£78');
console.log(bonusTime(67890, true), '£678900');

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array => Counting sheep...
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
/*
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let a = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) {
            a += 1;
        }
    }
    return a;
}
//var array1 = [true,  true,  true,  false,
//    true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//    true,  true,  true,  true ,
//    false, false, true,  true ];

//Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]));
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array => A Needle in the Haystack
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"
*/
/*
function findNeedle(haystack) {
    // your code here
    let a = haystack.indexOf('needle');
    return 'found the needle at position ' + a;
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

//Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
//Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
//Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

console.log(findNeedle(haystack_1), 'found the needle at position 3');
console.log(findNeedle(haystack_2), 'found the needle at position 5');
console.log(findNeedle(haystack_3), 'found the needle at position 30');
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Array =>


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Objects => Make a function that does arithmetic!
/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
Try to do it without using if statements!
*/
/*
function arithmetic(a, b, operator) {
    //your code here!
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
    }
}
console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
//  Objects => Regular Ball Super Ball

/*
Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
 
*/
/*
var Ball = function(ballType) {
    if (typeof ballType === "string") {
        return this.ballType = ballType;
    } else {
        return this.ballType = "regular";
    }
};

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//  Objects => Make them bark!
/*
#Make them bark

You have been hired by a dogbreeder to write a program to keep record of his dogs.

You've already made a constructor Dog, so no one has to hardcode every puppy.

The work seems to be done. It's high time to collect the payment.

..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().

Can you solve this problem, or will you let this client outsmart you for good?

Practical info:
The .bark() method of a dog should return the string 'Woof!'.

The contructor you made (it is preloaded) looks like this:

function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}
Hint: A friend of yours just told you about how javascript handles classes diferently from other programming languages. He couldn't stop ranting about *"prototypes"*, or something like that. Maybe that could help you...
*/
/*
function Dog(name, type, sex, age) {
    this.name = name;
    this.type = type;
    this.sex = sex;
    this.age = age;
    this.bark = function() {
        return 'Woof!';
    }
}
console.log('Can you make newly created dogs bark?');
var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

console.log(apollo.bark(), 'Woof!');
console.log(zeus.bark(), 'Woof!');
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Language Features => Grasshopper - Summation
/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
/*
var summation = function(num) {
    // Code here
    let a = 0;
    for (let i = 0; i <= num; i++) {
        a += i;
    }
    return a;
}

console.log(summation(1), 1);
console.log(summation(8), 36);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Basic Language Features => Jenny's secret message
/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/
/*
function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Basic Language Features => Function 1 - hello world
/*
Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/
/*
const greet = () => { return "hello world!" }
console.log(greet());
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Conditional Statements (Control Flow) => Find the capitals
/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
/*
var capitals = function(word) {
    let b = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            b.push(i);
        }
    }
    return b;
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Conditional Statements (Control Flow) => Plural.
/*
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/
/*
function plural(n) {
    if (n !== 1) {
        return true;
    } else {
        return false;
    }
}

console.log(plural(0), true, "Plural for 0");
console.log(plural(0.5), true, "Plural for 0.5");
console.log(plural(1), false, "Plural for 1");
console.log(plural(100), true, "Plural for 100");
console.log(plural(Infinity), true, "Plural for Infinity");
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Conditional Statements (Control Flow) => Drink about
/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples:

peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"
*/
/*
function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy';
    } else if (old < 18) {
        return "drink coke";
    } else if (old <= 20) {
        return "drink beer";
    } else {
        return "drink whisky";
    }
};
console.log(peopleWithAgeDrink(22), 'drink whisky');
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Loops => Sentence Smash
/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
/*
function smash(words) {
    if(words.length > 1){
      return words.toString().replace(/,/g," ");
    }else{
      return words.toString();
    }
};

function smash(words) {
    "use strict";

    return words.join(" ");

};

console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Loops => If you can't sleep, just count sheep!!
/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
/*
var countSheep = function(num) {
    let a = "";
    for (let i = 1; i <= num; i++) {
        a += i + " sheep...";
    }
    return a;
}

console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(10), "1 sheep...2 sheep...3 sheep...");
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Loops => Double Char
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
*/
/*
function doubleChar(str) {
    // Your code here
    let b = "";
    for (let i = 0; i < str.length; i++) {
        b += str[i] + str[i];
    }
    return b;
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  #Changing Gears => Who likes it?
/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
*/
/*
function likes(names) {
    // TODO
    let a = " likes this";
    let b = " like this";
    let c = "no one likes this";
    let d = "";
    for (let i = 0; i < names.length; i++) {
        if (names.length < 2) {
            c = names.toString() + a;
        } else if (names.length < 3) {
            c = names.join(" and ") + b;
        } else if (names.length < 4) {
            d = names.join(" and ") + b;
            c = d.replace(/ and /i, ", ");
        } else if (names.length > 3) {
            let n = i - 1;
            c = names[0] + ", " + names[1] + " and " + n + " others" + b;
        }
    }
    return c;
}
console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  #Changing Gears => Multiples of 3 or 5
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/
/*
function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 5 == 0 || i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}
//test(10, 23)
console.log(solution(10));
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  #Changing Gears => Sum of Digits / Digital Root
/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
/*
function digital_root(n) {
    let a = n;
    let b = [];
    let reducer = (a, b) => parseInt(a) + parseInt(b);
    for (let i = 9; a > i; i++) {
        if (a > 9) {
            b = a.toString().split("");
            a = b.reduce(reducer);
        }
    }
    return a;
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
*/