// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    autoplay:
    {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      426: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween:20,
      },
  
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1650: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    },
  });

  // odometer
  setInterval (() =>{
    odometer.innerHTML = 12345;
},300)

// wow 
new WOW().init();