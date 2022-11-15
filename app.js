// 1. შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
const numbers = [2, 8, 6, 10, 20];

const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
const length = numbers.length;

const average = sum / length;
let arrSum = 0;

// for (let i = 0; i < length; i++) {
// 	console.log(numbers[i], i);
// 	arrSum = arrSum + numbers[i];
// 	console.log(arrSum);
// }

// console.log(arrSum, "after for", sum);

// console.log(average);
// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.

const students = [
	{
		name: "giorgi",
		age: 20,
	},
	{
		name: "tea",
		age: 22,
	},
	{
		name: "ana",
		age: 24,
	},
	{
		name: "nika",
		age: 25,
	},
	{
		name: "lela",
		age: 27,
	},
];
// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// age - რიცხვითი მნიშვნელობა
// email -  სტრინგ ტიპის მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი

const person = {
	firstName: "giorgi",
	lastName: "zarnadze",
	age: 20,
	email: "example@gmail.com",
	phoneNumbers: [123456789, 9876432121],
};
// 4. console.log ში გამოიტანეთ სტრინგი "User name is (#3 დავალების firstName  მნიშვნელობა), user age is (#3 დავალების age-ის მნიშვნელობა),  user phone number is (#3 დავალების phoneNumbers -ის პირველი ელემენტის მნიშვნელობა)"

const text = `User name is ${person.firstName} ${person.lastName} user age is ${person.age},  user phone number is ${person.phoneNumbers[0]}`;
// console.log(text);

let productTotal = 150;
let deliveryPrice;
let distance = 100;

// if (productTotal === 100) {
// 	console.log("===100");
// 	deliveryPrice = 40;
// } else {
// 	console.log("!==100");
// 	deliveryPrice = 90;
// }

// if (productTotal < 100) {
// 	console.log("less than 100");
// 	deliveryPrice = 50;
// } else if (productTotal >= 100 && productTotal < 200) {
// 	console.log(">=100 && < 200");
// 	deliveryPrice = 40;
// } else if (productTotal >= 200 && productTotal < 400) {
// 	console.log(">=200 && < 400");
// 	deliveryPrice = 30;
// } else {
// 	console.log(">=400");
// 	deliveryPrice = 10;
// }

// console.log(deliveryPrice);

// switch (productTotal) {
// 	case 100:
// 	case 150:
// 		console.log("===10%");
// 		break;
// 	case 200:
// 		console.log("===20%");
// 		break;
// 	case 300:
// 		console.log("===30%");
// 		break;
// 	case 400:
// 		console.log("===40%");
// 		break;
// 	case 500:
// 		console.log("===50%");
// 		break;
// 	default:
// 		console.log("===0%");
// 		break;
// }

const countries = [
	{
		name: "Georgia",
		currencies: {
			GEL: {
				name: "lari",
				symbol: "₾",
			},
		},
		capital: ["Tbilisi"],
		flag: "https://flagcdn.com/w320/ge.png",
		map: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
	},
	{
		name: "Federal Republic of Germany",
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€",
			},
		},
		capital: ["Berlin"],
		flag: "https://flagcdn.com/w320/de.png",
		map: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
	},
	{
		name: "Ukraine",
		currencies: {
			UAH: {
				name: "Ukrainian hryvnia",
				symbol: "₴",
			},
		},
		capital: ["Kyiv"],
		flag: "https://flagcdn.com/w320/ua.png",
		map: "https://goo.gl/maps/DvgJMiPJ7aozKFZv7",
	},
	{
		name: "United Kingdom of Great Britain and Northern Ireland",
		currencies: {
			GBP: {
				name: "British pound",
				symbol: "£",
			},
		},
		capital: ["London"],
		flag: "https://flagcdn.com/w320/gb.png",
		map: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
	},
];

for (let i = 0; i < countries.length; i++) {
	// console.log(countries[i].name);

	if (countries[i].name === "Georgia") {
		continue;
	}

	if (countries[i].name === "Ukraine") {
		break;
	}

	// console.log(countries[i].capital);
}

// for (let i = 0; i < 10; i++) {
// 	console.log("text", i);
// }

// console.log("after for");

// let a = 1;
// while (a < 10) {
// 	console.log(a, "text");
// 	a *= 2;
// }

// console.log("after while", a);

// let b = 1;
// do {
// 	console.log("do while", b);
// 	b++;
// } while (b < 10);

// console.log("after do while");
