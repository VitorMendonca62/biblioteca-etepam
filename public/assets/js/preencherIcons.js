const iconFavoritos = document.getElementsByClassName("icon-favoritos")[0];
const iconJaLidos = document.getElementsByClassName("livros-lidos")[0];
const divLoginCadastro = document.getElementsByClassName("login-e-cadastro")[0];
const iconUsuario = document.getElementsByClassName("icon-usuario")[0];

const preencherFavoritos = () =>
  (iconFavoritos.className = "fa fa-heart icon-favoritos");
const desPreencherFavoritos = () => {
  iconFavoritos.className = "fa fa-heart-o icon-favoritos";
};

const preencherJaLidos = () => {
  iconJaLidos.className = "fa fa-check-square livros-lidos";
  iconJaLidos.style.width = "24px";
};
const desPreencherJaLidos = () =>
  (iconJaLidos.className = "fa fa-check-square-o livros-lidos");

const preencherUsuario = () =>
  (iconUsuario.className = "fa fa-user-circle icon-usuario");
const desPreencherUsuario = () =>
  (iconUsuario.className = "fa fa-user-circle-o icon-usuario");

const direcionarUsuario = (e) => {
  window.location.assign("login");
};

iconFavoritos.addEventListener("mouseenter", preencherFavoritos, false);
iconFavoritos.addEventListener("mouseout", desPreencherFavoritos, false);

iconJaLidos.addEventListener("mouseenter", preencherJaLidos, false);
iconJaLidos.addEventListener("mouseout", desPreencherJaLidos, false);

divLoginCadastro.addEventListener("mouseenter", preencherUsuario, false);
divLoginCadastro.addEventListener("mouseout", desPreencherUsuario, false);

divLoginCadastro.addEventListener("click", direcionarUsuario, false);

const logo = document.querySelector(".logo-etepam");

const verificarTela = () => {
  const mostrarLogoFechada = () => {
    logo.src = "assets/img/etepam-logo-fechada.png";
    logo.classList.add("fechada");
  };
  const mostrarLogoAberta = () => {
    logo.src = "assets/img/etepam-logo-aberta.svg";
    logo.classList.remove("fechada")
  };

  innerWidth < 720
    ? mostrarLogoFechada()
    : mostrarLogoAberta();
};
setInterval(verificarTela, 10);
