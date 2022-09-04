const getSplitName = (personName) => {
  if (typeof personName !== "string") {
    return "ERROR: Invalid Data Type";
  }

  let splitted = personName.split(" ");

  if (splitted.length > 3) {
    return "ERROR: This function is only for 3 characters name";
  } else if (splitted.length >= 3) {
    return {
      firstName: splitted[0],
      middleName: splitted[1],
      lastName: splitted[2],
    };
  } else if (splitted.length >= 2) {
    return {
      firstName: splitted[0],
      middleName: null,
      lastName: splitted[1],
    };
  } else if (splitted.length >= 1) {
    return {
      firstName: splitted[0],
      middleName: null,
      lastName: null,
    };
  }
};

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
