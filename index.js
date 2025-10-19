// Lista de heróis

const heroisMarvel = [
  { nome: "Capitão América", xp: 4800 },
  { nome: "Homem-Aranha", xp: 5200 },
  { nome: "Thor", xp: 9800 },
  { nome: "Homem de Ferro", xp: 7500 },
  { nome: "Hulk", xp: 10500 },
  { nome: "Pantera Negra", xp: 6800 },
  { nome: "Doutor Estranho", xp: 9200 },
  { nome: "Feiticeira Escarlate", xp: 10000 },
  { nome: "Visão", xp: 8700 },
  { nome: "Capitã Marvel", xp: 11000 },
  { nome: "Demolidor", xp: 3900 },
  { nome: "Jessica Jones", xp: 3100 },
  { nome: "Luke Cage", xp: 4600 },
  { nome: "Motoqueiro Fantasma", xp: 9400 },
  { nome: "Wolverine", xp: 7000 },
  { nome: "Tempestade", xp: 8300 },
  { nome: "Jean Grey", xp: 9800 },
  { nome: "Ciclope", xp: 5600 },
  { nome: "Gambit", xp: 4200 },
  { nome: "Noturno", xp: 3800 }
];

// Função para classificar o nível com base na XP
function classificarNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp <= 2000) {
    return "Bronze";
  } else if (xp <= 5000) {
    return "Prata";
  } else if (xp <= 7000) {
    return "Ouro";
  } else if (xp <= 8000) {
    return "Platina";
  } else if (xp <= 9000) {
    return "Ascendente";
  } else if (xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Laço de repetição para exibir a saída de cada herói
for (let i = 0; i < heroisMarvel.length; i++) {
  const heroi = heroisMarvel[i];
  const nivel = classificarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
