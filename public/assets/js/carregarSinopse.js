const autorHTML = document.getElementsByClassName("autor")[0];
const estrelasHTML = document.getElementsByClassName("estrelas-sinopse")[0];
const capaHTML = document.getElementsByClassName("foto-livro")[0];
const sinopseHTML = document.getElementsByClassName("sinopse")[0];
const tituloHTML = document.getElementsByClassName("titulo")[0];

function getIdBooks() {
  const url = window.location.href;
  const params = url.split("livros/");
  return params[1];
}

async function getLivro() {
  const id = getIdBooks();
  //   console.log(id);
  const response = await fetch(`http://localhost:4041/books/${id}`);
  const data = await response.json();
  //   console.log(data)

  const { autor, estrelas, url, sinopse, titulo } = data;
  document.title += " "+ titulo
  autorHTML.innerText = autor;
  mostrarEstrelas(estrelas);
  sinopseHTML.innerText = sinopse;
  tituloHTML.innerText = titulo;
  capaHTML.src = url;
}

getLivro();

function mostrarEstrelas(estrelas) {
  for (let i = 1; i <= estrelas; i++) {
    estrelasHTML.innerHTML += `<i class="fa fa-star estrelas ligadas" aria-hidden="true"></i>`;
  }
  for (let i = 1; i <= 5 - estrelas; i++) {
    estrelasHTML.innerHTML += `<i class="fa fa-star estrelas desligadas" aria-hidden="true"></i>`;
  }
  
}
