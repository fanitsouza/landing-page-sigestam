const bar = document.querySelector('.bars');
const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
  menu.classList.toggle('show_menu');
});

// DIFERENCIAIS SLIDERS

var swiper = new Swiper('.differencesSwiper', {
    slidesPerView: 7,
    spaceBetween: 50,
    loop: true,
    autoplay:{
        delay:1500,
    },
    breakpoints:{
        1200:{
            slidesPerView: 5,
        },
        900:{
            slidesPerView: 4,
        },
        500:{
            slidesPerView: 2, spaceBetween: 10 
        },
        
    },
});

// FUNCIONALIDADES SLIDERS

var swiper = new Swiper('.featureSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    //autoplay:{
      //  delay:1500,
    //},
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        1200:{
            slidesPerView: 3,
            spaceBetween: 30
        },
        900:{
            slidesPerView: 2,
            spaceBetween: 20
        },
        500:{
            slidesPerView: 1,
            spaceBetween: 15
        },
        0: {  
            slidesPerView: 1,
            spaceBetween: 10
        }
    },
});
