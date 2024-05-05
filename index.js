const tabelaDeXP = [
   { limite: 1000, nome: "Ferro" },
   { limite: 2000, nome: "Bronze" },
   { limite: 5000, nome: "Prata" },
   { limite: 7000, nome: "Ouro" },
   { limite: 8000, nome: "Platina" },
   { limite: 9000, nome: "Ascendente" },
   { limite: 10000, nome: "Imortal" }
]
//======================================
//=== Mude o nome do Herói aqui ========
//======================================
const nomeDoHeroi = 'Superman';

//======================================
//=== Mude a quantidade de XP aqui =====
//======================================
const xpDoHeroi = 9000;

let nivelDoHeroi = "";

if (xpDoHeroi > 10000) {
   nivelDoHeroi = "Radiante"
}

for (let i = 0; i < tabelaDeXP.length; i++) {
   if (xpDoHeroi <= tabelaDeXP[i].limite) {
      nivelDoHeroi = tabelaDeXP[i].nome
      break
   }
}

console.log("O Herói de nome **{" + nomeDoHeroi + "}** está no nível de **{" + nivelDoHeroi + "}**!");