//Make navbar functional

// Select Element
const selectElement = (element) => document.querySelector(element);

// Select Menu Icons (Bars and Times)
selectElement('.menu-icons').addEventListener('click',() => {
	selectElement('nav').classList.toggle('active');
});

// Change Navbar On Scroll
window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            const windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
        })
        

        //Typewriter Effect


class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 200;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete

      if(!this.isDeleting && this.txt === fullTxt) {

        // Make pause at end

        typeSpeed = this.wait;

        // Set delete to true

        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;

        // Move to next word

        this.wordIndex++;

        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  // Carousel
  var flkty = new Flickity( '.main-gallery', {
    // options
    contain: true,
    autoplay: true
  });