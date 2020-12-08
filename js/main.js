$(document).ready(function () {
   var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })
  ymaps.ready(init);
         function init(){
             var myMap = new ymaps.Map("map", {
                 center: [55.76, 37.64],
                 zoom: 7
             });
         }
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })        

  let menuButton = document.querySelector(".menu-button");
  let noScroll = document.querySelector("body");

  menuButton.addEventListener("click", function() {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
    noScroll.classList.toggle("scroll-hidden")
  });

  var modalButton = $("[data-toogle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal)

  function openModal() {
    var targetModal = $(this).attr("data-href")
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    let noScroll = document.querySelector("body");
    noScroll.classList.toggle("scroll-hidden")
    let flowScroll = document.querySelector(".modal__overlay");
    flowScroll.classList.toggle("scroll-flow")
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var body = $("body");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    body.removeClass("scroll-hidden");
  }
  
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
    closeModal(event);
  });
  
});