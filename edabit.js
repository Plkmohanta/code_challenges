

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
console.log(reverseCapitalize("abc"));
