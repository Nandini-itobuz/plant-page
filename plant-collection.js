const prevCollection = document.getElementById("prev-plant-collection");
const nextCollection = document.getElementById("next-plant-collection");

const arrayPlants = [
  "./images/plant-collection/paradise.png",
  "images/plant-collection/pearls.png",
  "images/plant-collection/rubber.png",
];
let carouselLength = arrayPlants.length;
const getImgList = document.getElementsByClassName("img-list");

function createCarouselItem(item) {
  const carouselItem = document.createElement("img");
  carouselItem.setAttribute("src", item);
  carouselItem.classList.add("plant-collection-img");
  getImgList[0].appendChild(carouselItem);
}

arrayPlants.forEach((item) => createCarouselItem(item));

prevCollection.addEventListener("click", () => {
  let link = arrayPlants.shift();
  arrayPlants.push(link);
  getImgList[0].innerHTML = "";
  arrayPlants.forEach((item) => createCarouselItem(item));
});

function nextSlide() {
  let link = arrayPlants.pop();
  arrayPlants.unshift(link);
  getImgList[0].innerHTML = "";
  arrayPlants.forEach((item) => createCarouselItem(item));
}

nextCollection.addEventListener("click", nextSlide);

// setInterval(() => {
//     nextSlide();
//   }, 2000);
