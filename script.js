// ===== WAIT FOR DOM TO LOAD =====
document.addEventListener('DOMContentLoaded', function () {

    // ===== 1. Image Gallery Section =====
    const imageSets = {
        1: [
            'https://media.istockphoto.com/id/2165715890/photo/transparent-brain-with-blue-light-on-microchip-on-complex-circuit-board-artificial.webp?a=1&b=1&s=612x612&w=0&k=20&c=49oBZa00YPzebgxit2GdNYKrjrh-88CK5JFPF14-sVc=',
            'https://media.istockphoto.com/id/1307309247/photo/api-application-programming-interface-software-development-tool-business-modern-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=gOpW9JYP-UqXPacJ4lOHSA2fWscq6xwlVXNgw9pVMG4=',
            'https://media.istockphoto.com/id/2158188794/photo/large-language-models-llm-and-ai-artificial-intelligence-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=jYypESfymbmzBCRt6aGDswfJE5Hi2GgF5BUzsQ5td7w=',
            'https://images.unsplash.com/photo-1727434032792-c7ef921ae086?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900'
        ],
        2: [
            'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=60&w=900',
            'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?auto=format&fit=crop&q=60&w=900',
            'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?auto=format&fit=crop&q=60&w=900',
            'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=60&w=900'
        ],
        3: [
            'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?auto=format&fit=crop&q=60&w=900',
            'https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?auto=format&fit=crop&q=60&w=900',
            'https://images.unsplash.com/photo-1727434032792-c7ef921ae086?auto=format&fit=crop&q=60&w=900',
            'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?auto=format&fit=crop&q=60&w=900'
        ]
    };

    // Image Gallery Cards
    const infoCards = document.querySelectorAll('.info-card');
    const imageItems = document.querySelectorAll('.image-item');

    infoCards.forEach(card => {
        card.addEventListener('click', () => {
            infoCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const cardNumber = card.getAttribute('data-card');
            updateImages(cardNumber);
        });
    });

    function updateImages(cardNumber) {
        const images = imageSets[cardNumber];
        if (!images) return;

        imageItems.forEach(item => item.classList.remove('active'));

        imageItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img) {
                item.style.opacity = '0.7';
                setTimeout(() => {
                    img.src = images[index];
                    setTimeout(() => {
                        item.classList.add('active');
                    }, 50);
                }, 200);
            }
        });
    }

    // ===== 2. Contact Form =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const fullName = document.getElementById('fullName');
            const mobile = document.getElementById('mobile');
            const email = document.getElementById('email');
            const callTime = document.getElementById('callTime');
            const successMessage = document.getElementById('successMessage');

            [fullName, mobile, email, callTime].forEach(field => {
                if (field) field.classList.remove('error');
            });

            let isValid = true;

            if (fullName && !fullName.value.trim()) {
                fullName.classList.add('error');
                isValid = false;
            }

            if (mobile && !mobile.value.match(/^[0-9]{10}$/)) {
                mobile.classList.add('error');
                isValid = false;
            }

            if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                email.classList.add('error');
                isValid = false;
            }

            if (callTime && !callTime.value) {
                callTime.classList.add('error');
                isValid = false;
            }

            if (isValid && successMessage) {
                successMessage.style.display = 'block';
                console.log({
                    fullName: fullName ? fullName.value : '',
                    mobile: mobile ? mobile.value : '',
                    email: email ? email.value : '',
                    callTime: callTime ? callTime.value : ''
                });

                setTimeout(() => {
                    this.reset();
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });
    }

    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }

    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('focus', function () {
            if (this.parentElement) {
                this.parentElement.classList.add('focused');
            }
        });
        input.addEventListener('blur', function () {
            if (!this.value && this.parentElement) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // ===== 3. Navigation =====
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // ===== 4. Partner Cards =====
    document.querySelectorAll('.partner-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

    // ===== 5. Contact Button =====
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert('Contact form would open here!');
        });
    }

    // ===== 6. Partner Cards Entrance Animation =====
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 80);
    });

    // ===== 7. Accordion Functionality =====
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                accordionItems.forEach(acc => acc.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });

    // Open first accordion by default
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }

    // ===== 8. Video Functionality =====
    const courseVideo = document.getElementById('courseVideo');
    const videoOverlay = document.getElementById('videoOverlay');

    if (courseVideo && videoOverlay) {
        videoOverlay.addEventListener('click', () => {
            courseVideo.play();
            videoOverlay.classList.add('hidden');
        });

        courseVideo.addEventListener('pause', () => {
            if (!courseVideo.ended) videoOverlay.classList.remove('hidden');
        });

        courseVideo.addEventListener('ended', () => {
            videoOverlay.classList.remove('hidden');
        });

        courseVideo.addEventListener('click', () => {
            if (!courseVideo.paused) courseVideo.pause();
        });
    }

    // ===== 9. Skill Cards =====
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('click', function (event) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = event.clientY - rect.top - size / 2 + 'px';

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            console.log('Selected skill:', this.textContent.trim());
        });
    });

    // ===== 10. Tool Cards =====
    const toolCards = document.querySelectorAll('.tool-card');

    toolCards.forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.95) translateY(-8px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px)';
            }, 150);

            const toolName = this.querySelector('.tool-name');
            if (toolName) {
                console.log(`Selected tool: ${toolName.textContent}`);
            }
        });

        card.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.95)';
        });

        card.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        });

        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        const toolNameEl = card.querySelector('.tool-name');
        if (toolNameEl) {
            card.setAttribute('aria-label', `Learn ${toolNameEl.textContent}`);
        }

        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // ===== 11. Value Cards Slider =====
    const valueCards = document.querySelectorAll('.value-card');

    function showValueSlides() {
        valueCards.forEach((card, index) => {
            if (index < 2) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Define global functions for navigation buttons
    window.nextSlide = function () {
        valueCards.forEach(card => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'slideIn 0.6s ease forwards';
            }, 10);
        });
    };

    window.prevSlide = function () {
        valueCards.forEach(card => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'slideIn 0.6s ease forwards';
            }, 10);
        });
    };

    if (valueCards.length > 0) {
        showValueSlides();
    }

    // ===== 12. Carousel =====
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressFill = document.getElementById('progressFill');

    if (carousel && prevBtn && nextBtn) {
        let currentCarouselSlide = 0;
        const totalSlides = 2;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentCarouselSlide * 100}%)`;

            if (progressFill) {
                const progress = ((currentCarouselSlide + 1) / totalSlides) * 100;
                progressFill.style.width = progress + '%';
            }

            prevBtn.disabled = currentCarouselSlide === 0;
            nextBtn.disabled = currentCarouselSlide === totalSlides - 1;
        }

        nextBtn.addEventListener('click', () => {
            if (currentCarouselSlide < totalSlides - 1) {
                currentCarouselSlide++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentCarouselSlide > 0) {
                currentCarouselSlide--;
                updateCarousel();
            }
        });

        updateCarousel();
    }

    // ===== 13. News/Stat Cards Scroll Animation =====
    const newsStatObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.news-card, .stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        newsStatObserver.observe(card);
    });

    // ===== 14. Certificate Type Selector =====
    window.selectType = function (index) {
        document.querySelectorAll('.radio-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const radioBtn = document.getElementById(`radio-${index}`);
        if (radioBtn) {
            radioBtn.classList.add('active');
        }
    };

    // ===== 15. Certificate Scroll Animation =====
    const certObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.certificate-wrapper, .faculties-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        certObserver.observe(el);
    });

    // ===== 16. Faculty Cards Scroll Animation =====
    const facultyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    });

    document.querySelectorAll(".faculty-card").forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        facultyObserver.observe(card);
    });

    // ===== 17. Faculty Cards Parallax Effect =====
    let parallaxTimeout;
    document.addEventListener("mousemove", (e) => {
        if (window.innerWidth <= 768) return;

        clearTimeout(parallaxTimeout);
        parallaxTimeout = setTimeout(() => {
            const facultyCards = document.querySelectorAll(".faculty-card");
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            facultyCards.forEach((card, index) => {
                const speed = (index + 1) * 2;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        }, 10);
    });

    document.addEventListener("mouseleave", () => {
        document.querySelectorAll(".faculty-card").forEach((card) => {
            card.style.transform = "translateY(0)";
        });
    });

    // ===== 18. Company Cards Scroll Animation =====
    const companyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.company-card').forEach(card => {
        companyObserver.observe(card);
    });

    document.querySelectorAll('.company-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    // ===== 19. Tab Switching =====
    window.switchTab = function (index) {
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        if (tabs[index]) tabs[index].classList.add('active');
        if (contents[index]) contents[index].classList.add('active');
    };

    // ===== 20. Service Cards Scroll Animation =====
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        serviceObserver.observe(card);
    });

    // ===== 21. Career Cards Scroll Animation =====
    const careerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.career-card, .info-card').forEach((card) => {
        if (!card.style.opacity) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
        }
        careerObserver.observe(card);
    });

    // ===== 22. Career Item Hover Animation =====
    document.querySelectorAll('.career-item').forEach((item) => {
        item.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.check-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(360deg)';
                icon.style.transition = 'all 0.4s ease';
            }
        });

        item.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.check-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // ===== 23. Chart Animation =====
    const chartObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const chart = entry.target;
                    chart.style.animation = 'pulse 2s ease-in-out infinite';
                }
            });
        },
        { threshold: 0.5 }
    );

    const chartPlaceholder = document.querySelector('.chart-placeholder');
    if (chartPlaceholder) {
        chartObserver.observe(chartPlaceholder);
    }

    // ===== 24. Audience Cards Observer =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const audienceCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.audience-card').forEach(card => {
        audienceCardObserver.observe(card);
    });

    // ===== 25. Internship Cards Observer =====
    const internshipObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.internship-card').forEach(card => {
        internshipObserver.observe(card);
    });

    // ===== 26. Audience Card Click Interaction =====
    document.querySelectorAll('.audience-card').forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // ===== 27. Button Click Events =====
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const btnText = this.textContent.trim();
            if (btnText.includes('Register')) {
                e.preventDefault();
                alert('Redirecting to registration page...');
            } else if (btnText.includes('View Plan')) {
                e.preventDefault();
                alert('Opening course plan details...');
            }
        });
    });

    // ===== 28. General Card Scroll Animation =====
    const generalCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.card').forEach(card => {
        if (!card.style.opacity) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        generalCardObserver.observe(card);
    });

    // ===== 29. Countdown Timer =====
    function updateCountdown() {
        const targetDate = new Date('2025-10-01T00:00:00').getTime();

        function update() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) return;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        update();
        setInterval(update, 1000);
    }

    updateCountdown();

    // ===== 30. Countdown Floating Animation =====
    const circles = document.querySelectorAll('.countdown-circle');
    circles.forEach((circle, index) => {
        circle.style.animation = `float 3s ease-in-out infinite`;
        circle.style.animationDelay = `${index * 0.2}s`;
    });

    // ===== 31. FAQ Tab Functionality =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const faqItems = document.querySelectorAll('.faq-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.tab;

            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide FAQ items
            faqItems.forEach(item => {
                if (item.dataset.category === category) {
                    item.style.display = 'block';
                    item.classList.remove('active');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ===== 32. FAQ Accordion Functionality =====
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current FAQ item
            if (isActive) {
                faqItem.classList.remove('active');
            } else {
                faqItem.classList.add('active');
            }
        });
    });

    // ===== 33. Toggle Accordion Function for HTML onclick =====
    window.toggleAccordion = function (header) {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion-item').forEach(acc => {
            acc.classList.remove('active');
        });

        // Open clicked accordion if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    };

}); // End of DOMContentLoaded

// ===== 34. Dynamic Keyframe Styles =====
const styleElement = document.createElement('style');
styleElement.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
    }
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
    }
`;
document.head.appendChild(styleElement);