let currentStep2 = 1;
const backButton2 = document.querySelector('.travel-back-btn2');

function nextSteps() {
    console.log('Next step clicked');
    const currentStepElement = document.getElementById('steps' + currentStep);
    const nextStepElement = document.getElementById('steps' + (currentStep + 1));

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

function previousSteps() {
    console.log('Previous step clicked');
    if (currentStep > 1) {
        const currentStepElement = document.getElementById('steps' + currentStep);
        const previousStepElement = document.getElementById('steps' + (currentStep - 1));

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


