// Task 1
var array = new Array(20);

for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
}

for (let i = 0; i < array.length; i++) {
    console.log(`[${i + 1}] - ${array[i]}`)
}

array.sort(function (a, b) {
    return b - a;
});

for (let i = array.length / 2; i < array.length; i++) {
    array[i] = 0;
}

let containsMultipleOf7 = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 7 === 0) {
        containsMultipleOf7 = true;
        break;
    }
}

if (containsMultipleOf7) {
    console.log("The array contains a multiple of 7.");
} else {
    console.log("The array does not contain a multiple of 7.");
}

array.splice(0, 3);

let numEven = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        array++;
    }
}

console.log("Number of even numbers in the array: " + numEven);

let hasDuplicates = false;
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            hasDuplicates = true;
            break;
        }
    }
    if (array) {
        break;
    }
}

if (hasDuplicates) {
    console.log("The array has duplicates.");
} else {
    console.log("The array does not have duplicates.");
}





// Task 2
let inputString = prompt("Enter a string:");
let numSpaces = 0;

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
        numSpaces++;
    }
}

console.log("Number of spaces in the string: " + numSpaces);

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString)

let numWords = inputString.split(" ").length;
console.log("Number of words in the string: " + numWords);

function convertToAbbreviation(phrase) {
    let words = phrase.split(" ");

    let abbreviation = "";

    for (let i = 0; i < words.length; i++) {
        abbreviation += words[i][0].toUpperCase();
    }

    return abbreviation;
}

let inputPhrase = "cascading style sheets";
let abbreviation = convertToAbbreviation(inputPhrase);

console.log(abbreviation);

function isPalindrome(str) {
    let cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();

    return cleanedStr === cleanedStr.split('').reverse().join('');
}

let isPalindromeFlag = isPalindrome("око");
console.log("Is the string a palindrome? " + isPalindromeFlag);

function parseUrl(url) {
    let parsedUrl = new URL(url);

    let protocol = parsedUrl.protocol;
    let domain = parsedUrl.hostname;
    let path = parsedUrl.pathname;

    path = path.substring(1);

    console.log("Protocol: " + protocol);
    console.log("Domain: " + domain);
    console.log("Path: " + path);
}

let url = "https://www.softserveinc.com/uk-ua";
parseUrl(url);