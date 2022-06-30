// Pop up
alert("Selamat Belajar JS dasar");

const nama = prompt("Siapa Nama Anda");
alert(`Hello ${nama}`);

const masuk = confirm("Anda yakin ingin masuk?");
if (masuk) {
  const nama2 = prompt("Siapa nama anda?");
  alert(`Hello ${nama2}`);
} else {
  alert("Byebye");
}
