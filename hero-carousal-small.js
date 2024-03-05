const natureItems = document.querySelectorAll('.nature-item');
let currentIndex = 0;

function showSlide(index) {
  natureItems.forEach(item => {
    item.style.display = 'none';
  });
  natureItems[index].style.display = 'block';
}

function nNextSlide() {
  currentIndex = (currentIndex + 1) % natureItems.length;
  showSlide(currentIndex);
}

function nPreviousSlide() {
  currentIndex = (currentIndex - 1 + natureItems.length) % natureItems.length;
  showSlide(currentIndex);
}


showSlide(currentIndex);
document.getElementById('n-nextBtn').addEventListener('click', nNextSlide);
document.getElementById('n-prevBtn').addEventListener('click', nPreviousSlide);


setInterval(()=>{
    nNextSlide()
},2000)