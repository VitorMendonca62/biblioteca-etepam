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
  autorHTML.innerText = autor;
  estrelasHTML.innerText = estrelas;
  sinopseHTML.innerText = sinopse;
  tituloHTML.innerText = titulo;
  capaHTML.src = url;
}

getLivro();
