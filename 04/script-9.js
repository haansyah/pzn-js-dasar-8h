// Falsy & Truthy
/* 1. Falsy
Falsy atau falsey adalah value yang ketika dalam konteks
boolean, dianggap false. Ini adalah salah satu fitur unik
JavaScript, yang berguna namun kadang juga sering 
membingungkan, jadi di javascript kondisi itu tidak hanya 
bisa boolean, tapi diluar boolean pun bisa, namun kita
harus tahu beberapa data falsy, atau dianggap false*/

// data falsy = `false`, `0, -0`, `"", ", ```, null, undefined, NaN

/* 2. Truthy
Truthy adalah kebalikan dari falsy, dimana data nya
dianggap bernilai true, sederhana sekali sebenarnya
untuk mengetahui sebuah data itu adalah truthy, yaitu data bukan bernilai falsy */

const data = undefined;

if (data) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
