const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  
  navLinks.classList.toggle("open");


  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-fill" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

document.addEventListener("click", function (e) {
  if (
    window.innerWidth <= 768 &&
    navLinks.classList.contains("open") &&
    !navLinks.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

const overlay = document.querySelector(".nav-overlay");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");
  overlay.classList.toggle("active", !isOpen);
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__stats", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".program__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".service__btn", {
  ...scrollRevealOption,
  delay: 2500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});


  const slider = document.querySelector('.news-slider');
  const cards = document.querySelectorAll('.news-card');
  const dots = document.querySelectorAll('.dot');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 30; // width + margin
  let visibleCards = getVisibleCards();
let totalSlides = cards.length - visibleCards;

function getVisibleCards() {
  if (window.innerWidth <= 768) return 1;
  else if (window.innerWidth <= 1024) return 2;
  else return 3;
}

  
  // Initialize dots based on number of slides
  function initDots() {
      const dotsContainer = document.querySelector('.news-dots');
      dotsContainer.innerHTML = '';
      
      for (let i = 0; i <= totalSlides; i++) {
          const dot = document.createElement('div');
          dot.className = 'dot' + (i === 0 ? ' active' : '');
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
      }
  }
  
  // Update dots
  function updateDots(index) {
      dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
      });
  }
  
  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateDots(currentIndex);
  }
  
  
  // Next slide
  function nextSlide() {
      if (currentIndex < totalSlides) {
          currentIndex++;
          goToSlide(currentIndex);
      } else {
          currentIndex = 0;
          goToSlide(currentIndex);
      }
  }
  
  // Previous slide
  function prevSlide() {
      if (currentIndex > 0) {
          currentIndex--;
          goToSlide(currentIndex);
      } else {
          currentIndex = totalSlides;
          goToSlide(currentIndex);
      }
  }
  
  // Event listeners
  arrowLeft.addEventListener('click', prevSlide);
  arrowRight.addEventListener('click', nextSlide);
  
  // Handle window resize
  window.addEventListener('resize', function () {
    visibleCards = getVisibleCards();
    totalSlides = cards.length - visibleCards;
    initDots();
    goToSlide(0);
  });
  
  
  // Initialize
  initDots();
  
  // Auto slide (optional)
  // setInterval(nextSlide, 5000);
  if (window.innerWidth > 768) {
    // Keep existing slider functionality
    initDots();
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
  }

  else {
    // Mobile mode — make news section swipeable
    const newsSlider = document.querySelector(".news-slider");
    const newsCards = document.querySelectorAll(".news-card");
    const dotContainer = document.querySelector(".news-dots");
  
    // Optional: Create dots for each card
    dotContainer.innerHTML = "";
    newsCards.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        newsSlider.scrollTo({ left: i * newsSlider.clientWidth, behavior: "smooth" });
      });
      dotContainer.appendChild(dot);
    });
  
    // Update dot on scroll
    newsSlider.addEventListener("scroll", () => {
      const scrollLeft = newsSlider.scrollLeft;
      const width = newsSlider.clientWidth;
      const activeIndex = Math.round(scrollLeft / width);
  
      const dots = dotContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIndex);
      });
    });
  }

  let mobileNewsIndex = 0;
setInterval(() => {
  if (window.innerWidth <= 768) {
    const width = newsSlider.clientWidth;
    mobileNewsIndex = (mobileNewsIndex + 1) % newsCards.length;
    newsSlider.scrollTo({ left: mobileNewsIndex * width, behavior: "smooth" });
  }
}, 8000);

document.addEventListener("DOMContentLoaded", function() {
  const sliderWrapper = document.querySelector('.news-slider-wrapper');
  const slider = document.querySelector('.news-slider');
  const cards = document.querySelectorAll('.news-card');
  const prevBtn = document.querySelector('.arrow-left');
  const nextBtn = document.querySelector('.arrow-right');
  const dotsContainer = document.querySelector('.news-dots');
  
  if (!slider || cards.length === 0) return;

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 16; // Width + margin

  // Create dots
  function createDots() {
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  // Update active dot
  function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateDots(currentIndex);
  }

  // Next slide
  function nextSlide() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to first slide
    }
    goToSlide(currentIndex);
  }

  // Previous slide
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1; // Loop to last slide
    }
    goToSlide(currentIndex);
  }

  // Event listeners for arrows
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});

  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    const difference = touchStartX - touchEndX;

    if (difference > threshold) {
      nextSlide(); // Swipe left
    } else if (difference < -threshold) {
      prevSlide(); // Swipe right
    }
  }

  // Initialize
  createDots();

  // Auto-advance slides (optional)
  let slideInterval = setInterval(nextSlide, 5000);

  // Pause auto-advance on hover/touch
  sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
  sliderWrapper.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
});
  // Program section slider for smartphones
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    const slider = document.querySelector(".program-slider");
    const cards = document.querySelectorAll(".program-slider .program__card");
    const dotsContainer = document.querySelector(".program-slider-dots");
    const nextArrow = document.querySelector(".program-slider-arrow.next-arrow");

    let index = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${index * 100}%)`;
      [...dotsContainer.children].forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function createDots() {
      cards.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          index = i;
          updateSlider();
        });
        dotsContainer.appendChild(dot);
      });
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", () => {
        index = (index + 1) % cards.length;
        updateSlider();
      });
    }

    createDots();
    updateSlider();
  }
});



// Auto slide program cards every 7s
if (window.innerWidth <= 768) {
  setInterval(() => {
    index = (index + 1) % cards.length;
    updateSlider();
  }, 7000);
}

// Add this to main.js
document.querySelectorAll('.news-card').forEach(card => {
  card.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.98)';
    this.style.transition = 'transform 0.2s ease';
  });
  
  card.addEventListener('touchend', function() {
    this.style.transform = 'scale(1)';
  });
  
  // Prevent zooming on double-tap
  card.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) { e.preventDefault(); }
  }, { passive: false });
});