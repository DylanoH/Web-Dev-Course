var nameVar = "Dylano";
console.log("nameVar", nameVar);

let nameLet = "Sammie";
console.log("nameLet", nameLet);

const nameConst = "Oona";
console.log("nameConst", nameConst);


//block scoping

var fullName = "Dylano Hartman";
if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
}
