

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





// Toggle the display of options
function toggleOptions() {
    var options = document.getElementById("select");
    options.classList.toggle("show");
  }
  
  // Handle selection of an option
  document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', event => {
      var selectedOption = event.currentTarget;
      var value = selectedOption.getAttribute("value");
      var text = selectedOption.textContent;
      var imageSrc = selectedOption.getAttribute("data-image");
  
      // Clear the selected option display
      var selectedDisplay = document.querySelector('.selected-option');
      selectedDisplay.innerHTML = ''; // Clear existing content
  
      // Create an <img> element for the image
      var image = document.createElement("img");
      image.src = imageSrc || ''; // If image source is not provided, set an empty string
      image.alt = text; // Use the text as alt attribute for accessibility
      selectedDisplay.appendChild(image);
  
      // Append the text to the selected option display
      var textNode = document.createTextNode("Select " + text);
      selectedDisplay.appendChild(textNode);
  
      // Optionally, you can hide the options after selection
      var options = document.getElementById("select");
      options.classList.remove("show");
  
      // Mark the selected option as selected
      var selectedOptions = document.querySelectorAll('.option');
      selectedOptions.forEach(option => {
        option.classList.remove('selected');
      });
      selectedOption.classList.add('selected');
    });
  });
  