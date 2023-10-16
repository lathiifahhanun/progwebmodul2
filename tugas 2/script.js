document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var namaLengkap = document.getElementById("namaLengkap").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (namaLengkap || email || alamat) {
      alert("Data telah dimasukkan!");
    } else {
      alert("Harap isi semua kolom!");
    }
  });
