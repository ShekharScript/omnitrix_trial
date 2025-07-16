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
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });