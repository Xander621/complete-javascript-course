'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
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

// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   // If you only wanted it to happen once you could remove the listener here
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// // Remove listener based on a timeout of 3 seconds
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Older style used property... better is to use addEventListener
// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 190/191 Event propagation: Bubbling and Capturing
 */

// // random color rgb(255, 255, 255)
// const  randomInt = (min,max) => 
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// // console.log((randomColor(0,255)));

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log('LINK', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget === this);

//   // Stop propagation, in practice may not be what you need to do.
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   console.log('LINKS', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   console.log('NAV', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 192 Event Delegation: Implmenting Page Navigation
 */

// // Page navigation w/o event delegation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// Page navigation w/ event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 193 DOM Traversing
 */
// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: can only access direct siblings (pervious or next)
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 194 Building a tabbed component
 */

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Add event handlers w/ event delegation & using the closest method to
// return the operations__tab button regardless of what is clicked within
// the button class, i.e. button or span in this case.
tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab'); 

  // Guard clause
  if(!clicked) return;

  // Activate clicked tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 195 Passing Arguments to Event Handlers
 */

// Menu fade animation using event delegation
const nav = document.querySelector('.nav');

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// using bind to assign 
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 196 Implementing a Sticky Navigation: The Scroll Event
 * 
 * Sticky Navigation using scroll event, this is not efficient and is 
 * used here for learning purposes
 */

// // Determine position of section 1
// const initialCoordsStickyNav = section1.getBoundingClientRect();
// // console.log(initialCoordsStickyNav);

// window.addEventListener('scroll', function(e) {
//   // console.log(e);
//   // console.log(window.scrollY);
//   if(window.scrollY > initialCoordsStickyNav.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 197 A Better Way: The Intersection Observer API
 */

// Observer callback
// entries: array from threshold of obsOptions
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// // Observer options
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]    // 0, 20%
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function(entries) {
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting)
    nav.classList.add('sticky');
  else
    nav.classList.remove('sticky');

}

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});
headerObserver.observe(header);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 198 Revealing Elements on Scroll
 */

// Reveal sections
const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;   // guard clause
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {root: null, threshold: 0.15});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Section 13 - 199 Lazy Loading Images
 * 
 * Generate a low rez placeholder img to load with the page and create
 * a blur filter and apply to the low rez img.
 * 
 * Create a data-src attribute with the high rez image and load high 
 * rez on observer and when it finishes loading remove the blur filter.
 */

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // Remove blury filter on finish load of img
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

// start loading images before the user gets to images
const imgObserver = new IntersectionObserver(loadImg, 
  {
    root: null, 
    threshold: 0, 
    rootMargin: '200px'
  }
);

imgTargets.forEach((img) => {
  imgObserver.observe(img);
})