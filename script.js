document.addEventListener("DOMContentLoaded", function() {

  const navbar = document.querySelector('.navbar-custom');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
  }

  const fadeElements = document.querySelectorAll('.fade-in-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: animate only once
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if(name && email && message) {

        const alertBox = document.getElementById('formSuccess');
        if(alertBox) {
          alertBox.style.display = 'block';
          contactForm.reset();
          
          setTimeout(() => {
            alertBox.style.display = 'none';
          }, 5000);
        }
      } else {

        alert("Please fill in all required fields.");
      }
    });
  }
});
