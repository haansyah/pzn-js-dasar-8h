// Optional Chaining
/* Optional chaining operator (?) merupakan operator yang
digunakan untuk mengamankan ketika kita ingin mengakses 
property sebuah object dari data nullish,
jika kita mencoba mengakses property dari sebuah object dari data nullush tanpa menggunakan optional chaining operator, maka akan terjadi error */

let person = {};
alert(person?.address?.country);
// Biar ga nampilin error

let orang = {
  address: {
    country: "Indonesia",
  },
};
alert(orang?.address?.country);
