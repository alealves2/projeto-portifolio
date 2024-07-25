function togglemode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  //pegar a tag
  const img = document.querySelector("#profile img")

  //subistituir a img

  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    // se tiver sem ligh mode , manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
