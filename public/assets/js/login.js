const matricula = document.getElementsByName("matricula")[0];
const senha = document.getElementsByName("senha")[0];
const form = document.getElementsByTagName("form")[0];

async function carregarErros(e) {
  const valorMatricula = matricula.value;
  const valorSenha = senha.value;
  e.target.action = `http://localhost:4041/auth/users/${valorMatricula}`;
  e.preventDefault();
  const response = await fetch(
    `http://localhost:4041/auth/users/${valorMatricula}`,
    { method: "post" }
  );
  const data = await response.json();

  console.log(data);

  if (!data || typeof data === undefined || data === null) {
    console.log("Não existe");
  } else {
    console.log("existe");
  }
}

form.addEventListener("submit", carregarErros);
