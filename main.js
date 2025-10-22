document.addEventListener('DOMContentLoaded', () => {
            //Mobile Menu Logic
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');

            const openMenu = () => mobileMenu.classList.remove('hidden');
            const closeMenu = () => mobileMenu.classList.add('hidden');

            mobileMenuBtn.addEventListener('click', openMenu);
            closeMenuBtn.addEventListener('click', closeMenu);

            //I am exporting closeMenu globally so it can be called from inline HTML (onclick property)
            window.closeMenu = closeMenu;


            //Scroll Animation Logic
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 //Trigger only when 10% of the item is visible, improve this
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        //IF the element is in view, add the 'visible' class
                        entry.target.classList.add('visible');
                        //And stop observing once visible to prevent re-triggering
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            //Selecting all elements with the slide-in-up class and observe them
            const animatedElements = document.querySelectorAll('.slide-in-up');
            animatedElements.forEach(el => {
                observer.observe(el);
            });
        });