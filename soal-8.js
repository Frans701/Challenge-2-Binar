const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualanNovel) {
  let sumHargaBeli = [];
  let sumModal = 0;
  let sumBarang = [];
  let sumHargaBeliStok = [];
  let sumHargaJualStok = [];
  let sumKeuntungnAkhir = 0;
  let percentage = 0;

  for (let i = 0; i < dataPenjualanNovel.length; i++) {
    // Jumlah Modal
    sumBarang[i] =
      dataPenjualanNovel[i].sisaStok + dataPenjualanNovel[i].totalTerjual;
    sumHargaBeli[i] = dataPenjualanNovel[i].hargaBeli * sumBarang[i];
    sumModal += sumHargaBeli[i];

    // Modal harga beli
    sumHargaBeliStok[i] =
      dataPenjualanNovel[i].totalTerjual * dataPenjualanNovel[i].hargaBeli;
    // Hasil harga jual
    sumHargaJualStok[i] =
      dataPenjualanNovel[i].totalTerjual * dataPenjualanNovel[i].hargaJual;

    // Untung
    sumKeuntungnAkhir += sumHargaBeliStok[i] + sumHargaJualStok[i];
  }

  percentage = (sumKeuntungnAkhir / sumModal) * (100 / 100);

  return ` ${sumKeuntungnAkhir}, ${sumModal}, ${percentage}`;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
