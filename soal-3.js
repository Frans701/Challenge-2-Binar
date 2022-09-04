const checkEmail = (email) => {
  let regex = new RegExp(
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
  );
  if (email === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (regex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322))); // ERROR: Invalid dan dan return ke check type number berupa error
console.log(checkEmail()); // ERROR: Bro where is the parameter?
