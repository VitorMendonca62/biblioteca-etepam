const nome = document.getElementsByName("name")[0];
const email = document.getElementsByName("email")[0];
const senha = document.getElementsByName("senha")[0];
const confirmacao_senha = document.getElementsByName("confirmacao_senha")[0];
const number = document.getElementsByName("number")[0];
const matricula = document.getElementsByName("matricula")[0];
const ensino = document.getElementsByName("ensino")[0];
const serie = document.getElementsByName("serie")[0];
const curso = document.getElementsByName("curso")[0];
const form = document.getElementsByTagName("form")[0];
const div = document.getElementsByClassName("alerts")[0];

function validarDados(e) {
  div.innerHTML = "";

  const erros = [];

  const valorName = nome.value;
  const valorEmail = email.value;
  const valorSenha = senha.value;
  const valorConfirmacao_senha = confirmacao_senha.value;
  const valorNumber = number.value;
  const valorMatricula = matricula.value;
  const valorEnsino = ensino.value;
  const valorSerie = serie.value;
  const valorCurso = curso.value;

  const dados = [
    valorName,
    valorEmail,
    valorSenha,
    valorConfirmacao_senha,
    valorNumber,
    valorMatricula,
    valorEnsino,
    valorSerie,
    valorCurso,
  ];
  dados.forEach((dado) => {
    if (!dado || typeof dado === undefined || dado === null) {
      erros.push({ texto: "Preencha todos os campos obrigatorios" });
    }
  });

  nome.value = valorName.replace(/\d/g, "");

  if (valorName.length < 20) {
    erros.push({ texto: "Nome muito curto" });
  }

  if (
    valorEmail.endsWith("@aluno.educacao.pe.gov.br") == false ||
    valorEmail.split("@").length > 2 ||
    valorEmail.split(".").length > 5
  ) {
    erros.push({ texto: "Email não válido" });
  }

  if (valorSenha !== valorConfirmacao_senha) {
    erros.push({
      texto: "Sua senha está diferente da confirmação. Tente novamente!",
    });
    confirmacao_senha.value = "";
  }
  if (valorSenha.length < 8) {
    erros.push({ texto: "Senha muito curta. Tente novamente!" });
  }
  if (valorNumber.length === 15) {
    number.value = valorNumber.replace(/\D/g, "");
    number.value = valorNumber.replace(/^(\d{2})(\d)/g, "($1) $2");
    number.value = valorNumber.replace(/(\d)(\d{4})$/, "$1-$2");
  }
  if (valorNumber.length < 15) {
    erros.push({ texto: "Telefone muito curto. Tente novamente!" });
  }
  if (valorNumber.length > 15) {
    erros.push({ texto: "Telefone muito longo. Tente novamente!" });
  }

  if (valorMatricula.length === 7) {
    matricula.value = valorMatricula.replace(/\D/g, "");
  }
  if (valorMatricula.length < 7) {
    erros.push({ texto: "Matricula muito curta. Tente novamente!" });
  }
  if (valorEnsino != "integrado" && valorEnsino != "subsequente") {
    erros.push({ texto: "Ensino inválido, tente novamente" });
  }
  if (valorSerie != "1" && valorSerie != "2" && valorSerie != "3") {
    erros.push({ texto: "Serie inválido, tente novamente" });
  }
  if (
    valorCurso != "msi" &&
    valorCurso != "mec" &&
    valorCurso != "mct" &&
    valorCurso != "log"
  ) {
    erros.push({ texto: "Curso inválido, tente novamente" });
  }
  if (erros.length > 0) {
    e.preventDefault();
    mostrarErros(erros);
  } else {
    window.location.href = e.target.action;
  }
  function mostrarErros(erros) {
    erros.forEach((erro) => {
      const p = document.createElement("p");
      p.classList.add("alert");
      p.innerHTML = `<span>${erro.texto}</span>`;
      div.appendChild(p);
    });
  }
}

form.addEventListener("submit", validarDados);
