/* 토글버튼 클릭 */


/* 폰 화면 슬라이드 */
const slideshow = document.getElementById('slideshow');
const slides = slideshow.children;
let currentSlide = 0;

function nextSlide() {
slides[currentSlide].style.opacity = 0;
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].style.opacity = 1;
}
setInterval(nextSlide, 2500);

/* NPC 슬라이드 */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 0,
    /*
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });