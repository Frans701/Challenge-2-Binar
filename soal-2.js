const checkTypeNumber = (givenNumber) => {
  let result;
  if (givenNumber % 2 == 0) {
    result = "bilangan genap";
  } else if (givenNumber % 2 == 1) {
    result = "bilangan ganjil";
  } else {
    result = "masukkan bilangan";
  }
  return result;
};

console.log(checkTypeNumber(8));
