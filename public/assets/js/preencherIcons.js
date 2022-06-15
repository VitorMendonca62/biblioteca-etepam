const iconFavoritos = document.getElementsByClassName("icon-favoritos")[0];
const iconJaLidos = document.getElementsByClassName("livros-lidos")[0];
const divLoginCadastro = document.getElementsByClassName("login-e-cadastro")[0];
const iconUsuario = document.getElementsByClassName("icon-usuario")[0];

const icons = [iconFavoritos, iconJaLidos, iconUsuario];

const preencherIcons = (e) => {
  const elem = e.target;
  elem.className = elem.className.replace("-o", "");
};
const desPreencherIcons = (e) => {
  const elem = e.target;
  let classParaRemover = elem.classList[1]
  elem.className = elem.className.replace(classParaRemover, classParaRemover+="-o");
};

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", preencherIcons, false);
  icon.addEventListener("mouseout", desPreencherIcons, false);
});

const direcionarUsuario = (e) => {
  window.location.assign("login");
};

divLoginCadastro.addEventListener("click", direcionarUsuario, false);

const logo = document.querySelector(".logo-etepam");

const verificarTela = () => {
  const mostrarLogoFechada = () => {
    logo.src = "http://localhost:4041/assets/img/etepam-logo-fechada.png";
    logo.classList.add("fechada");
  };
  const mostrarLogoAberta = () => {
    logo.src = "http://localhost:4041/assets/img/etepam-logo-aberta.svg";
    logo.classList.remove("fechada");
  };

  innerWidth < 720 ? mostrarLogoFechada() : mostrarLogoAberta();
};
setInterval(verificarTela, 10);

function direcionarParaSinopse(id) {
  window.location.assign(`/livros/${id}`)
}