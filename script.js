//alert("It's working");

//var welcome =  "Hello there!"
//console.log(welcome);

//let greeting = "Hello, human!";
//greeting = "Good Morning!";
//console.log(greeting); 

//const constant = "I am a constant variable!";
//console.log(constant); 

// defining the function
//function sayHello() {
//    console.log("Hello!");
//}

// variable declared in global scope
//let yourName = "Bob";

//function sayHi() {
//    console.log("Hi " + yourName)
//}

//sayHi(); 

//function sayBye() {
//   console.log("bye " + yourName)
//}

//sayBye();

// declare the function with two parameters
//function add(a, b) {
//    return a + b;
//}

// call the function with two arguments, and assign the returned value to a result variable
//let result = add(2, 3);

// use the result variable
//console.log(result);



//function strLength(myString) {
//    var num = myString.length;
//    console.log(num);
//}

//var bday = "Happy Birthday!";
//strLength(bday);

//function findFavorite(myString) {
//    var num = myString.indexOf("favorite");
//    console.log(num);
//}

//var pizzaStr = "Pizza is my favorite food";
//findFavorite(pizzaStr);

//function upperCase(myString) {
//    var upperString = myString.toUpperCase();
//    console.log(upperString);
//}

//var sentence = "It is a wonderful day!";
//upperCase(sentence);

//function lowerCase(myString) {
//    var lowerString = myString.toLowerCase();
//    console.log(lowerString);
//}

//var sentence2 = "It is a WONDERFUL day!";
//lowerCase(sentence2);

//function splitSpaces(str) {
//    var reslt = str.split(" ");
//    console.log(reslt);
//}

//var myStr = "How are you doing today?";
//splitSpaces(myStr);

//var a = "10";
//var b = "20"
//var c = parseInt(a) + parseInt(b);
//console.log(c);

function wordSearcher(sentence, word){
    // convert the sentence to lower case
    sentence = sentence.toLowerCase();

    // convert the word to lower case
    word = word.toLowerCase();

    // split the sentence into individual words
    let wordsInSentence = sentence.split(" ");

    // using the indexOf() method to find the matching index within the words array
    let searchIndex = wordsInSentence.indexOf(word);

        // check if a match was found
        if (searchIndex < 0) {
            console.log("Word was not found");
        }
        else {
            console.log("Word found at pos " + searchIndex);
        }
}
// Test Case 2
wordSearcher("Life is like a box of chocolates", "water");



