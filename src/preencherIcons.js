const iconFavoritos = document.getElementsByClassName("icon-favoritos")[0];
const iconJaLidos = document.getElementsByClassName("livros-lidos")[0];
const iconUsuario = document.getElementsByClassName("icon-usuario")[0];

const preencherFavoritos = () =>
  (iconFavoritos.className = "fa fa-heart icon-favoritos");
const desPreencherFavoritos = () =>
  (iconFavoritos.className = "fa fa-heart-o icon-favoritos");

const preencherJaLidos = () => {
  iconJaLidos.className = "fa fa-check-square livros-lidos";
  iconJaLidos.style.width = "26px";
};
const desPreencherJaLidos = () =>
  (iconJaLidos.className = "fa fa-check-square-o livros-lidos");

const preencherUsuario = () =>
  (iconUsuario.className = "fa fa-user-circle icon-usuario");
const desPreencherUsuario = () =>
  (iconUsuario.className = "fa fa-user-circle-o icon-usuario");

iconFavoritos.addEventListener("mouseenter", preencherFavoritos, false);
iconFavoritos.addEventListener("mouseout", desPreencherFavoritos, false);

iconJaLidos.addEventListener("mouseenter", preencherJaLidos, false);
iconJaLidos.addEventListener("mouseout", desPreencherJaLidos, false);

iconUsuario.addEventListener("mouseenter", preencherUsuario, false);
iconUsuario.addEventListener("mouseout", desPreencherUsuario, false);
