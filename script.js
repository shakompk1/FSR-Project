const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: true
      },      
  });