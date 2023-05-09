const inputEntrada = document.getElementById("inputEntrada");
const matrix = document.getElementById("matrix");
const contenidoDefault = matrix.textContent;

let i = 0,
  j = 0,
  wait = 6;
let arr = [
  "You're my heart, You're my soul.",
  "You can win if you want",
  "TheJoker",
  "TheBatman",
  "TheBat&TheCat",
];

// ESTE SOLO ESCRIBE LO DEL ARRAY EN EL INPUT
setInterval(() => {
  if (wait-- > 0) return;
  if (wait == -1) matrix.textContent = "";
  if (i < arr.length)
    if (j < arr[i].length) matrix.textContent += arr[i][j++];
    else (wait = 8), (j = 0), i++;
  else (wait = 8), (i = j = 0);
}, 200);
// ESTE SOLO ESCRIBE LO DEL ARRAY EN EL INPUT

// ESTE ESCRIBE EN EL SPAN Y EN EL INPUT TAMBIEN
// setInterval(() => {
//   if (wait-- > 0) return;
//   if (wait == -1) matrix.textContent = "";
//   if (i < arr.length)
//     if (j < arr[i].length)
//       (matrix.textContent += arr[i][j++]),
//         (inputEntrada.value = matrix.textContent),
//         document.getElementById("inputEntrada").focus();
//     else (wait = 8), (j = 0), i++;
//   else (wait = 8), (i = j = 0);
// }, 200);
// ESTE ESCRIBE EN EL INPUT TAMBIEN

// ESTO ES PARA LO QUE ESCRIBAS EN EL INPUT LO MANDE AL SPAN
// inputEntrada.addEventListener("input", (e) => {
//   let letra = e.target.value;
//   pintarSpan(letra);
// });

// function pintarSpan(letra) {
//   matrix.textContent = `${letra}`;
//   if (!matrix.textContent) {
//     matrix.textContent = `${contenidoDefault}`;
//   }
// }
// ESTO ES PARA LO QUE ESCRIBAS EN EL INPUT LO MANDE AL SPAN
