let number;

function bilangan(number) {
  let result;
  if (number % 2 == 0) {
    result = "bilangan genap";
  } else {
    result = "bilangan ganjil";
  }
  return result;
}

console.log(bilangan(5));
