/* Máscaras ER */
function mascara(input, funcao) {
  input.value = funcao(input.value)
}
function mascararNome(valor) {
  valor = valor.replace(/\d/g, "");
  valor = valor.replace(/[^a-z0-9\u00C0-\u00FF ]/gi, "")
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
  nomeTag("matricula").onkeyup = function() {
    mascara(this, mascararMatricula);
  };
  nomeTag("number").onkeyup = function() {
    mascara(this, mascararTelefone);
  };
  nomeTag("name").onkeyup = function() {
    mascara(this, mascararNome);
  };
};
