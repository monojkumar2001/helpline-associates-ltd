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
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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

