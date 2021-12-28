// 5. Escreva um programa que leia o valor do raio de uma circunferência
//  e calcule a sua área e o seu comprimento.

const pi = 3.14;
let raio = 3;

let area = pi * (Math.pow(raio, 2));
let comprimento = 2 * pi * raio;

console.log("\nArea = " + area + "\nComprimento = " + comprimento + "\n");