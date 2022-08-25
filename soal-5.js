var string = "firstName,middleName,lastName";
var person = "frans wahyu virgawan";

var temps = person.split(" ");
var temp = string.split(","),
  obj = {};

for (let i = 0; i < temp.length; i++) {
  obj[temp[i]] = temps[i];
}

console.log(obj);
