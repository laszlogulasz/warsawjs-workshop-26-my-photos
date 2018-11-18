const images = ["confront.png", "warsawjs.png"];
const imagesGallery = document.getElementById("images");

class Image {
  constructor(path) {
    this.path = path;
  }

  show() {
    this.imageElement = document.createElement("img");
    this.imageElement.setAttribute("src", `images/${this.path}`);
    this.imageElement.addEventListener("click", () => this.toggleFavorite());
    imagesGallery.appendChild(this.imageElement);
  }

  toggleFavorite() {
    this.imageElement.classList.toggle("image--favourite");
  }
}

images.forEach(fileName => {
  const image = new Image(fileName);
  image.show();
});
