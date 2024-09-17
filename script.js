//This is a comment :D

//console.log(`Hello World!`);
    // I can use " `` " as '' | they're called backticks

//console.log(10-5);

// this actually works | console.log(`10`-5);
    // This prints as 5 anyway

// binary for js is 64 bit


//console.log(10 + 10);
//console.long(100 + 10);
//console.log(100 / 10);
//console.log(100 * 10);
//console.log(`100` * 20);
    //These will be fine BUT

    //When we combine strings and numbers
    //it will work for Division, Subtraction, and multiplicaton
    //it will NOT work as expected Addiction
//console.log(`100` + 20);
//console.log(100 + `10`);
//console.log(100 + `100`)
    //This is called a string concatination

//Make sure to save my work everytime whenever using the node cmd in term.
    //There will be a dot at the top whenever I need to save.
    //Or the code will not work since it's not updated.

//console.log(3 ** 2);
//console.log(4 ** 2);
    //The "**" is mulitpling by the power
//console.log(10 % 3);
//console.log(11 % 3);
//console.log(13 % 3);
    //The modulo operator is "%" which gives me the remaining value of the total.

// Math. class
// console.log(Math.pow(3.2));
// console.log(Math.pow(3,3));

// console.log(Math.sqrt(81));

// console.log(Math.random(100));
    // Anything after the "Math." is the class and there are a ton to use.
    // A bunch of examples of using "Math."

// console.log("100" + 100);

// variables

let age = 19;
    //camelCasing is using first letters are always lowercase
    //second and onward words MUST be uppercase for the first letter
let firstName = "Pedro";
let monthsInYear = 12;
let daysInYear = 365;

let ageInMonths = age * monthsInYear;
let ageInDays = age * daysInYear;

//console.log(ageInMonths);
// console.log(ageInDays);

numberOfLives = 3;
numberOfLives =+ 1;
numberOfLives =- 1;
    // Just an example of how to use it for like games and such :D

// Need to fix?
    // console.log("Hello my name is " + firstName + " and I am " + age + " years old");

    // console.log(`Hello my name is ${firstName} and I am ${age} years old`);

// console.log(6 * "hello");
    // NaN is 'Not a Number'

let fakeNumber = 5 / "number";
let otherNumber = fakeNumber * 10;

// console.log(otherNumber);

let ccNumber = 9839918312384839;

// Boolean is just two values = true or false;

// The code itself in java script actuall runs on phantom code
// Which is code that we as the user don't see but the machine does.

let isLoggedIn = true;
let isActive = false;

// This below is considered true
// console.log("21 pilots is as good as Deftones");

// This below is considered falst
// console.log("");

// AND && => both have to be true
// OR || => only One has to be true
// NOT ! => always goes to the logical opposite

// !isLoggedIn
// !isActive

// arrays are ways to store data

// let cheeses = [`brie`, `gouda`, `edam`, `pepperjack`];
// console.log(cheeses);

// Objects are stored in {}
// they can contain different types of data
// they're used throughout the web

const user = {
    username: 'fakeuser123',
    password: 'password123',
    id: 1273,
    isLoggedIn: false    
}

// console.log(user);

// Arrays always begin with '0' and onward depending how long the list is

let friends = [ 'Mai',
                'Jay',
                'Melanni',
                'Asura',
                'Juno' ]

// console.log(friends[0]);

// console.log(friends.length);
    // . "length" is self explanitory, it outputs the total amout of values inside the array.

const annoyingArray = [0, 1, [2,3], [4, [5,6]], 7, [8,9,10]];

// console.log(annoyingArray[2], [3]);

const testScores = [99, 13, 49, 21, 4, 23, 58];
const listOfFruits = ["Apple", "Melon", "Oranage", "Kiwi", "Mango", "Pineapple"];

// console.log(listOfFruits.length);
// console.log(`I'm feeling a bit hungry. I think I'll snag a ${listOfFruits[3]}.`);

// toString() converts an array into a single string
// console.log(listOfFruits.toString())

// .pop removes from the last item
// listOfFruits.pop();
// console.log(listOfFruits);

// .push will add items from the end of the list

// listOfFruits.push('peach');
// console.log(listOfFruits);

// .shift will remove the very first (0th) value of the array
// listOfFruits.shift();
// console.log(listOfFruits);

// .unshift will add it's value from the first value and shift everything else by 1
// listOfFruits.unshift('Pitaya');
// console.log(listOfFruits);

// .reverse will turn the entire list of values the other way.
// Basically the entire thing is flip the other way.
// listOfFruits.reverse();
// console.log(listOfFruits);

