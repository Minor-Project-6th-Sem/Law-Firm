document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName('collapsible-btn');
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
