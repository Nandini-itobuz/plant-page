let currentItem = 0

function updateCarousel(currentItem) {
    const getClients = document.querySelectorAll(".client");
        getClients.forEach(ele => {
            ele.style.translate = `${90* (+ele.dataset.id - currentItem)}%`;
        });
}

(function (){
    updateCarousel(currentItem);
})()


function next(){
    console.log('clickee');
    currentItem = (currentItem+1) % 3;
    updateCarousel(currentItem)
}

// setInterval(() => {
//     next();
//   }, 2000);
