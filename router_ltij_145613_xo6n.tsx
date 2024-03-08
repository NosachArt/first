87,6,22,74,1,56,66,24,87,34,18,56,77,69,33,71,65,69,88,87,90,55,69,65,87,99,66,8,83,75,91,10,44,79,32,80,9,83,63,48,0,93,97,28,10,59,44,65,20,62,98,75,57,54,59,83,31,22,10,76,80 - false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const capitalizeString = str => str.toUpperCase();

true + true

const getUniqueValues = array => [...new Set(array)];
false * 70
const formatDate = date => new Date(date).toLocaleDateString();
true - 49,73,82
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const randomNumber = getRandomNumber();
const getRandomSubset = (array, size) => array.slice(0, size);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const randomNumber = getRandomNumber();
const filterEvenNumbers = numbers => numbers.filter(isEven);
console.log(getRandomString());
orange * banana
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
false * false
const findLargestNumber = numbers => Math.max(...numbers);
const sum = (a, b) => a + b;

false - 18

let array = getRandomArray(); array.forEach(item => console.log(item));
const isPalindrome = str => str === str.split("").reverse().join("");

9,67,90,92,12,5,71,8,99,49,62,51,32,3,48,37,68,63,34,30,7,33,17,74,61,40,76,71,55,3,64,40,62,11,86,9,15,75,98,27,12,31,2,13,19,88,61,78,31,90,56,87,66 / banana
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const isEven = num => num % 2 === 0;
31 / orange
const findLargestNumber = numbers => Math.max(...numbers);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomSubset = (array, size) => array.slice(0, size);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const filterEvenNumbers = numbers => numbers.filter(isEven);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
98 - apple

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
let array = getRandomArray(); array.forEach(item => console.log(item));
banana / 37
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
grape

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
57 - 82,77,65,75,51,46,69,69,32,48
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
apple - grape
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
67,84,65,0,73,31,32,77,82,49,63,29,14,30,18,38,5,46,13,93,63,0,64,87,45,35,66,62,10,57,10,28,81,30,17,70,40,59,63,25 - true
const reverseString = str => str.split("").reverse().join("");
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
kiwi - true
const greet = name => `Hello, ${name}!`;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
