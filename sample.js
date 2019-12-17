
const getFrequencies1 = arr =>
	arr.reduce((map, item) => {
		map[item] = map[item] + 1 || 1;
		return map;
	}, {});

function getFrequencies(arr) {
	let out = {};
	for (let el of arr) {
		if (out[el]) out[el] += 1;
		else out[el] = 1;
	}
	return out;
};

//console.log(getFrequencies(["A", "B", "A", "A", "A"]));

function numInStr(arr) {
	var hasNumber = /\d/;
	return arr.filter(x => {
		return hasNumber.test(x);
	});

}

//console.log(numInStr(["1a", "a", "2b", "b"]));
function canNest(arr1, arr2) {
	let a = Math.min(...arr1);
	let b = Math.max(...arr1);
	let c = Math.min(...arr2);
	let d = Math.max(...arr2);
	return (a > c && b < d);
}

//console.log(canNest([1, 2, 3, 4], [0, 6]));

function reverseOdd(str) {
	return str.split(' ').map(word => (word.length % 2 == 0) ? word : word.split('').reverse().join('')).join(' ');
}
//console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));

function isPositiveDominant(a) {
	let vals = [...new Set(a)];
	let pos = vals.filter(num => num >= 0);
	let neg = vals.filter(num => num <= 0);

	return pos.length > neg.length;
}
function isPositiveDominant1(a) {
	return new Set(a.filter(x => x > 0)).size > new Set(a.filter(x => x < 0)).size
}

//console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));

function unmix(str) {
	if (!str) return "";
	if (str.length == 1) return str;
	return str[1] + str[0] + unmix(str.slice(2));
}

//console.log(unmix("123456"));


let myStr = "hello World ";
let reg = /hello/;


let quoteSample = "The quick brown fox jumps over the lazy dog.";
let onlyAlpha = /[a-z]ig/;
let result = quoteSample.match(onlyAlpha);

//console.log(result);
const isPandigital = num => {
	let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let numSeq = [...new Set(String(num).split(''))]
		.sort((a, b) => a - b)
		.map(x => Number(x));

	return numSeq.join('') === nums.join('');
}

function isPandigital1(num) {
	return new Set(num.toString().split('')).size === 10
}

//console.log(isPandigital(98140723568910));
function sexyTriplets(low, high) {
	let stack = [];
	for (let i = low; i <= high - 12; i++) {
		let i_6 = i + 6, i_12 = i + 12, i_18 = i + 18,
			tri = isP(i) && isP(i_6) && isP(i_12) && !(isP(i_18));
		if (tri) {
			stack.push([i, i_6, i_12]);
		}
	}
	return stack;
}

const isP = n => {
	for (let i = 2; i < n; i++)
		if (n % i === 0) return false;
	return n > 1;
}

//console.log(sexyTriplets(1, 19));


function convert(hours, minutes) {
	return hours * 60 * 60 + minutes * 60;
}
//console.log(convert(2, 0));

function set(arr) {
	let a = new Set([...arr]);
	return [...a];
}

//console.log(set([1, 3, 3, 5, 5]));
const uncensor1 = (str, vowels) => {
	const arr = vowels.split('');
	return str.replace(/\*/g, () => arr.shift());
};

function uncensor(str, vowels) {
	for (let i = 0; i < vowels.length; i++) {
		str = str.replace('*', vowels[i])
	}
	return str
}

//console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));


function firstVowel2(str) {
	var regex = /[a|e|i|o|u]/ig;
	return str.search(regex);
}
function firstVowel(str) {
	const vow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
	for (var i = 0; i < str.length; i++) {
		var j = str.charAt(i)
		if (vow.includes(j)) {
			return i
		}
	}
}

//console.log(firstVowel("apple"));

function findBrokenKeys(str1, str2) {
	let a = [];
	for (let i = 0; i <= str1.length; i++) {
		if (str1[i] != str2[i]) {
			a.push(str1[i]);
		}
	}
	return [...new Set([...a])];
}
//console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
function encrypt(word) {
	let nWord = word.split('').reverse();
	let preRst = nWord.map(x => {
		if (x == 'a') return 0;
		if (x == 'e') return 1;
		if (x == 'o') return 2;
		if (x == 'u') return 3;
		return x;
	}).join('');

	return preRst + 'aca';
}
//console.log(encrypt("banana") );
function lengthen1(s1, s2) {
	let a = s1.length;
	let b = s2.length;
	if (a < b) {
		let c = b - a;

		for (let i = 1; i <= c; i++) {
			s1 += s1.charAt(i);
		}
		return s1;
	} else {
		let d = a - b;

		for (let i = 1; i <= d; i++) {
			s2 += s2.charAt(i);
		}
		return s2;
	}

}
/*
const lengthen = (...strings) => {
  const [short, long] = strings.sort((a, b) => a.length - b.length);
  return short.repeat(long.length).slice(0, long.length);
};*/
function lengthen(s1, s2) {
	let longerStr = s1.length > s2.length ? s1 : s2;
	let shorterStr = s1.length < s2.length ? s1 : s2;
	let shorterStrLen = shorterStr.length;
	let formedStr = '';
	for (let i = 0; i < longerStr.length; i++) {
		formedStr += shorterStr[i % shorterStrLen];
	}
	return formedStr;
}
//console.log(lengthen("clap", "skipping"));
function charIndex(word, char) {
	if (word.indexOf(char) == -1) return undefined;
	return [word.indexOf(char), word.lastIndexOf(char)];
}
/*
const charIndex = (word, char) =>
  word.includes(char)
    ? [word.indexOf(char), word.lastIndexOf(char)]
    : undefined;
	*/
//console.log(charIndex("hello", "l") );

function isEqual(num1, num2) {
	if (typeof num1 == 'string' && typeof num2 == 'string') return false;
	return num1 === num2;
}
function isEqual(num1, num2) {
	return num1 === num2 && typeof (num1) === "number"
}
//console.log(isEqual(5, 6));
String.prototype.swapCase = function () {
	return Array.from(this, char =>
		char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
	).join('');
};
//console.log('Hello'.swapCase());
function realType(value) {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

//console.log(realType(null));

/*
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(-1));
console.log(animals);
*/

function sayHelloBye(name, num) {
	let a = name.charAt(0).toUpperCase() + name.slice(1);
	if (num === 1) {
		return `Hello ${a}`;
	} else {
		return `Bye ${a}`;

	}
}

//console.log(sayHelloBye("alon", 1));

function filterArray(arr) {
	return arr.filter(x => {
		return typeof (x) === 'number';
	});
}
//console.log(filterArray([1, 2, "a", "b"]));
// const distinct = (value, index, self) => {
// 	return self.indexOf(value) == index;
// }

// const years = [2016, 2017, 2017, 2016, 2019, 2018, 2019];
// const distinctYear = years.filter(distinct);
// console.log(distinctYear);






// const multiplicity = arr =>
// 	Array.from(
// 		arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map())
// 	);

function multiplicity(arr) {
	return [...new Set(arr)].map(x => {
		return [x, arr.filter(a => a == x).length]
	});
}

//console.log(multiplicity([1, 1, 1, 2, 2, 3]));
// function minRemovals(str1, str2) {
// 	return (str1 + str2).split``.sort().join``.replace(/(\w)\1/g, '').length;
// }

const sharedLetters = (str1, str2) =>
	str1.split('').filter(char => str2.includes(char));

const minRemovals = (str1, str2) =>
	str1.length + str2.length - sharedLetters(str1, str2).length * 2;
// console.log(minRemovals("abcde", "cab"));
// console.log(minRemovals("acb", "ghi"));



function getContainer(product) {
	let container
	switch (product) {
		case "Bread":
			container = "bag";
			break;
		case "Beer":
		case "Milk":
			container = "bottle"
			break;
		case "Cerials":
			container = "box"
			break;
		case "Eggs":
			container = "carton"
			break;
		case "Candy":
			container = "plastic"
			break;
		default:
			container = null
	}

	return container
}
//console.log(getContainer("Beer"));



function canConcatenate(arr, target) {
	let result = arr.reduce((total, index) => {
		return total.concat([...index])
	}, []);
	let result1 = result.sort((a, b) => b - a).join('').toString();
	let target1 = target.sort((a, b) => b - a).join('').toString();
	return result1 === target1;
}
function canConcatenate(arr, target) {
	return [].concat(...arr).sort().join('') === target.sort().join('');
}
//console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7]));
function volPizza(radius, height) {
	return Math.round(Math.pow(radius, 2) * height * Math.PI);
}
//console.log(volPizza(7, 2));
function hasValidUnitOfMeasure(product = {}) {
	const { unitOfMeasure, comment } = product;
	if (comment) {
		return true;
	}
	return (unitOfMeasure === 'L' || unitOfMeasure === 'PCE');
}
function hasValidUnitOfMeasure(product = {}) {
	const { unitOfMeasure, comment } = product
	return (Boolean(comment) || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}
//console.log(hasValidUnitOfMeasure({ "product": "Eggs", comment: "Eggs are too different in size" }));
function getSequence(low, high) {
	let result = [];
	for (let i = low; i <= high; i++) {
		result.push(i);

	}
	return result;
}

// const getSequence = (low, high) =>
// 	Array.from(Array(high - low + 1), (x, i) => i + low);
//console.log(getSequence(1, 5));
function reverseCapitalize(str) {
	return [...str].map(x => x.toUpperCase()).reverse().join('');

}
//console.log(reverseCapitalize("abc"));
function squaed(b) {
	return Math.pow(b, 2);
}
/*
function owofied(sentence) {
	let a = sentence.replace(/i/g, "wi");
	let b = a.replace(/e/g, "we");
	return `${b} owo`;
}
function owofied(sentence) {
	return sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
} */

function owofied(sentence) {
	let arr = [...sentence];
	let newArr = arr.map(x => {
		if (x == 'i') {
			return "wi";
		}
		if (x == 'e') {
			return "we"
		}
		return x;
	})
	return newArr.join('') + " " + "owo";
}

//console.log(owofied("I'm gonna ride 'til I can't no more"));
function getTotalPrice(groceries) {
	let a = groceries.map(x => {
		return x.price * x.quantity;
	});
	let b = a.reduce((total, index) => total + index);
	return Number(b.toFixed(1));
}
// console.log(getTotalPrice([
// 	{ product: "Milk", quantity: 1, price: 1.50 },
// 	{ product: "Eggs", quantity: 12, price: 0.10 },
// 	{ product: "Bread", quantity: 2, price: 1.60 },
// 	{ product: "Cheese", quantity: 1, price: 4.50 }
// ]));


function toArray(num) {
	let a = [...num.toString()];
	return a.map(x => Number(x));
}

function toNumber(arr) {
	return arr.join('');
}

// console.log(toArray(235));
// console.log(toNumber([2, 3, 5]));
function societyName(friends) {
	return friends.map(x => x[0]).sort().join('')
}
//console.log(societyName(["Adam", "Sarah", "Malcolm"]));
function convertBinary(str) {
	return str
		.replace(/[a-m]/gi, '0')
		.replace(/[n-z]/gi, '1');
}
//console.log(convertBinary("house"));
function combinations(items) {
	var total = 1;
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] == 0) {
			total += arguments[i];
		} else {
			total *= arguments[i];

		}
	}
	return total;
}

function combinations(items) {
	return [...arguments].reduce((acc, item) => item === 0 ? acc : acc * item)
}
//console.log(combinations(6, 7, 0));
function spelling(str) {
	let res = [];
	for (let i = 1; i <= str.length; i++) {
		let newStr = str.substring(0, i);
		res.push(newStr);
	}
	return res;
}
function spelling(str) {
	return str.split('').map((c, i) => str.slice(0, i + 1));
}

//console.log(spelling("bee"));


function isOmnipresent(arr, val) {
	return arr.every((x, i) => {
		return x.includes(val);
	})
}

//console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
function toObject(arr) {
	var rv = {};
	for (var i = 0; i < arr.length; ++i) {
		rv
	}

	return rv;
}
// function countLayers(rug) {
// 	let allLayers = {};
// 	let numOfLayers = 0;
// 	for (let i = 0; i < rug.length; i++) {
// 		if (!(allLayers.hasOwnProperty(rug[i]))) {
// 			allLayers[rug[i]] = true;
// 			numOfLayers++;
// 		}
// 	}
// 	return numOfLayers;
// }
const countLayers = rug => new Set(rug).size;

/*
console.log(countLayers([
	"AAAAAAAAA",
	"ABBBBBBBA",
	"ABBAAABBA",
	"ABBBBBBBA",
	"AAAAAAAAA"
]));
*/

const lookAndSay = str => {
	console.log(str.match(/(\d)\1*/g));


	return str
		.match(/(\d)\1*/g)
		.map(group => group.length + group[0])
		.join('');


}


//console.log(lookAndSay("1211"));
// regex  5 digits long exactly and only contain numbers.
// validZipcode

function isValid(zip) {
	const x = /^\d{5}$/;
	return zip.match(x) == null ? false : true;
}
//console.log(isValid("590010"));

function reverseCase(str) {
	return [...str].map(x => {
		if (x.toUpperCase() == x) {
			return x.toLowerCase();
		} else {
			return x.toUpperCase()
		}
	}).join('');
}
//console.log(reverseCase("Happy Birthday"));
function joinPath(portion1, portion2) {
	return `${portion1.replace('/', '')}/${portion2.replace('/', '')}`;
}
//console.log(joinPath("portion1/", "portion2"));
function isPrefix(word, prefix) {
	let pef = prefix.substring(0, prefix.length - 1);
	return word.startsWith(pef);
}

function isSuffix(word, suffix) {
	let suf = suffix.substring(1, suffix.length);
	return word.endsWith(suf);

}

function isPrefix(word, prefix) {
	return word.startsWith(prefix.replace("-", ""));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.replace("-", ""));
}
//console.log(isPrefix("automation", "auto-"));
//console.log(isSuffix("arachnophobia", "-phobia"));
function indexShuffle(str) {
	let a = [];
	let b = [];
	for (let i = 0; i < str.length; i++) {
		if (i % 2 == 0 || i == 0) {
			a.push(str[i]);
		} else {
			b.push(str[i])
		}

	}
	return [...a, ...b].join('');
}
//console.log(indexShuffle("abcdefg"));
function isSpecialArray(arr) {
	let a = [];
	let b = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0 || i == 0) {
			a.push(arr[i]);
		} else {
			b.push(arr[i])
		}
	}
	return (a.every(x => x % 2 == 0) && b.every(x => x % 2 != 0)) ? true : false;
}
// let isSpecialArray = a => a.every((v, i) => v % 2 == i % 2);
//console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
function chatroom(users) {
	let length = new Set([...users]).size;
	if (length == 0) {
		return "no one online";
	}
	if (length == 1) {
		return `${users[0]} online`
	}
	if (length == 2) {
		return `${users[0]} and ${users[1]} online`

	}
	if (length > 2) {
		return `${users[0]},${users[1]} and ${length - 2} more online`

	}
}
//console.log(chatroom(["s234f", "mailbox2", "lalsl"]));
function capToFront(s) {
	let a = [];
	let b = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i].toUpperCase() == s[i]) {
			a.push(s[i]);
		} else {
			b.push(s[i])
		}

	}
	return [...a, ...b].join('')
}

function capToFront(s) {
	let lowerCase = [...s].filter(l => l === l.toLowerCase())
	let upperCase = [...s].filter(l => l === l.toUpperCase())
	return [...upperCase, ...lowerCase].join("")
}
//console.log(capToFront("hApPy"));
function leftDigit(num) {
	return + num.match(/\d+/)[0];
}
//Number(num.match(/[0-9]/)[0])     Number(str.match(/[\d]/));
//console.log(leftDigit("TrAdE2W1n95!"));
function findNemo(sentence) {
	let newSentence = sentence.split(" ");
	for (let i = 0; i < newSentence.length; ++i) {
		if (newSentence[i] === "Nemo") {
			return `I found Nemo at ${i + 1}!`
		}
	}
	return "I can't find Nemo :("
}
//console.log(findNemo("Oh, hello !"));
function isSymmetrical(num) {
	let a = String(num).split('').reverse().join('');
	return Number(a) === num;

}
//console.log(isSymmetrical(7227));

function maximumScore(tileHand) {
	let arr = tileHand.map(x => x.score);
	return arr.reduce((total, index) => total + index);

}
/*
console.log(maximumScore([
	{ tile: "N", score: 1 },
	{ tile: "K", score: 5 },
	{ tile: "Z", score: 10 },
	{ tile: "X", score: 8 },
	{ tile: "D", score: 2 },
	{ tile: "A", score: 1 },
	{ tile: "E", score: 1 }
]));
*/

function hasValidPrice(products) {
	if (products == undefined | products == null) {
		return false;
	}
	let { product, price } = products;

	if (price < 0) {
		return false;
	}
	return Number(price) === price;
}

function hasValidPrice(product) {
	if (!product) return false
	return (product.price === +product.price && product.price >= 0)
}
//console.log(hasValidPrice());
function mauriceWins(mSnails, sSnails) {
	let count1 = 0;
	let count2 = 0;
	if (mSnails[0] > sSnails[2]) {
		count1++;
	} else {
		count2++;
	}
	if (mSnails[1] > sSnails[0]) {
		count1++;
	} else {
		count2++;
	}
	if (mSnails[2] > sSnails[1]) {
		count1++;
	} else {
		count2++;
	}
	return count1 > count2;
}
//const mauriceWins = (mS, sS) => mS[1] > sS[0] && mS[2] > sS[1]
//console.log(mauriceWins([3, 5, 10], [4, 7, 11]));
function countVowels(str) {
	let vowelss = ['a', 'e', 'i', 'o', 'u'];
	return [...str].filter(x => {
		return vowelss.indexOf(x) != -1
	}).length;
}
//regex for vowels str.match(/[aeiou]/g).length;
function countVowels(str) {
	return str.match(/[aeiou]/g).length;
}
//console.log(countVowels("Palm"));
function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((total, index) => total + index) / arr.length);
}

//console.log(isAvgWhole([1, 3,9]));
function getAbsSum(arr) {
	return arr.reduce((total, index) => total + Math.abs(index), 0)
}
//console.log(getAbsSum([-1]));
function asciiCapitalize(str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		let key = str.charCodeAt(i);
		if (key % 2 == 0) {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i].toLowerCase();
		}

	}
	return newStr;
}
/*
const asciiCapitalize = s => 
	[...s].map(x => x.charCodeAt(0)%2 ? x.toLowerCase(): x.toUpperCase()).join("")
	*/
//console.log(asciiCapitalize("Oh what a beautiful morning."));
function doubleChar(str) {
	return [...str].map(x => {
		return `${x}${x}`;
	}).join('');
}
//console.log(doubleChar("Hello World!"));
function totalVolumea(...boxes) {

	return boxes.map(x => {
		return [...x].reduce((total, index) => total * index)
	}).reduce((a, i) => a + i);
}

const totalVolume = (...boxes) =>
	boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);
//console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
function countOnes(...matrix) {
	return matrix.reduce((total, index) => total.concat(...index), []).filter(x => x == 1).length;
}
/*
console.log(countOnes([
	[1, 0],
	[0, 0]
]));
*/
function factorial(int) {
	if (int == 1) {
		return 1;
	}
	return int * factorial(int - 1);
}

//console.log(factorial(5));

function duplicate(arr) {
	return arr.filter((el, index, arrr) => {
		return arrr.indexOf(el) == index;
	})
}
//console.log(duplicate([1, 5, 9, 1, 5, 6, 9, 6]));

function custoSort(arr, key) {
	return arr.sort((a, b) => {
		return b.id - a.id;
	})
}

//console.log(custoSort([{ id: 2 }, { id: 3 }, { id: 1 }], 'id'));
function twinWord(a, b) {
	return [...a].sort().join('') == [...b].sort().join('');
}
//console.log(twinWord('lookout', 'outlook'));

