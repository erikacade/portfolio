const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


const nextSlide = () => {
   // Get current class
   const current = document.querySelector('.current');
   // Remove current class
   current.classList.remove('current');
   // Check for next slide
   if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add('current');
   } else {
      // Add current to start
      slides[0].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
 };

const prevSlide = () => {
   // Get current class
   const current = document.querySelector('.current');
   //Remove current class
   current.classList.remove('current');
   //Check for previous slide
   if(current.previousElementSibling) {
      //add current to prev sibling
      current.previousElementSibling.classList.add('current');
   } else {
      // add current to last
      slides[slides.length - 1].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
}

//button events

next.addEventListener('click', e => {
   nextSlide();
});

prev.addEventListener('click', e => {
   prevSlide();
});