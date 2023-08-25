// const nav = document.querySelectorAll('#nav_menu')
// const open_nav = document.querySelector('#open_nav')
// const nav_close = document.querySelector('#nav_close')
// console.log = (/*nav , open_nav, nav_close */)
// swiper-slide
// const adver_bnr = new Swiper('#adver_bnr',{
//     direction: 'horizontal',
//     autoplay:{delay:1000},
//     loop: true,
    // navigation: {
    //     nextEl: '#nav_adver .swiper-button-next',
    //     prevEl: '#nav_adver .swiper-button-prev',
    // },
// })

//<!-- Initialize Swiper -->
// var swiper = new Swiper("#adver_bnr", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".swiper-scrollbar",
        clickable: true,
    },
});