console.log("mostrar o document", document);

const video = document.getElementById("video");

const fecharModal = document.querySelector(".fechar-modal");

const botaoTrailer = document.querySelector(".botao-trailer");

const modal = document.querySelector(".modal");

const linkDoVideo = video.scr;

function alternarModal (){
  modal.classList.toggle("aberto");
};

console.log("mostrar botao trailer", botaoTrailer);

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});