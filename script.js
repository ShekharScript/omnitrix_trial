 // Slider functionality
        const slides = document.querySelectorAll(".slide")
        var counter = 0;

        slides.forEach(function (value, index) {
            value.style.left = `${index * 100}%`;
        })

        function slideImage() {
            slides.forEach((value) => {
                value.style.transform = `translateX(-${counter * 100}%)`
            })
        }

        function goNext() {
            counter = (counter + 1) % slides.length;
            slideImage();
        }

        let slideInterval = setInterval(goNext, 3000);

        const mainSlider = document.querySelector("main");
        mainSlider.addEventListener("mouseenter", () => {
            clearInterval(slideInterval);
        });

        mainSlider.addEventListener("mouseleave", () => {
            slideInterval = setInterval(goNext, 3000);
        });

// Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger');
        const menuOverlay = document.querySelector('.menu-overlay');
        const menuClose = document.querySelector('.menu-close');
        const menuLinks = document.querySelectorAll('.menu-links a');

        function openMenu() {
            menuOverlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeMenu() {
            menuOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) closeMenu();
        });
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });