import image1 from "/images/confront.png";
import image2 from "/images/warsawjs.png";
import image3 from "/images/saturn.jpg";
import Image from "/image.js";

const images = [image1, image2, image3];
const favButton = document.getElementById("show-favourites");
const imagesList = images.map(path => new Image(path));

imagesList.forEach(image => image.show());
favButton.addEventListener("click", () =>
  imagesList.filter(image => image.isFavorite()).forEach(image => image.hide())
);
