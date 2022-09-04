const isValidPassword = (givenPassword) => {
  let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
  if (givenPassword === undefined) {
    return "Bro where is the parameter?";
  }
  if (typeof givenPassword !== "string") {
    return "Error: Invalid data type";
  } else if (regex.test(givenPassword)) {
    return regex.test(givenPassword);
  } else {
    return regex.test(givenPassword);
  }
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0)); // ERROR: Karena bukan tipe data string, Error: Invalid data type
console.log(isValidPassword()); // ERROR: undefined
