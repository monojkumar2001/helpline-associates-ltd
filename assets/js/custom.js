//   ========= Header  ===================
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

// $('.hamburger-menu').click(function() {
//   $('.header-menu').addClass('active');
// });
// $('.close-btn').click(function() {
//   $('.header-menu').removeClass('close');
// });
$(document).ready(function() {
  $('.hamburger-menu').click(function() {
    $('.header-menu').addClass('active');
  });
  
  $('.close-btn').click(function() {
    $('.header-menu').removeClass('active');
  });
  $('.sub-btn').click(function() {
    $('.header-menu').removeClass('active');
  });
});

  function removeSubmenu(event) {
    if (isMobileDevice()) {
      closeHeaderMenu();
    }
  }

  var subBtns = document.querySelectorAll('.sub-btn');
  subBtns.forEach(function(btn) {
    btn.addEventListener('click', removeSubmenu);
  });

  $(".hamburger-menu").click(function () {
    $(".header-menu").addClass("active");
  });

  $(".close-btn").click(function () {
    $(".header-menu").removeClass("active");
  });


// sticky Header

var wind = $(window);
var sticky = $("#sticky-header");
wind.on("scroll", function () {
  var scroll = wind.scrollTop();
  if (scroll < 100) {
    sticky.removeClass("sticky");
  } else {
    sticky.addClass("sticky");
  }
});

// Service Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  loop: true, // Enable continuous loop
  autoplay: {
    delay: 2000,
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
    768: {
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

//  Our Team Slider
var swiper = new Swiper(".myteam", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
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

//  Our Image Slider

var swiper = new Swiper(".myImage", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
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

//  Our Gallery Slider

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

//   Hero Form Tap

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

//  Faq Active Class
document.addEventListener("DOMContentLoaded", function () {
  const faqTitles = document.querySelectorAll(".faq-question-title");

  faqTitles.forEach((title) => {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});

function previewFile() {
  var preview = document.getElementById("previewImage");
  var fileInput = document.getElementById("imageInput");
  var file = fileInput.files[0];

  if (file) {
    // Check file size
    if (file.size > 5 * 1024 * 1024) {
      // 5MB in bytes
      alert("Image size exceeds 5MB limit.");
      // Reset the file input
      fileInput.value = "";
      // Reset the preview image
      preview.src = "/assets/images/home/icons/upload.png";
      return;
    }

    var reader = new FileReader();
    reader.onload = function () {
      preview.src = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    // If no file is selected, reset the preview image
    preview.src = "/assets/images/home/icons/upload.png";
  }
}

// Hero from   General Passengers

/* =====================
    Hero Form Step
======================= */
let currentStep = 1;
const backButton = document.querySelector(".travel-back-btn");

function nextStep() {
  console.log("Next step clicked");
  const currentStepElement = document.getElementById("step" + currentStep);
  const nextStepElement = document.getElementById("step" + (currentStep + 1));

  if (currentStep === 1) {
    backButton.style.display = "block";
  }

  if (nextStepElement) {
    currentStepElement.style.display = "none";
    nextStepElement.style.display = "block";
    currentStep++;
  } else {
    alert("You have reached the end of the form.");
  }
}

function previousStep() {
  console.log("Previous step clicked");
  if (currentStep > 1) {
    const currentStepElement = document.getElementById("step" + currentStep);
    const previousStepElement = document.getElementById(
      "step" + (currentStep - 1)
    );

    currentStepElement.style.display = "none";
    previousStepElement.style.display = "block";
    currentStep--;

    if (currentStep === 1) {
      backButton.style.display = "none";
    }
  } else {
    alert("You are already on the first step.");
  }
}

/* =====================
  Select option
======================= */

$(document).ready(function () {
  $("select:not(.ignore)").niceSelect();
  FastClick.attach(document.body);
});

// Hero from  Corporate Passengers

let currentStep2 = 1;
const backButton2 = document.querySelector(".travel-back-btn2");

function nextSteps() {
  console.log("Next step clicked");
  const currentStepElement = document.getElementById("steps" + currentStep2);
  const nextStepElement = document.getElementById("steps" + (currentStep2 + 1));

  if (currentStep2 === 1) {
    backButton2.style.display = "block";
  }

  if (nextStepElement) {
    currentStepElement.style.display = "none";
    nextStepElement.style.display = "block";
    currentStep2++;
  } else {
    alert("You have reached the end of the form.");
  }
}

function previousSteps() {
  console.log("Previous step clicked");
  if (currentStep2 > 1) {
    const currentStepElement = document.getElementById("steps" + currentStep2);
    const previousStepElement = document.getElementById(
      "steps" + (currentStep2 - 1)
    );

    currentStepElement.style.display = "none";
    previousStepElement.style.display = "block";
    currentStep2--;

    if (currentStep2 === 1) {
      backButton2.style.display = "none";
    }
  } else {
    alert("You are already on the first step.");
  }
}

// Select Language
const selectCountry = document.querySelector(".select-country");
const list = document.querySelector(".select-list"); // Changed to select-list
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selectedImg");

selectCountry.addEventListener("click", () => {
  list.classList.toggle("show");
});

list.addEventListener("click", (e) => {
  const listItem = e.target.closest(".select-item");
  if (listItem) {
    const img = listItem.querySelector("img");
    const text = listItem.querySelector(".select-text").innerHTML;

    selectedImg.src = img.src;
    selected.innerHTML = text;

    list.classList.remove("close");
  }
});

// // Select Gender

// const selectGender = document.querySelector(".select-gender");
// const selectListGender = document.querySelector(".select-list-gender");
// const selectedGender = document.querySelector(".selected-gender");
// const selectedImgGender = document.querySelector(".selected-img-gender");

// selectGender.addEventListener("click", () => {
//   selectListGender.classList.toggle("show");
// });

// selectListGender.addEventListener("click", (e) => {
//   const selectItemGender = e.target.closest(".select-item-gender");
//   if (selectItemGender) {
//     const img = selectItemGender.querySelector("img"); // Corrected selector
//     const selectTextGender = selectItemGender.querySelector(
//       ".select-text-gender"
//     ).innerHTML;

//     selectedImgGender.src = img.src;
//     selectedGender.innerHTML = selectTextGender;

//     selectListGender.classList.remove("show"); // Corrected class name
//   }
// });

// Upload file
 var uploadBtn = document.getElementById("uploadBtn");

 uploadBtn.addEventListener("dragover", function (e) {
   e.preventDefault();
   uploadBtn.style.backgroundColor = "#f0f0f0";
 });

 uploadBtn.addEventListener("dragleave", function (e) {
   e.preventDefault();
   uploadBtn.style.backgroundColor = "#4CAF50";
 });

 uploadBtn.addEventListener("drop", function (e) {
   e.preventDefault();
   uploadBtn.style.backgroundColor = "#4CAF50";
   var file = e.dataTransfer.files[0];
   previewFile(file);
 });

 function previewFile(file) {
   var preview = document.getElementById("previewImage");
   var reader = new FileReader();

   reader.onloadend = function () {
     preview.src = reader.result;
   };

   if (file) {
     reader.readAsDataURL(file);
   } else {
     preview.src = "/assets/images/home/icons/upload.png"; // Placeholder image source
   }
 }

 document.getElementById("imageInput").addEventListener("change", function (e) {
   var file = e.target.files[0];
   previewFile(file);
 });

//  Number Copy 

 function copyText(elementId) {
   var textToCopy = document.getElementById(elementId).innerText;

   // Create a temporary textarea element
   var textarea = document.createElement("textarea");
   textarea.value = textToCopy;
   document.body.appendChild(textarea);

   // Select and copy the text inside the textarea
   textarea.select();
   document.execCommand("copy");

   // Remove the temporary textarea
   document.body.removeChild(textarea);

   // Change the button text to indicate successful copy
   var copyButton = document.getElementById(elementId).nextElementSibling;
   copyButton.innerHTML = "<span>Copied!</span>";
   copyButton.querySelector("img").style.display = "none";

   // Reset button text after a short delay
   setTimeout(function () {
     copyButton.innerHTML =
       '<span>Copy</span><img src="/assets/images/home/icons/copy.svg" alt="Copy Icon" />';
     copyButton.querySelector("img").style.display = "inline";
   }, 2000); // Reset after 2 seconds
 }


//  upload transtion image
const dropArea = document.getElementById("dropArea");

// Prevent default behavior (open image in browser)
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area on drag over
["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropArea.classList.add("highlight");
}

function unhighlight() {
  dropArea.classList.remove("highlight");
}

// Handle dropped files
dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Check if file is an image
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        const img = new Image();
        img.src = reader.result;

        // Display image preview
        dropArea.innerHTML = "";
        dropArea.appendChild(img);
      };
    } else {
      // If file is not an image, display an error message
      dropArea.innerHTML =
        "<p>File type not supported. Please upload an image file.</p>";
    }
  }
}

  // Image Propup 

// document.querySelectorAll('.gallery-image').forEach(function (img, index) {
//   img.addEventListener('click', function () {
//     openModal(index);
//   });
// });

// var modal = document.getElementById('imageModal');
// var closeBtn = document.getElementsByClassName('btn-img-close')[0];


// function openModal(index) {
//   var modalImage = document.getElementById('modalImage');
//   modalImage.src = document.getElementsByClassName('gallery-image')[index].src;
//   modal.style.display = 'block';
// }

// closeBtn.onclick = function() {
//   modal.style.display = 'none';
// };


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };


  // Image Propup 

  document.querySelectorAll('.gallery-image').forEach(function (img, index) {
    img.addEventListener('click', function () {
      openModal(index);
    });
  });
  
  var modal = document.getElementById('imageModal');
  var closeBtn = document.getElementsByClassName('btn-img-close')[0];
  
  
  function openModal(index) {
    var modalImage = document.getElementById('modalImage');
    modalImage.src = document.getElementsByClassName('gallery-image')[index].src;
    modal.style.display = 'block';
  }
  
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
  
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };