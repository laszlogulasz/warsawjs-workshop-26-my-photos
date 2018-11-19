import Image from "/image.js";

const imagesList = [];
const getImages = fetch("http://localhost:3000/photos")
  .then(response => response.json())
  .then(fetchedImages => {
    const newList = fetchedImages.map(image => new Image(image.url));
    imagesList.push(...newList);
    imagesList.forEach(image => image.show());
  });

const favButton = document.getElementById("show-favourites");
favButton.addEventListener("click", () =>
  imagesList.filter(image => !image.isFavorite()).forEach(image => image.hide())
);

const fileInput = document.getElementById("file-input");
fileInput.onchange = () => {
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      console.log(e.target.result);
      const newImage = new Image(e.target.result);
      newImage.show();
      imagesList.push(newImage);
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
};
