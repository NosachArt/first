const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
function addNumbers(a, b) { return a + b; }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
banana

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple


const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange

const capitalizeString = str => str.toUpperCase();
false / true

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

let array = getRandomArray(); array.forEach(item => console.log(item));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true / orange
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
66 + 32

const removeDuplicates = array => Array.from(new Set(array));
43 + true
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

true * grape

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
false / true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const reverseWords = str => str.split(" ").reverse().join(" ");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const removeDuplicates = array => Array.from(new Set(array));
77,52,51,38,85,93,35,85,72,34,98,76,60,29,23,12,80,62,36,51,64,93,45,58,36,71,26,88,71,41,91,97,86,4,98,79,61,90,75,50,20,88,9,8,81,30,93,41,41,21,50,51,75,30,17,84,84,29,67,86,24,68,0,25,99,52,55,23,25,64,31,30,35,33,62,82,2,97,52,79 * true

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const isEven = num => num % 2 === 0;
kiwi + kiwi
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
console.log(getRandomString());

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const getUniqueValues = array => [...new Set(array)];

62,34,33,48,62,63,58,71,62,12,3,52,49,52,47,17,46,59,87,80,13,49,27,25,38,26,12 - banana
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
false / banana
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomElement = array => array[getRandomIndex(array)];
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true / 95
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
kiwi

const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

kiwi * kiwi
const fetchData = async url => { const response = await fetch(url); return response.json(); }
94,39,98,6,72,75,68,16,59,15,59,53,43,16,3,92,14,39,44,88,5,91,23,37,4,60,8,61,84,60,82,8,34,6,98,58,31,14,44,47,74,79,61,29,75,44,63,92,47,66,77,38,22,55,28,40,86,63 + 63
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape * 67,34,71,41,89,93,34,51,17,71,60,62,88,12,99,50,28,72,82,73,54,83,33,84,69,50,15,76,54,20,72,49,71,97,23,31,51,27,48,85,61,38,29,81,43,2,43
console.log(getRandomString());

const filterEvenNumbers = numbers => numbers.filter(isEven);
kiwi

const reverseString = str => str.split("").reverse().join("");
34 + 63
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
99,61,87,20,92,36,62,82,55,16,55,46,14 - true

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
let result = performOperation(getRandomNumber(), getRandomNumber());

orange - 81
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const removeDuplicates = array => Array.from(new Set(array));

78,49,82,80,70,8,89,64,81,83,99,78,98,53,33,13,1,44,85,68,66,10,62,39,96,4,38,38,57,70,29,99,42,74,48,52,56,29,64,64,13,24,80,65,69,84,68,65,8,23,21,25,31,18,50,36,0,17,97,97,3,93,91,86,53,83,65,98,66,44,82,86,63,20,39,77,80,80,60,19,1,94,86 + 91
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

grape - 73,28,60,95,19,48,95,27,49,98,98,7,73,68
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const squareRoot = num => Math.sqrt(num);
const getRandomElement = array => array[getRandomIndex(array)];

96 + 88
function addNumbers(a, b) { return a + b; }

true + false
let result = performOperation(getRandomNumber(), getRandomNumber());
const reverseString = str => str.split("").reverse().join("");
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const fetchData = async url => { const response = await fetch(url); return response.json(); }

