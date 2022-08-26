function hitungTotalPenjualan(dataPenjualan) {
  let sum = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    sum += dataPenjualan[i].totalTerjual;
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
