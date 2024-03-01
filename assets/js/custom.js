// Hamburger Menu
$('.sub-btn').click(function(event){
  $(this).next('.submenu').slideToggle();
  event.preventDefault();
});
$('.hamburger-menu').click(function() {
  $('.header-menu').addClass('active');
});
$('.close-btn').click(function() {
  $('.header-menu').removeClass('active');
});

// sticky Header
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
  var scroll = wind.scrollTop();
  if (scroll < 100) {
      sticky.removeClass('sticky');
  } else {
      sticky.addClass('sticky');
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.3,
  spaceBetween: 20,
  freeMode: true,
  loop: true, // Enable continuous loop
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0, // Set rotation angle to 0 degrees
    stretch: 0, // Set stretch to 0 to disable stretching
    depth: 100, // Set depth to control the depth of the blur effect
    modifier: 1, // Set modifier to control the intensity of the blur effect
    slideShadows: false, // Disable slide shadows
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".myteam", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".myImage", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


  function showTabContent(tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    const activeTabContent = document.getElementById(tabName + "Content");
    activeTabContent.style.display = "block";

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    const activeTabButton = document.getElementById(tabName + "Btn");
    activeTabButton.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("my-video");
  var playButton = document.getElementById("play-video-btn");

  playButton.addEventListener("click", function () {
    video.play();
  });
});
