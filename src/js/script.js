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

// Counter


const counters = document.querySelectorAll('.counter');
const speed = 100; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

	

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


// Carousel

// Declare Variables

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);
function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}
// Go to Next slide
function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}

// Go to Prev slide
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

// Click for next or prvious slide

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


// Portfolio Filter

const buttons=document.querySelector("#buttons").children;
const items=document.querySelector(".items").children;

 
 for(let i=0; i<buttons.length; i++){
   buttons[i].addEventListener("click",function(){

      for(let j=0; j<buttons.length; j++){
        buttons[j].classList.remove("active")
      }
      this.classList.add("active")
      const target=this.getAttribute("data-target");

      for(let k=0; k<items.length; k++){
              items[k].style.opacity="0.5";
              items[k].style.transform="scale(0.8)";


              if(items[k].getAttribute("data-id")==target){
                items[k].style.opacity="1";
              items[k].style.transform="scale(1)";
              }
              if(target=="all"){
                items[k].style.opacity="1";
              items[k].style.transform="scale(1)";
              }
      }
   })
 }


