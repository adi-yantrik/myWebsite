const textEle = document.getElementById('text-animation');
const texts = [
  'Welcome to my website!',
  'मेरो वेबसाइटमा स्वागत छ!'
]; // Array of texts to cycle through
let textIndex = 1;
let charInd = 1;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    textEle.textContent = currentText.slice(0, charInd - 1);
    charInd--;
  } else {
    textEle.textContent = currentText.slice(0, charInd + 1);
    charInd++;
  }

  if (!isDeleting && charInd === currentText.length) {
    isDeleting = true;
    setTimeout(type, 2000); // Wait before starting to delete
  } else if (isDeleting && charInd === 1) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // Cycle through texts
    setTimeout(type, 50); // Wait before starting to type
  } else {
    const typingSpeed = isDeleting ? 50 : 150; // Adjust typing and deleting speed
    setTimeout(type, typingSpeed);
  }
}

type();// Start the typewriter effect


const blinkingText = document.getElementById('blinkingText');
const toggleButton = document.getElementById('toggleButton');
let isBlinking = true;

toggleButton.addEventListener('click', () => {
  if (isBlinking) {
    blinkingText.style.animation = 'none';
    document.getElementById("toggleButton").remove(); // Pause blinking
  } else {
    blinkingText.style.animation = 'blink 1s infinite'; // Resume blinking
  }
  isBlinking = !isBlinking;
});

function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }}
  


  //for about page
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  const sliderImages = document.querySelectorAll('.slide-in');
  
  function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
      // halfway through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 1;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
  
      console.log(slideInAt);
    });
  }
  
  window.addEventListener('scroll', debounce(checkSlide));



  //after about
  let scrollContainer = document.querySelector('.new-gallery');
  let backBtn = document.getElementById("backBtn");
  let nextBtn = document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel", (evt) =>{
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener('click', ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 1280;
})
backBtn.addEventListener('click', ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 1280;
})

window.addEventListener("load", function() {
  const spinner = document.getElementById("loadingSpinner");
  spinner.style.display = "none"; // Hide the spinner once everything is loaded
});
//projects



