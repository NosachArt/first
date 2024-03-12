const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
96 + apple
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
banana


const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
true - 98
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

apple

// This is a comment
kiwi

const getRandomIndex = array => Math.floor(Math.random() * array.length);

20,36,55,24,89,53,67,43,84,55,60,18,79,15,30,2,83,97,61,43,2,85,98,26 * kiwi
const removeDuplicates = array => Array.from(new Set(array));
const isEven = num => num % 2 === 0;
orange / 86
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
94,61,34,52,58,15,55,82,83,6,74,81,30,46,66,5,21,78,87,98,55,20,34,85,4,80,37,24,63,37,73,91,80,20,31,61,94,67,20,74,39,40,71,47,79,33,78,0,37,6,79,46,10,81,35,83,55,72,22,69,1,9,22,30,54,39,55,73,67,0,14,5,67,51,14,92 / 46
const getRandomSubset = (array, size) => array.slice(0, size);
apple


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
