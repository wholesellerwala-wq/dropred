// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic'
});

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if(loadingScreen) {
      loadingScreen.classList.add('hide');
    }
  }, 2200); // Wait for loader animation to finish
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('active');
  });

  // Close menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('active');
    });
  });
}

// Typing Animation (GSAP)
const typingText = document.getElementById('typing-text');
if (typingText) {
  const text = "India's #1 Gym Management Platform";
  const speed = 0.08;
  
  // Wait for loading screen to disappear
  setTimeout(() => {
    typingText.textContent = "";
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed * 1000);
      } else {
        // Blinking cursor
        gsap.to('.cursor', {opacity: 0, repeat: -1, yoyo: true, duration: 0.5});
      }
    }
    
    typeWriter();
  }, 2400);
}

// Particles.js Initialization for Hero Section
if (document.getElementById('particles-js')) {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#FFD700"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#FFD700",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.3
            }
          }
        }
      },
      "retina_detect": true
    }
  );
}

// Contact Form Override (Redirect to WhatsApp)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Format WhatsApp message
    const waText = `Hello Droptrens Team!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}%0A%0AI'm interested in your services.`;
    
    // Open WhatsApp
    window.open(`https://wa.me/919999999999?text=${waText}`, '_blank');
  });
}
