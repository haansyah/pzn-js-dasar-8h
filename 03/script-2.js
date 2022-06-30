// KONVERSI TIPE DATA STRING DAN NUMBER
const value1 = parseInt("1");
const value2 = parseFloat("1.2");

const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);

document.writeln(`<p>${parseInt("1.9")}</p>`);
document.writeln(`<p>${parseFloat("1.9")}</p>`);
document.writeln(`<p>${Number("1.9")}</p>`);

const a = 1;
const b = 1;
const total = a.toString() + b.toString();
const total2 = a + b;
document.writeln(`<p>${total}</p>`);
document.writeln(`<p>${total2}</p>`);

// NaN Not a Number
document.writeln(`<p>${Number("1.9eko")}</p>`);
document.writeln(`<p>${parseInt("1.9eko")}</p>`);
document.writeln(`<p>${parseFloat("1.9eko")}</p>`);

// isNaN
document.writeln(`<p>${isNaN("10")}</p>`);
document.writeln(`<p>${isNaN(10)}</p>`);
document.writeln(`<p>${isNaN("tr")}</p>`);
