// NAV SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // HAMBURGER MENU
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // FORM SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    if (!fname || !email || !service || !message) {
      btn.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
      btn.innerHTML = '⚠️ Please fill in all fields';
      setTimeout(() => {
        btn.style.background = 'linear-gradient(135deg, var(--blue), var(--cyan))';
        btn.innerHTML = '<span>✉️</span> Send Message';
      }, 2500);
      return;
    }
    btn.innerHTML = '⏳ Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
      btn.innerHTML = '✅ Message Sent! I\'ll be in touch soon.';
      document.getElementById('fname').value = '';
      document.getElementById('lname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('service').value = '';
      document.getElementById('message').value = '';
      setTimeout(() => {
        btn.style.background = 'linear-gradient(135deg, var(--blue), var(--cyan))';
        btn.innerHTML = '<span>✉️</span> Send Message';
        btn.disabled = false;
      }, 4000);
    }, 1500);
  }

  // SMOOTH ACTIVE NAV
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navAs.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--white)' : '';
    });
  });