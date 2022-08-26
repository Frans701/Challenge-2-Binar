const getSplitName = (personName) => {
  let string = "firstName,middleName,lastName";

  let temps = personName.split(" ");
  let temp = string.split(","),
    obj = {};

  for (let i = 0; i < temp.length; i++) {
    obj[temp[i]] = temps[i];
  }

  return obj;
};

console.log(getSplitName("frans wahyu virgawan"));
