// Operator Logika non Boolean
/* Sebelumnya kita sudah tahu bahwa operator logika
AND (&&) dan OR (||) digunakan untuk dua data boolean */

/* Namun berbeda di JS, Kita bisa menggunakan operator
logika AND dan OR untuk tipe data non boolean */

// Operator OR (||) di Non Boolean
/* Operator logika OR (||) membaca dari kiri ke kanan,
Operator ini akan mengambil nilai pertama yang truthy,
jika tidak ada satupun yang bernilai truthy maka yang
terakhir yang akan diambil */

// ngambil truthy duluan
console.log("Hello" || "");
console.log("" || []);
console.log("0" || "NOL");
console.log(0 || "NOL");
console.log(null || undefined);
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");

const person = {
  firstName: "Ari",
  lastName: "Kun",
};

// kalo firstname falsy, diambil next nya
const name = person.firstName || person.lastName;

console.log(name);

// Nyari falsy, kalo 2 2 nya truthy, ambil yg terakhir truthy
console.log("Hello" && "");
console.log("" && []);
console.log("0" && "NOL");
console.log(null && "NULL");
console.log(undefined && null);
