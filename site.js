// site.js - Custom JavaScript for Culhane Lab Website

document.addEventListener('DOMContentLoaded', function() {
  // Enable smooth scrolling for the entire page
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Enhanced smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Smooth scroll with animation
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // ms
      let start = null;
      
      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      // Easing function for smooth acceleration/deceleration
      function easeInOutCubic(t) {
        return t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      
      requestAnimationFrame(animation);
    });
  });
  
  // Add fade-in animation to elements
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px' // Triggers slightly before element comes into view
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  // Also observe slide-in animations
  const slideLeftElements = document.querySelectorAll('.slide-in-left');
  const slideRightElements = document.querySelectorAll('.slide-in-right');
  
  slideLeftElements.forEach(element => {
    observer.observe(element);
  });
  
  slideRightElements.forEach(element => {
    observer.observe(element);
  });
  
  // Parallax scrolling effect for hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }
  
  // Add sticky navigation behavior
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
});
