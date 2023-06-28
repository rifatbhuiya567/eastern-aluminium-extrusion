/*  
*  Author Name: Rifat Bhuiya
*  Author Email: hello.rifatbhuiya@gmail.com
* 
* -----------------------
* Table Of Content
* -----------------------
* 1. Window Load Function Start
* 2. Scroll Function Start
* 3. Menu List Item Navigation Function Start
* 4. BackToTop Function Start
* 5. Gallery Slide Function Start
*/

window.onload = function() {
  $(backToTop).hide();
};
// Window Load Function End

var myNav = document.getElementById("my-nav");

$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if( scrolling > 40){
      $(myNav).addClass("nav-anim");
    }
    else{
      $(myNav).removeClass("nav-anim");
    }

    if( scrolling > 100){
        $(backToTop).fadeIn(500);
    }else{
        $(backToTop).fadeOut(500);
    }
});
// Scroll Function End

function navigationScroll() {
    var scrollLink = $('.scroll-link');
    
    $(scrollLink).on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 88
      }, 300);
    });
};
    
navigationScroll();
// Menu List Item Navigation Function End

var backToTop = document.getElementById("btt");

function backTopFunction() {
  window.onload = function() {
    $(backToTop).hide();
  };

  $(backToTop).click(function(){
    $('html,body').animate({
        scrollTop : 0
    }, 300)
  });
};
  
backTopFunction();
// BackToTop Function End

function gallerySlide() {
  var ourGallery = $(".gallery-slide");

  ourGallery.slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '.next',
      prevArrow: '.prev',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });
}

gallerySlide();

function areaGallerySlide() {
  var ourGallery = $(".area-gallery-slide");

  ourGallery.slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '.next2',
      prevArrow: '.prev2',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });
}

areaGallerySlide();
// Gallery Slide Funstion End

