import image1 from "/images/confront.png";
import image2 from "/images/warsawjs.png";
import image3 from "/images/saturn.jpg";
import Image from "/image.js";

const images = [image1, image2, image3];
const favButton = document.getElementById("show-favourites");
const fileInput = document.getElementById("file-input");
const imagesList = images.map(path => new Image(path));

imagesList.forEach(image => image.show());
favButton.addEventListener("click", () => {
  imagesList.filter(image => image.isFavorite()).forEach(image => image.hide());
});

fileInput.onchange = () => {
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      const newEl = new Image(e.target.result).show();
      imagesList.push(newEl);
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
};
