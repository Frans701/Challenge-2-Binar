const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

const getAngkaTerbesarKedua = (dataAngka) => {
  if (dataAngka === undefined) {
    return "Bro where is the parameter?";
  } else if (typeof dataAngka !== "object") {
    return "Error: Invalid data type";
  }

  let angkaBesar = dataAngka[0];
  let angkaBesarKedua = 0;

  for (let i = 1; i < dataAngka.length; i++) {
    if (dataAngka[i] > angkaBesar) {
      angkaBesarKedua = angkaBesar;
      angkaBesar = dataAngka[i];
    } else if (dataAngka[i] > angkaBesarKedua) {
      angkaBesarKedua = dataAngka[i];
    }
  }
  return angkaBesarKedua;
};

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
