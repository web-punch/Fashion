$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("mobile-menu--visible");
  });

  var linkNew = $('[data-toggle=new]');
    linkNew.on('click', openLinkNew);
  var linkBest = $('[data-toggle=best]');
    linkBest.on('click', openLinkBest);
  var linkSoon = $('[data-toggle=soon]');
    linkSoon.on('click', openLinkSoon);
  function openLinkNew() {
    var linkOverlayNew = $('.trend-link__new');
    var linkOverlayBest = $('.trend-link__best');
    var linkOverlaySoon = $('.trend-link__soon');
    var itemMinimalist = $('.trend-item__minimalist');
    var itemLuxury = $('.trend-item__luxury');
    var itemFull = $('.trend-item__full');
    var itemPinky = $('.trend-item__pinky');
    linkOverlayNew.addClass('trend-link__new--visability');
    linkOverlayBest.removeClass('trend-link__best--visability');
    linkOverlaySoon.removeClass('trend-link__soon--visability');
    itemMinimalist.removeClass('trend-item__minimalist--visability');
    itemLuxury.removeClass('trend-item__luxury--visability');
    itemFull.removeClass('trend-item__full--visability');
    itemPinky.removeClass('trend-item__pinky--visability');
  }
  function openLinkBest() {
    var linkOverlayNew = $('.trend-link__new');
    var linkOverlayBest = $('.trend-link__best');
    var linkOverlaySoon = $('.trend-link__soon');
    var itemMinimalist = $('.trend-item__minimalist');
    var itemLuxury = $('.trend-item__luxury');
    var itemFull = $('.trend-item__full');
    var itemPinky = $('.trend-item__pinky');
    linkOverlayNew.removeClass('trend-link__new--visability');
    linkOverlayBest.addClass('trend-link__best--visability');
    linkOverlaySoon.removeClass('trend-link__soon--visability');
    itemMinimalist.removeClass('trend-item__minimalist--visability');
    itemLuxury.removeClass('trend-item__luxury--visability');
    itemFull.addClass('trend-item__full--visability');
    itemPinky.addClass('trend-item__pinky--visability');
  }
  function openLinkSoon() {
    var linkOverlayNew = $('.trend-link__new');
    var linkOverlayBest = $('.trend-link__best');
    var linkOverlaySoon = $('.trend-link__soon');
    var itemMinimalist = $('.trend-item__minimalist');
    var itemLuxury = $('.trend-item__luxury');
    var itemFull = $('.trend-item__full');
    var itemPinky = $('.trend-item__pinky');
    linkOverlayNew.removeClass('trend-link__new--visability');
    linkOverlayBest.removeClass('trend-link__best--visability');
    linkOverlaySoon.addClass('trend-link__soon--visability');
    itemMinimalist.addClass('trend-item__minimalist--visability');
    itemLuxury.addClass('trend-item__luxury--visability');
    itemFull.removeClass('trend-item__full--visability');
    itemPinky.removeClass('trend-item__pinky--visability');
  }
  var mySwiper = new Swiper('.reviews__swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // Автовоспроизведение
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Остановка автовоспроизведения при наведении мыши
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });
  var mySwiper = new Swiper('.history__swiper-container', {
    // Optional parameters
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: '.history__swiper-button--next',
      prevEl: '.history__swiper-button--prev',
      disabledClass: 'history__swiper-button--disabled'
    },
  })
  // Обработка форм
  $(".newsletter__form").validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: "Введите ваш email",
        email: "Ваш email должен быть в формате name@domain.com"
      },
    },
  });
    
});