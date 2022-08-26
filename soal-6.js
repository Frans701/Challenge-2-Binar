const dataAngka = [1, 2, 3, 4, 5];

const getAngkaTerbesarKedua = (dataAngka) => {
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
