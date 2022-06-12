async function getBooks() {
  const response = await fetch("http://localhost:4041/books/cadaster-book");
  const books = await response.json();
  books.forEach(e => console.log(e.id))
}

getBooks();

const numerosAleatoriosJaGerados = [];
const categorias = document.getElementsByClassName("categorias");
fabricarLivros(livros);

function gerarNumeroAleatorio(min, max) {
  min > max ? ([min, max] = [max, min]) : false;
  let numero = Math.floor(Math.random() * (max - min) + min);
  const conferirSeJaFoiGerado = (valor) =>
    numerosAleatoriosJaGerados.indexOf(valor) !== -1;
  conferirSeJaFoiGerado(numero)
    ? gerarNumeroAleatorio(0, livros.imgs.length)
    : numerosAleatoriosJaGerados.push(numero);
}

function fabricarLivros(livros) {
  for (let i = 1; i <= 5; i++) {
    gerarNumeroAleatorio(0, livros.imgs.length);
  }
require('');
  numerosAleatoriosJaGerados.forEach((e) => {
    categorias[0].children[1].innerHTML += `<div>
    <img src="../../../uploads/capas-livros/${livros.imgs[e]}.png" />
    <p class="livro-titulo">${livros.titulo[e]}</p>
    <p class="livro-autor">${livros.autor[e]}</p>
    <div class="estrelas">
   
    </div>
  </div>`;
  });
}
