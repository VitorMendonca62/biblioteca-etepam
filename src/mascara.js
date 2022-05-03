/* Máscaras ER */
function mascara(input, funcao) {
  setTimeout((input.value = funcao(input.value)), 1);
}
function mascararNome(valor) {
  valor = valor.replace(/\d/g, "");
  return valor;
}
function mascararMatricula(valor) {
  valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito
  return valor;
}
function mascararTelefone(valor) {
  valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return valor;
}
const nomeTag = (elemento) => document.getElementsByName(elemento)[0];

window.onload = () => {
  nomeTag("telefone").onkeyup = function() {
    mascara(this, mascararTelefone);
  };
  nomeTag("matricula").onkeyup = function() {
    mascara(this, mascararMatricula);
  };
  nomeTag("nome").onkeyup = function() {
    mascara(this, mascararNome);
  };
};
