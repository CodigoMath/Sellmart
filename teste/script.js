// script.js
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = carouselItems[0].offsetWidth + 16; // Largura do card mais o gap
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function cloneItems() {
        for (let i = 0; i < totalItems; i++) {
            const clone = carouselItems[i].cloneNode(true);
            carousel.appendChild(clone);
        }
        for (let i = totalItems - 1; i >= 0; i--) {
            const clone = carouselItems[i].cloneNode(true);
            carousel.prepend(clone);
        }
    }

    cloneItems();

    nextButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex === totalItems) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            carousel.style.transform = `translateX(0)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
                currentIndex++;
                updateCarousel();
            }, 50);
        } else {
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            carousel.style.transition = 'none';
            currentIndex = totalItems - 1;
            const itemWidth = carouselItems[0].offsetWidth + 16;
            carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
                currentIndex--;
                updateCarousel();
            }, 50);
        } else {
            updateCarousel();
        }
    });
});
