// Static Site Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const mobileToggle = document.getElementById('mobile-toggle');
    const contactModal = document.getElementById('contact-modal');
    const contactForm = document.getElementById('contact-form');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Dummy (Simple implementation)
    mobileToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('hidden');
        nav.classList.toggle('flex');
        nav.classList.toggle('flex-col');
        nav.classList.toggle('absolute');
        nav.classList.toggle('top-20');
        nav.classList.toggle('left-0');
        nav.classList.toggle('w-full');
        nav.classList.toggle('bg-white');
        nav.classList.toggle('p-8');
        nav.classList.toggle('border-b');
        nav.classList.toggle('border-slate-200');
    });

    // Modal Global Controls
    window.openModal = () => {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    // Form Handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for reaching out! Tech Dominators will contact you shortly.');
                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();
                closeModal();
            }, 1500);
        });
    }

    // Modal Background Click Close
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeModal();
        }
    });
});
