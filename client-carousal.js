const clientReviews = [
    { name: "images/hero-section/client.png", review: "It1 is a long established fact that a reader will be distracted by the readable content of a page when It is a long .It is a long .It is a long established fact that a reader will be . It is a long established fact that a reader ." },
    { name: "images/hero-section/client.png", review: "It2 is a long established fact that a reader will be distracted by the readable content of a page when It is a long .It is a long .It is a long established fact that a reader will be . It is a long established fact that a reader ." },
    { name: "images/hero-section/client.png", review: "It is a long established fact that a reader will be distracted by the readable content of a page when It is a long .It is a long .It is a long established fact that a reader will be . It is a long established fact that a reader ." },
];

const clientCarouselContainer = document.getElementById('client-carousel');

function createClientCarouselItem(review) {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('client-carousel-item');
    carouselItem.innerHTML = `
        <div class="review" style="display:flex; padding:5%;width:70%;margin:auto">
            <img src="${review.name}" style="width:8%">
            <div style="background-color: #f0f0f0; padding:0% 5%"><p>${review.review}</p></div>

        </div>
    `;
    clientCarouselContainer.appendChild(carouselItem);
}

function updateClientCarousel() {
    const carouselItems = document.querySelectorAll('.client-carousel-item');
    carouselItems.forEach(item => {
        item.classList.remove('client-center');
    });

    const centerIndex = Math.floor(carouselItems.length / 2);
    carouselItems[centerIndex].classList.add('client-center');
}

function next() {
    console.log("ok")
    const firstItem = clientCarouselContainer.firstElementChild;
    clientCarouselContainer.removeChild(firstItem);
    const newReview = clientReviews.shift();
    clientReviews.push(newReview);
    createClientCarouselItem(newReview);
    updateClientCarousel();
}

function prev() {
    const lastItem = clientCarouselContainer.lastElementChild;
    clientCarouselContainer.removeChild(lastItem);
    const newReview = clientReviews.pop();
    clientReviews.unshift(newReview);
    createClientCarouselItem(newReview);
    updateClientCarousel();
}


clientReviews.slice(0, 3).forEach(review => createClientCarouselItem(review));
updateClientCarousel();