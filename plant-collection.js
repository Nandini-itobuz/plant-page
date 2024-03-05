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

function transition(){
  let initialOpacity = 0, currTime = 0;
  getImgList[0].style.opacity =  0
  const interval = setInterval(() => {
    initialOpacity += .05
    getImgList[0].style.opacity = initialOpacity;
    currTime += 25;
    if(currTime === 500) {clearInterval(interval)
    initialOpacity = 0
  currTime = 0}
  }, 25)
}
// function transition(isFromRight = false){
//   let initialOpacity = 0, currTime = 0, initialTranslation = isFromRight ? 100 : -100;
//   getImgList[0].style.opacity =  0
//   getImgList[0].style.transform =   `translateX(${initialTranslation})`
//   const interval = setInterval(() => {
//     initialOpacity += .05
    
//     getImgList[0].style.opacity = initialOpacity;
//     getImgList[0].style.transform = `translateX(${initialTranslation}%)`;
//     if(isFromRight) initialTranslation -= 2;
//     else initialTranslation += 2
//     currTime += 10;
//     if(currTime === 500) {clearInterval(interval)
//     initialOpacity = 0
//   currTime = 0}
//   }, 10)
// }



prevCollection.addEventListener("click", () => {
  let link = arrayPlants.shift();
  arrayPlants.push(link);
  getImgList[0].innerHTML = "";
  arrayPlants.forEach((item) => createCarouselItem(item));
  transition(false);
});

function nextSlide() {
  console.log('jhfdkljfh');
  let link = arrayPlants.pop();
  arrayPlants.unshift(link);
  getImgList[0].innerHTML = "";
  arrayPlants.forEach((item) => createCarouselItem(item));
  transition(true);
  
}

nextCollection.addEventListener("click", nextSlide);

// setInterval(() => {
//     nextSlide();
//   }, 2000);
