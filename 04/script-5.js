// IN Operator
/* In Operator adalah operator yang bisa dilakukan
untuk mengecek apakah sebuah property ada di dalam object
atau tidak, jika property tersebut ada, maka bernilai true.
tidak hanya diobject, In juga bisa mengecek index di array */

const person = {
  firstName: "Ari",
  lastName: "Sutarman",
  nickName: null,
};

const result = "firstName" in person;
document.writeln(`<p>${result}</p>`);

if ("firstName" in person) {
  alert(`Hello ${person.firstName}`);
} else {
  alert(`Hello`);
}

if (
  "nickName" in person &&
  person.nickName !== undefined &&
  person.nickName !== null
) {
  alert(`Halo Bro ${person.nickName}`);
} else {
  alert(`Property nickname bernilai ${person.nickName}`);
}

/* jika property bernilai undefined atau null, 
maka akan tetap dinilai ada */

/* jadi tambahkan kondisi != null atau != undefined */

const names = [undefined, "Ari", null];
const nameResult = 0 in names;
document.writeln(`<p>${nameResult}</p>`);

if (0 in names && names[0] !== undefined && names[0] !== null) {
  document.writeln(`Index 0 berisi ${names[0]}`);
} else {
  document.writeln(`Data yang anda minta berisi ${names[0]}`);
}
