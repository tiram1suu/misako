
// SEARCH


document.querySelector('.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const searchTerm = document.querySelector('.search-form input').value.toLowerCase();
    const keywords = {
        'о группе': '#about',
        'участницы': '#members',
        'мисако': '#about',
        'милена': '#members',
        'даша': '#members',
        'настя': '#members',
        'марго': '#members',
        'контакты': '#contact',
        'сотрудничество': '#for-whom',
        'музыка': '#unique',
        'инструменты': '#unique',
        'гуцинь': '#unique',
        'флейта': '#unique'
    };


    if (keywords[searchTerm]) {
        window.location.hash = keywords[searchTerm];
        return;
    }


    for (const [key, value] of Object.entries(keywords)) {
        if (key.includes(searchTerm) || searchTerm.includes(key)) {
            window.location.hash = value;
            return;
        }
    }

    alert('Попробуйте: о группе, участницы, музыка, инструменты, контакты');
});



// SLIDESHOW 

document.addEventListener('DOMContentLoaded', function () {

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slidesContainer = document.querySelector('.slides');

    let currentSlide = 0;
    let autoSlideInterval;


    function showSlide(n) {

        slides.forEach(slide => {
            slide.classList.remove('active');
        });


        dots.forEach(dot => {
            dot.classList.remove('active');
        });


        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }


        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');


        slidesContainer.style.transform = `translateX(-${currentSlide * 982}px)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }


    function prevSlide() {
        showSlide(currentSlide - 1);
    }


    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 10000); // Меняем каждые 5 секунд
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }


    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });


    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    startAutoSlide();

    document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slideshow-container').addEventListener('mouseleave', startAutoSlide);
});