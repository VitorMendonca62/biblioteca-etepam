async function getBooks() {
  const response = await fetch("http://localhost:4041/books/cadaster-book");
  const books = await response.json();
  const categorias = document.getElementsByClassName("categorias");

  await books.forEach((book, i) => {
    categorias[0].children[1].innerHTML += `
    <div onclick="direcionarParaSinopse(${books[i].id})">
       <img src="${books[i].url}" />
        <p class="livro-titulo">${books[i].titulo}</p>
       <p class="livro-autor">${books[i].autor}</p>
        <spam class="estrelas"></spam>
     </div>
    `;
  });

  return books;
}

const livros = getBooks();
