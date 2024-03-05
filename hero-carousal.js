const nextBtn = document.getElementById("hero-next");
const prevBtn = document.getElementById("hero-prev");
const currentHeroImg = document.getElementsByClassName("current-hero-img");
const nextHeroImg = document.getElementsByClassName("next-hero-img");

console.log(currentHeroImg,nextHeroImg)
const sliderArray = ['./images/hero-section/pot.png','./images/hero-section/leaves.png',"./images/plant-collection/paradise.png"]

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
        // console.log("ok")
      }
    },5)
}

prevBtn.addEventListener("click", () => {
    let linkOne = sliderArray.shift();
    let linkBehind = sliderArray.shift();
    sliderArray.push(linkOne);
    sliderArray.push(linkBehind);
    currentHeroImg[0].setAttribute('src',linkOne)
    nextHeroImg[0].setAttribute('src',linkBehind)
    reviewTranslate(500, currentHeroImg[0]);
    reviewTranslate(500, nextHeroImg[0]);
  });
  
  function nextSlide() {

    // reviewTranslate()

    let linkOne = sliderArray.pop();
    let linkBehind = sliderArray.pop();
    sliderArray.unshift(linkOne);
    sliderArray.unshift(linkBehind);
    currentHeroImg[0].setAttribute('src',linkOne)
    nextHeroImg[0].setAttribute('src',linkBehind)
    reviewTranslate(500, currentHeroImg[0]);
    reviewTranslate(800, nextHeroImg[0]);
  }
  
  nextBtn.addEventListener("click", nextSlide);
