// 1. Writeln
document.writeln("This is from Script!");
document.writeln("<br />");

// 2. Komentar
// Satu baris
/* Lebih dari
Satu Baris */

// 3. Tipe Data
const number = 100;
const binary = 0b1011101;
const hexadecimal = 0xffffff;
const octal = 0o313123;

document.writeln(`Tipe Data number ${number}`);
document.writeln("<br />");
document.writeln(`binary ${binary}`);
document.writeln("<br />");
document.writeln(`octal ${octal}`);
document.writeln("<br />");

// 4. Boolean TRUE atau FALSE
const boolTrue = true;
const boolFalse = false;

document.writeln(`Ini boolean ${boolFalse} ${boolTrue}`);
document.writeln("<br />");

// 5. String
document.writeln("Tipe data string");
document.writeln("<br />");
document.writeln("Tipe data string" + "String ditambah");
document.writeln("<br />");

// Escape Sequence
// \n ENTER ; \t TAB ; \' atau \" ' " ; \\ \
document.writeln("<textarea cols='100' rows='10'>");
document.writeln('"Halo" Bro\nWhatsapp\nDih\\');
document.writeln("</textarea>");
document.writeln("<br />");

// 6. Variabel
// variable = value
const unchangeable = "Data gabisa dirubah";
let nickName;
nickName = "Ari";
var fullName = "Ari Sutarman";
document.writeln(`${fullName} biasa dipanggil ${nickName}`);
document.writeln("<br />");

// 7. Operator Aritmatika
// + - * ** / %
const opPlus = 1 + 2;
document.writeln(opPlus + "<br />");
const opMin = 1 - 2;
document.writeln(opMin + "<br />");
const opKali = 1 * 2;
document.writeln(opKali + "<br />");
const opEksponensial = 3 ** 3;
document.writeln(opEksponensial + "<br />");

let augmentedAssignment = 10;
augmentedAssignment += 10;
document.writeln(augmentedAssignment + "<br />");

// ++ -- + - OPERATOR UNARY
let resultUnary = +1;
document.writeln(resultUnary + "<br />");
resultUnary--;
document.writeln(resultUnary + "<br />");
resultUnary++;
document.writeln(resultUnary + "<br />");
resultUnary = -resultUnary;
document.writeln(resultUnary + "<br />");
