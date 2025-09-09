// strings are immutuable doesnot change directly

//length
let t = "JavaScript";
console.log(t.length);  // 10 (counts characters)

// 2. Changing Case
let word = "javascript";
console.log(word.toUpperCase()); // JAVASCRIPT
console.log(word.toLowerCase()); // javascript

// 3. Searching in Strings
let text = "I love JavaScript";
console.log(text.indexOf("love"));   // 2
console.log(text.includes("Java")); // true
console.log(text.startsWith("I"));  // true
console.log(text.endsWith("Script")); // true

// 4. Extracting Substrings
let text1 = "JavaScript";
console.log(text1.slice(0, 4));    // Java
console.log(text1.substring(4, 10)); // Script
console.log(text1.substr(4, 6));     // Script (old, not recommended)

// 5. Replacing
let text2 = "I love JavaScript";
console.log(text2.replace("love", "like")); // I like JavaScript

// 6. Splitting & Joining
let fruits = "apple,banana,mango";
let arr = fruits.split(","); 
console.log(arr); // ["apple", "banana", "mango"]

let joined = arr.join(" - ");
console.log(joined); // apple - banana - mango

// 7. Trimming
let name1 = "   Vishwraj   ";
console.log(name.trim()); // "Vishwraj" (removes spaces)

// 8. Repeat
console.log("Hi ".repeat(3)); // Hi Hi Hi

// es6 literal
let name2 = "Raj";
let age = 20;

let intro = `My name is ${name2} and I am ${age} years old.`;
console.log(intro);
// My name is Raj and I am 20 years old.

// nice questions
// print only Amount of price
let str = "Please give rs 1000";
let amount = str.slice(15);  
console.log(amount);        // "1000"
console.log(Number(amount)); // 1000