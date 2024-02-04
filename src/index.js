import './styles/style.scss';


// Slider behavior 
document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    function nextSlide() {
        const sliderItems = document.getElementsByClassName("card");
        const lastItem = sliderItems[sliderItems.length - 1];
        lastItem.parentNode.prepend(lastItem);
    }

    function prevSlide() {
        const sliderItems = document.getElementsByClassName("card");
        const firstItem = sliderItems[0];
        firstItem.parentNode.append(firstItem);
    }

    leftArrow.addEventListener("click", prevSlide);
    rightArrow.addEventListener("click", nextSlide);
});
