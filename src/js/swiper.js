const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      type:'bullets',
      clickable:true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction:false
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: true
      },      
  });