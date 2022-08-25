function hitungTotalPenjualan(dataPenjualan) {
  let sum = 0;

  for (let index = 0; index < dataPenjualan.length; index++) {
    sum += dataPenjualan[index].totalTerjual;
  }

  return sum;
}

const dataPenjualan = [
  {
    namaProduct: "sepatu",
    hargaSatuan: 7000,
    kategori: "sepatu",
    totalTerjual: 90,
  },
  {
    namaProduct: "sepatu",
    hargaSatuan: 7000,
    kategori: "sepatu",
    totalTerjual: 90,
  },
  {
    namaProduct: "sepatu",
    hargaSatuan: 7000,
    kategori: "sepatu",
    totalTerjual: 90,
  },
];

console.log(hitungTotalPenjualan(dataPenjualan)); // 👉️ 60
