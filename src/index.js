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
