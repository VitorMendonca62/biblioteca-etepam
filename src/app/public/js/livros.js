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
fabricarLivros(livros)

function gerarNumeroAleatorio(min, max) {
  min > max ? ([min, max] = [max, min]) : false;
  let numero = Math.floor(Math.random() * (max - min) + min);
  const conferirSeJaFoiGerado = (valor) => numerosAleatoriosJaGerados.indexOf(valor) !== -1
  conferirSeJaFoiGerado(numero) ? gerarNumeroAleatorio(0,livros.imgs.length) : numerosAleatoriosJaGerados.push(numero)
  } 

function fabricarLivros(livros) {
  for(let i=1;i<=5;i++) {
    gerarNumeroAleatorio(0,livros.imgs.length)
  }

  numerosAleatoriosJaGerados.forEach(e => {
    categorias[0].children[1].innerHTML += `<div>
    <img src="img/fotos-livros/${livros.imgs[e]}.png" />
    <p class="livro-titulo">${livros.titulo[e]}</p>
    <p class="livro-autor">${livros.autor[e]}</p>
    <div class="estrelas">
   
    </div>
  </div>`
  })
}
