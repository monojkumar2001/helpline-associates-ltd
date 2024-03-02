let currentStep2 = 1;
const backButton2 = document.querySelector('.travel-back-btn2');

function nextSteps() {
    console.log('Next step clicked');
    const currentStepElement = document.getElementById('steps' + currentStep2);
    const nextStepElement = document.getElementById('steps' + (currentStep2 + 1));

    if (currentStep2 === 1) {
        backButton2.style.display = 'block';
    }

    if (nextStepElement) {
        currentStepElement.style.display = 'none';
        nextStepElement.style.display = 'block';
        currentStep2++;
    } else {
        alert('You have reached the end of the form.');
    }
}

function previousSteps() {
    console.log('Previous step clicked');
    if (currentStep2 > 1) {
        const currentStepElement = document.getElementById('steps' + currentStep2);
        const previousStepElement = document.getElementById('steps' + (currentStep2 - 1));

        currentStepElement.style.display = 'none';
        previousStepElement.style.display = 'block';
        currentStep2--;

        if (currentStep2 === 1) {
            backButton2.style.display = 'none';
        }
    } else {
        alert('You are already on the first step.');
    }
}


// document.addEventListener("DOMContentLoaded", function () {
//     var video = document.getElementById("my-video");
//     var playButton = document.getElementById("play-video-btn");
  
//     playButton.addEventListener("click", function () {
//       video.play();
//     });
//   });