let slideIndex = 1;

showSlider(slideIndex);

window.nextSlide = function() {
    console.log("+1");
    showSlider((slideIndex += 1));
}

window.prevSlide = function() {
    console.log("-1");
    showSlider((slideIndex -= 1));
}

// function currentSlide(n) {
//     showSlider((slideIndex = n));
// }

function showSlider(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}