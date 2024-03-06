const nextBtn = document.getElementById("hero-next");
const prevBtn = document.getElementById("hero-prev");
const currentHeroImg = document.getElementsByClassName("current-hero-img");
const nextHeroImg = document.getElementsByClassName("next-hero-img");

console.log(currentHeroImg,nextHeroImg)
const sliderArray = ['./images/hero-section/pot.png','images/hero-section/nature-road.jpeg',"images/hero-section/nature-tree.jpeg","images/hero-section/nature-rocks.jpeg"]

function reviewTranslate(totalTime,nextHero){
  let initialTranslation = 140;
    let currentTime = 0;
    let curent = setInterval(()=>{
      initialTranslation -= 1.4;
      console.log(nextHero)
      nextHero.style.translate = `${initialTranslation}%`
      currentTime+=5;
      console.log(currentTime, initialTranslation, totalTime,currentTime === totalTime || initialTranslation <=0)
      if(currentTime == totalTime || initialTranslation <=0 || !nextHero){
        clearInterval(curent);
      }
    },5)
}


prevBtn.addEventListener("click", () => {
    let linkOne = sliderArray.shift();
    sliderArray.push(linkOne);
    currentHeroImg[0].setAttribute('src',sliderArray[0])
    nextHeroImg[0].setAttribute('src',sliderArray[1])
    reviewTranslate(500, currentHeroImg[0]);
    reviewTranslate(500, nextHeroImg[0]);
  });
  
  function nextSlide() {

    let linkOne = sliderArray.pop();
    sliderArray.unshift(linkOne);
    currentHeroImg[0].setAttribute('src',sliderArray[0])
    nextHeroImg[0].setAttribute('src',sliderArray[1])
    reviewTranslate(500, currentHeroImg[0]);
    reviewTranslate(800, nextHeroImg[0]);
  }
  
  nextBtn.addEventListener("click", nextSlide);
