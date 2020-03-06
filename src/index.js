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
