document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // 2. Dynamic 'Active' class for navigation links
    const navLinks = document.querySelectorAll('.list a');
    const currentPath = window.location.pathname.split('/').pop();

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // 3. Image Gallery Lightbox (assuming you have a gallery.html)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                // You would need to implement a lightbox functionality here.
                // For example, open a modal with a larger version of the image.
                console.log('Image clicked:', item.querySelector('img').src);
                // A simple example for a modal would be:
                // const modal = document.createElement('div');
                // modal.classList.add('lightbox-modal');
                // modal.innerHTML = `<img src="${item.querySelector('img').src}" alt="Full size image">`;
                // document.body.appendChild(modal);
                // modal.addEventListener('click', () => modal.remove());
            });
        });
    }

    // 4. Contact Form Validation (for contact.html)
    const contactForm = document.querySelector('#contact-form'); // Assuming you add an ID to your form
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            let isValid = true;

            if (name === '') {
                alert('Please enter your name.');
                isValid = false;
            }

            if (email === '' || !validateEmail(email)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            if (message === '') {
                alert('Please enter your message.');
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                // Here you would typically send the form data to a server using fetch()
            }
        });
    }

    // 5. Helper function for email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

});