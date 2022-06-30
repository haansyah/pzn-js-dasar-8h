// ARRAY
let arrayKosong = [];
let arrayNama = ["Eko", 19, true];

arrayNama.push(90);
arrayNama.push("90");
arrayNama.push("Joko", "budi");

console.table(arrayNama);
console.log(arrayNama.length);
console.log(arrayNama[0]);
arrayNama[0] = "Prambudi";
console.log(arrayNama[0]);

delete arrayNama[3];
console.table(arrayNama);

arrayNama[3] = "Ada lagi";
arrayNama.push(1, 2, 3, 4, 5, ["eko", "kurniawan", "khannedy"]);
console.table(arrayNama);
