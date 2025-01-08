// Toggle menu visibility on small screens (hamburger menu)
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

// Toggle the 'active' class to show/hide the menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Initialize Swiper for the category swiper with specific configurations
const categorySwiper = new Swiper('.category__swiper', {
  slidesPerView: 'auto',          // Automatically adjusts the number of slides visible
  centeredSlides: true,           // Centers the active slide
  spaceBetween: 20,               // Space between slides
  grabCursor: true,               // Show a grab cursor on hover
  loop: true,                     // Enable looping of slides
  autoplay: {
    delay: 3000,                  // Slide change every 3 seconds
  },
  resistance: true,               // Enable resistance when swiping
  resistanceRatio: 0.85,          // Adjust the resistance ratio
  navigation: {
    nextEl: '.category-next-button',  // Next button for navigation
    prevEl: '.category-prev-button',  // Previous button for navigation
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,         // 1.5 slides visible on screens >= 320px
      spaceBetween: 15,           // Space between slides on small screens
    },
    480: {
      slidesPerView: 2.2,         // 2.2 slides visible on screens >= 480px
      spaceBetween: 15,           // Space between slides on medium screens
    },
    768: {
      slidesPerView: 3,           // 3 slides visible on screens >= 768px
      spaceBetween: 20,           // Space between slides on tablet-sized screens
    },
    1024: {
      slidesPerView: 4,           // 4 slides visible on screens >= 1024px
      spaceBetween: 20,           // Space between slides on large screens
    },
  },
});

// Initialize Swiper for the new arrivals section
const arrivalsSwiper = new Swiper('.arrivals__swiper', {
  slidesPerView: 1,               // Default slides visible
  spaceBetween: 20,               // Space between slides
  loop: true,                     // Enable looping of slides
  navigation: {
    nextEl: '.arrivals-next-button',  // Next button for navigation
    prevEl: '.arrivals-prev-button',  // Previous button for navigation
  },
  breakpoints: {
    640: {
      slidesPerView: 2,           // 2 slides visible on screens >= 640px
      spaceBetween: 20,           // Space between slides on medium screens
    },
    1024: {
      slidesPerView: 3,           // 3 slides visible on screens >= 1024px
      spaceBetween: 30,           // Space between slides on large screens
    },
    1280: {
      slidesPerView: 4,           // 4 slides visible on screens >= 1280px
      spaceBetween: 30,           // Space between slides on larger screens
    },
  },
});

// Initialize Swiper for the deals of the day section
const dealsSwiper = new Swiper('.deals__swiper', {
  slidesPerView: 1,               // Default slides visible
  spaceBetween: 20,               // Space between slides
  loop: true,                     // Enable looping of slides
  navigation: {
    nextEl: '.next-button',       // Next button for navigation
    prevEl: '.prev-button',       // Previous button for navigation
  },
  breakpoints: {
    787: {
      slidesPerView: 2,           // 2 slides visible on screens >= 787px
      spaceBetween: 30,           // Space between slides on medium screens
    },
    1280: {
      slidesPerView: 3,           // 3 slides visible on screens >= 1280px
      spaceBetween: 30,           // Space between slides on larger screens
    },
  },
});
window.scrollTo({
  top: targetPosition,
  behavior: 'smooth'
});