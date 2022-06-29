// 1. OPERATOR PERBANDINGAN
// > < >= <= == === != !==
let result = 5 == 5;
document.writeln(result);

// 2. Operator Logika
// && || !
const nilaiUjian = 90;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
document.writeln(lulus);

const lulusUjianAja = lulusUjian;
document.writeln(lulusUjianAja);

// 3. Console
console.info("Hello world");
console.warn("ini peringatan");
console.error("ini error");
console.debug("debug"); //level verbose on console
