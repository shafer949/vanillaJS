import "./styles.css";
import data from "../data.json";
//const data = require("../data.json");

//const = unchanging - constant
//let = localized scoped
//var = not used
//More info: https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

//undefined = not decalred
//null = no value/emopty value

//objects
let user = {
  name: "Name",
  address: {
    home: "123 1st StaticRange",
    work: "123213123 tet sdrv"
  }
};
console.log(user);

//arrays
//keep order which values are set
let grades = [99, 100, 55, 87];
console.log(grades);

//functions
function myFunc() {
  console.log("YO");
}
myFunc();

let family = [
  {
    familyType: "Dads",
    aunts: {},
    uncles: {}
  },
  {
    familyType: "Moms"
  }
];

console.log(family);

//by default this object below will be placed in order
let a = {
  10: "10",
  5: "5",
  7: "7"
};
console.log(a);
//BASECOD10 will prevent the auto sorting in the above object

//trick question - this is an object
console.log(typeof null);

console.log(1 + "one"); //appends text to number 1
console.log(1 + "1"); //converts string number as a number but won't do math
console.log(1 + 1); //math works on 2 numbers

//json data
console.log(data);

console.log(data[0].age);
data[0].age = data[0].age + 1;
console.log(data[0].age);
console.log(data[2]["age"]);

//will show the same thing
console.log(data[0].friends);
console.log(data[0]["friends"]);

console.log(data);
data[10] = "Hi"; //will add to index of 10 and mark any previous as undfined if not already defined
console.log(data);

//tricks in JS --see video - https://www.destroyallsoftware.com/talks/wat
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});

//logical operators: "&&", "||", "!", ">", "<", "===", "!=="
let show = true;
let number = 12;
if (show && number === 12) {
  console.log("Show Me");
} else if (show === undefined || !number) {
  console.log("Not defined");
} else {
  console.log("Don't Show Me");
}

const translation = "pl-PL";
switch (translation) {
  case "pl-PL":
    console.log("Polish Translation");
    break;
  case "fr-FR":
    console.log("French Translation");
    break;
  case "en-US":
  case "au-AU":
    console.log("English Translation");
    break;
  default:
    console.log("English Translation");
}

let getIceCream = true;
let leaveTheHouse;

leaveTheHouse = getIceCream ? true : false;
console.log(leaveTheHouse);

const food = "tacos";
if (food === "tacos") {
  console.log("Feed Don!");
} else if (food === "pizza") {
  console.log("Feed Meghan!");
} else {
  console.log("Feed Meena!");
}

switch (food) {
  case "tacos":
    console.log("Feed Don!");
    break;
  case "pizza":
    console.log("Feed Meghan!");
    break;
  default:
    console.log("Feed Meena!");
}

let meenaPays;
meenaPays = food === "tacos" ? true : false;
console.log(meenaPays);

//different ways to add text
console.log("Meena has to pay today:" + meenaPays);
console.log(`Meena has to pay today:${meenaPays}`);

//functions - non-arrow
//these functions have to explicitly bind to this
function eatTacos() {
  return "Yummy!";
}
const returnValue = eatTacos();
console.log(returnValue);

console.log(eatTacos); //will show function
console.log(eatTacos()); //will show return value if defeined otherwise undefined will show

function add(value1, value2) {
  return value1 + value2;
}

console.log(add(1, 4));

//arrow function
//arrow functions bind this
const add2 = (value1, value2) => {
  return value1 + value2;
};
console.log(add2(1, 4));

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const wordLength = materials.map(material => material.length);
console.log(wordLength);

console.log(
  data.forEach(value => {
    console.log(value.gender);
  })
);

console.log(data.indexOf({ gender: "female" }));

console.log(
  data.find(value => {
    return value.gender === "female";
  })
);

console.log(data.map(friends => friends.name));

const friends = [
  { firstname: "Mickey", lastname: "Mouse", age: 25 },
  { firstname: "Minnie", lastname: "Mouse", age: 25 },
  { firstname: "Donald", lastname: "Duck", age: 55 }
];

console.log(
  friends.map(friend => [friend.firstname, friend.lastname].join(" "))
);

//returns only the first found element value
console.log(friends.find(friend => friend.lastname === "Mouse"));

const friendsAges = [15, 25, 55];
const isOver21 = currentValue => currentValue > 21;
console.log("Over the age of 21: " + friendsAges.every(isOver21));

let sum = [0, 1, 2, 3].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

const passedTheTest = currentValue => currentValue > 80;
const array = [70, 79, 90, 100];
console.log("Everyone passed the test: " + array.every(passedTheTest));

const addMethod = value => console.log(value);
const callback = (fn, value) => {
  let sum = value + 10;
  fn(sum);
};

callback(addMethod, 10);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
const result = words.filter(word => word.length > 6);
console.log(result);

let numbers = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
const isPrime = num => {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
};
console.log(numbers.filter(isPrime));
