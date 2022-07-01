// NULLISH COALESCING OPERATOR
/* Nullist value adalah null dan undefined
Nullist Coalescing operator (??) adalah operator mirip
dengan ternary operator, yang membedakan adalah pada 
kondisi, jika bernilai null atau undefined, baru value
defaultnya diambil */

let param;

let data = param ?? "Nilai Default";

document.writeln(`${data}`);
