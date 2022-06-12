function uploadCapaLivro(config) {
  const xhr = new XMLHttpRequest();

  xhr.open("post", config.url, true);
  xhr.send(config.formData);
}
document.querySelector("input[type=file]").onchange = (e) => {
  const formData = new FormData();
  const inputFile = e.target;
  
  formData.append(inputFile.name, inputFile.files[0]);
  console.log(inputFile.type)
  uploadCapaLivro({
    url: "/books/upload-capa-livro",
    formData,
  });
};
