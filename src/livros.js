const livros = {
  imgs: ["o-cortico", "a-escrava-isaura", "o-ateneu", "a-5-onda", "o-mulato"],
  titulo: [
    "O cortiço",
    "A escrava isaura",
    "O ateneu",
    "A 5° onda",
    "O mulato",
  ],
  autor: [
    "Aluiso Azevedo",
    "Bernardo Guimarães",
    "Raul Pompeia",
    "Rick Yancey",
    "Aluiso Azevedo",
  ],
  estrelas: [5, 4, 3, 2, 1],
};
const numerosAleatoriosJaGerados = [];

const categorias = document.getElementsByClassName("categorias");
for (let i = 1; i <= 5; i++) {
  fabricarLivros(livros);
}

function gerarNumeroAleatorio(min, max) {
  min > max ? ([min, max] = [max, min]) : false;
  let numero = Math.floor(Math.random() * (max - min) + min);
  const conferirSeJaFoiGerado = () =>
    numerosAleatoriosJaGerados.indexOf(numero) !== -1;

  const gerarNovoNumero = (min, max) => {
    min > max ? ([min, max] = [max, min]) : false;
    numero = Math.floor(Math.random() * (max - min) + min);

    conferirSeJaFoiGerado()
      ? gerarNovoNumero(0, livros.imgs.length)
      : numerosAleatoriosJaGerados.push(numero);
  };

  if (conferirSeJaFoiGerado()) {
    gerarNovoNumero(0, livros.imgs.length);
  } else {
    numerosAleatoriosJaGerados.push(numero);
    return numero;
  }
  return numero;
}

function fabricarLivros(livros) {
  const numeroAleatorio = gerarNumeroAleatorio(0, livros.imgs.length);

  categorias[0].children[1].innerHTML += `<div>
   <img src="img/fotos-livros/${livros.imgs[numeroAleatorio]}.png" />
   <p class="livro-titulo">${livros.titulo[numeroAleatorio]}</p>
   <p class="livro-autor">${livros.autor[numeroAleatorio]}</p>
   <div class="estrelas">
  
   </div>
 </div>`;
}

