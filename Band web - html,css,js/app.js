let dropdown = document.querySelector('.dropdown')
let dropd = document.querySelector('.dropd');
let eventt = false;

dropdown.addEventListener('mouseover', mouseon);
dropd.addEventListener('mouseover', mouseon);
dropdown.addEventListener('mouseout', mouseoff);
dropd.addEventListener('mouseout', mouseoff);

function mouseon(e) {

    let mousein = true;
    if (mousein) {
        dropdown.classList.add('show')
        dropd.style.backgroundColor = '#cccccc';
        dropd.style.color = 'black';
    }
}

function mouseoff(e) {
    dropdown.classList.remove('show')
    dropd.style.backgroundColor = 'black';
    dropd.style.color = 'white';
}

/*----------------------------------------------------------------*/

let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.photos');
    let dots = document.querySelectorAll('.dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}