

/* =====================
    Hero Form Step
======================= */
let currentStep = 1;
const backButton = document.querySelector('.travel-back-btn');

function nextStep() {
    console.log('Next step clicked');
    const currentStepElement = document.getElementById('step' + currentStep);
    const nextStepElement = document.getElementById('step' + (currentStep + 1));

    if (currentStep === 1) {
        backButton.style.display = 'block';
    }

    if (nextStepElement) {
        currentStepElement.style.display = 'none';
        nextStepElement.style.display = 'block';
        currentStep++;
    } else {
        alert('You have reached the end of the form.');
    }
}

function previousStep() {
    console.log('Previous step clicked');
    if (currentStep > 1) {
        const currentStepElement = document.getElementById('step' + currentStep);
        const previousStepElement = document.getElementById('step' + (currentStep - 1));

        currentStepElement.style.display = 'none';
        previousStepElement.style.display = 'block';
        currentStep--;

        if (currentStep === 1) {
            backButton.style.display = 'none';
        }
    } else {
        alert('You are already on the first step.');
    }
}

/* =====================
    Hero Form Step
======================= */

$(document).ready(function() {
    $('select:not(.ignore)').niceSelect();      
    FastClick.attach(document.body);
  });    



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
