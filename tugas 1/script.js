document.getElementById("jumlah").addEventListener("click", function () {
  var BilanganPertama = parseFloat(
    document.getElementById("BilanganPertama").value
  );

  var BilanganKedua = parseFloat(
    document.getElementById("BilanganKedua").value
  );

  if (BilanganPertama && BilanganKedua) {
    var hasil = BilanganPertama + BilanganKedua;
    alert("Hasil Penjumlahan = " + hasil);
  } else {
    alert("Masukkan angka yang benar");
  }
});

document.getElementById("ulangi").addEventListener("click", function () {
  document.getElementById("BilanganPertama").value = "";
  document.getElementById("BilanganKedua").value = "";
});
