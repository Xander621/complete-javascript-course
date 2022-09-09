'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/**
 * Section 13 - 186 Selecting, Creating and Deleting Elements
 * 
 * Creating and inserting elements
 * .insertAdjacentHTML - see section 11
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
  // legacy method
  // message.parentElement.removeChild(message);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Section 13 - 187 Styles, Attributes and Classes
 * 
 * Creating and inserting elements
 * .insertAdjacentHTML - see section 11
 */

// // Styles: These are inline styles on the message element.
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // Can log to console inline styles, i.e. the ones we set on message, but not on computed styles
// console.log(message.style.color);               // will not see in console log
// console.log(message.style.backgroundColor);     // will see in console log

// // To see comuted styles use the getComputedStyle method on the element
// console.log(getComputedStyle(message));         // Shows all styles associated on the element
// console.log(getComputedStyle(message).color);   // console logs the color
// console.log(getComputedStyle(message).height);  // console logs the height

// // sets an inline style by using the computedStyle and modifiying it.
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

// // CSS custom properties i.e. variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

// // Non-standard vs standard attributes 
// console.log(logo.designer);                   // reports undefined because designer is a custom attribute
// console.log(logo.getAttribute('designer'));   // will show the value of the custom attribute

// // Data attributes: see index.html version-number to camelcase for this example
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// console.log(logo);
// logo.classList.remove('c');
// console.log(logo);
// console.log('Contains j: ' + logo.classList.contains('j'));
// logo.classList.toggle('j');
// console.log(logo);
// console.log('Contains j: ' + logo.classList.contains('j'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 188 Implementing Smooth Scrolling
 */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

  // Scrolling 
  // window.scrollTo(s1coords.left, s1coords.top);  // top relative to viewport not page
  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY);  // fix by adding current Y scroll offset

  // Enable smooth scrolling, convert to object (OLD SCHOOL WAY)
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top:s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });


  section1.scrollIntoView({behavior: 'smooth'});  // Modern browsers support this
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 189 Types of Events and Event Handlers
 */

