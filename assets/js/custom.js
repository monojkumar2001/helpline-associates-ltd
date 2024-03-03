// Hamburger Menu

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
  slidesPerView: 2,
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
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 15,
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
  loop: true, // Enable loop mode
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


  var swiper = new Swiper(".myImage", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true, // Enable continuous loop
    autoplay: {
        delay: 2000, // Adjust the delay as needed
        disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

  var swiper = new Swiper(".GalleryImage", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    loop: true, // Enable continuous loop
    autoplay: {
        delay: 2000, // Adjust the delay as needed
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".button-prevs",
      prevEl: ".button-nexts",
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


document.addEventListener("DOMContentLoaded", function () {
  const faqTitles = document.querySelectorAll(".faq-question-title");

  faqTitles.forEach((title) => {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

function previewFile() {
  var preview = document.getElementById('previewImage');
  var fileInput = document.getElementById('imageInput');
  var file = fileInput.files[0];

  if (file) {
    // Check file size
    if (file.size > 5 * 1024 * 1024) { // 5MB in bytes
      alert('Image size exceeds 5MB limit.');
      // Reset the file input
      fileInput.value = "";
      // Reset the preview image
      preview.src = "/assets/images/home/icons/upload.png";
      return;
    }

    var reader = new FileReader();
    reader.onload = function() {
      preview.src = reader.result;
    }
    reader.readAsDataURL(file);
  } else {
    // If no file is selected, reset the preview image
    preview.src = "/assets/images/home/icons/upload.png";
  }
}


// =========== copy number
document.getElementById("copyButton").addEventListener("click", function() {
  // Get the input field
  var phoneNumberInput = document.getElementById("phoneNumber");
  
  // Select the text in the input field
  phoneNumberInput.select();
  
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  
  // Deselect the text
  phoneNumberInput.setSelectionRange(0, 0);
  
  // Optionally, provide some visual feedback that the text has been copied
  alert("Phone number copied to clipboard: " + phoneNumberInput.value);
});


