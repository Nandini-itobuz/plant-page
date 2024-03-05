const nextBtn = document.getElementById("hero-next");
const prevBtn = document.getElementById("hero-prev");
const currentHeroImg = document.getElementsByClassName("current-hero-img");
const nextHeroImg = document.getElementsByClassName("next-hero-img");

console.log(currentHeroImg,nextHeroImg)
const sliderArray = ['./images/hero-section/pot.png','./images/hero-section/leaves.png',"./images/plant-collection/paradise.png"]

prevBtn.addEventListener("click", () => {
    let linkOne = sliderArray.shift();
    let linkBehind = sliderArray.shift();
    sliderArray.push(linkOne);
    sliderArray.push(linkBehind);
    currentHeroImg[0].setAttribute('src',linkOne)
    nextHeroImg[0].setAttribute('src',linkBehind)
  });
  
  function nextSlide() {
    let linkOne = sliderArray.pop();
    let linkBehind = sliderArray.pop();
    sliderArray.unshift(linkOne);
    sliderArray.unshift(linkBehind);
    currentHeroImg[0].setAttribute('src',linkOne)
    nextHeroImg[0].setAttribute('src',linkBehind)
  }
  
  nextBtn.addEventListener("click", nextSlide);
