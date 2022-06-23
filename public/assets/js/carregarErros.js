const elemTitulo = document.getElementsByName("titulo")[0];
const elemAutor = document.getElementsByName("autor")[0];
const elemEstrelas = document.getElementsByName("estrelas")[0];
const elemSinopse = document.getElementsByName("sinopse")[0];
const div = document.getElementsByClassName("alerts")[0];

function verificarErros(e) {
  div.innerHTML = "";

  const titulo = elemTitulo.value;
  const autor = elemAutor.value;
  const estrelas = elemEstrelas.value;
  const sinopse = elemSinopse.value;

  const dados = [titulo, autor, estrelas, sinopse];
  const erros = [];

  dados.forEach((dado) => {
    if (!dado || typeof dado === undefined || dado === null) {
      erros.push({ texto: "Preencha todos os campos obrigatorios" });
    }
  });

  if (titulo.length < 3) {
    erros.push({ texto: "Título muito pequeno!" });
  }
  if (autor.length < 3) {
    erros.push({ texto: "Autor muito pequeno!" });
  }
  if (sinopse.length < 20) {
    erros.push({ texto: "Sinopse muito pequena!" });
  }
  if (estrelas > 5 || estrelas < 0) {
    erros.push({ texto: "Estrelas fora do limite padrão!" });
  }
  if (erros.length > 0) {
    e.preventDefault();
    mostrarErros(erros);
  } else {
    window.location.href = e.target.action;
  }
}
function mostrarErros(erros) {
  erros.forEach((erro) => {
    const p = document.createElement("p");
    p.classList.add("alert");
    p.innerHTML = `<span>${erro.texto}</span>`;
    div.appendChild(p);
  });
}
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", verificarErros);
