async function getBooks() {
  const response = await fetch("http://localhost:4041/books/cadaster-book");
  const books = await response.json();
  const categorias = document.getElementsByClassName("categorias");
  categorias[0].children[1].innerHTML += `
<div>
   <img src="../../../uploads/capas/${books[1].path}" />
    <p class="livro-titulo">${books[1].titulo}</p>
   <p class="livro-autor">${books[1].autor}</p>
    <div class="estrelas">
   
   </div>
 </div>
`;
  return books;
}

const livros = getBooks();

// const numerosAleatoriosJaGerados = [];

// function gerarNumeroAleatorio(min, max) {
//   min > max ? ([min, max] = [max, min]) : false;
//   let numero = Math.floor(Math.random() * (max - min) + min);
//   const conferirSeJaFoiGerado = (valor) =>
//     numerosAleatoriosJaGerados.indexOf(valor) !== -1;
//   conferirSeJaFoiGerado(numero)
//     ? gerarNumeroAleatorio(0, livros.imgs.length)
//     : numerosAleatoriosJaGerados.push(numero);
// }

// function fabricarLivros(livros) {
//   for (let i = 1; i <= 5; i++) {
//     gerarNumeroAleatorio(0, livros.imgs.length);
//   }
// numerosAleatoriosJaGerados.forEach((e) => {
//   categorias[0].children[1].innerHTML += `<div>
//   <img src="../../../uploads/capas-livros/${livros.imgs[e]}.png" />
//   <p class="livro-titulo">${livros.titulo[e]}</p>
//   <p class="livro-autor">${livros.autor[e]}</p>
//   <div class="estrelas">

//   </div>
// </div>`;
// });
// }
