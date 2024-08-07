document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;
    const slideInterval = 15000; 

    function updateSlide(index) {
        const slideWidth = slides[0].clientWidth;
        document.querySelector('.slider-container').style.transform = `translateX(-${index * slideWidth}px)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            updateSlide(index);
        });
    });

    let autoSlide = setInterval(() => {
        console.log('Auto slide triggered'); 
        showNextSlide();
    }, slideInterval);

    document.getElementById('slider-section').addEventListener('mouseover', () => {
        clearInterval(autoSlide);
        console.log('Auto slide paused'); 
    });

    document.getElementById('slider-section').addEventListener('mouseout', () => {
        autoSlide = setInterval(() => {
            console.log('Auto slide resumed'); 
            showNextSlide();
        }, slideInterval);
    });

    updateSlide(currentIndex);
});
