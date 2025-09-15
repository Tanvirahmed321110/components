

//===========  Tab Click Slider  ===========
document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
    const tabWrapper = document.querySelector(".tab-wrapper .search-tabs");

    const scrollAmount = 150; // fixed scroll step

    function updateButtons() {
        const maxScrollLeft = tabWrapper.scrollWidth - tabWrapper.clientWidth;

        leftBtn.style.display = tabWrapper.scrollLeft <= 0 ? "none" : "block";
        rightBtn.style.display = tabWrapper.scrollLeft >= maxScrollLeft - 1 ? "none" : "block";
    }

    // Scroll left
    leftBtn.addEventListener("click", () => {
        tabWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Scroll right
    rightBtn.addEventListener("click", () => {
        tabWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Update buttons on scroll
    tabWrapper.addEventListener("scroll", updateButtons);

    // Drag to scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    tabWrapper.addEventListener("mousedown", (e) => {
        isDown = true;
        tabWrapper.classList.add("dragging"); // optional, for cursor style
        startX = e.pageX - tabWrapper.offsetLeft;
        scrollLeft = tabWrapper.scrollLeft;
    });

    tabWrapper.addEventListener("mouseleave", () => {
        isDown = false;
        tabWrapper.classList.remove("dragging");
    });

    tabWrapper.addEventListener("mouseup", () => {
        isDown = false;
        tabWrapper.classList.remove("dragging");
    });

    tabWrapper.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabWrapper.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast multiplier
        tabWrapper.scrollLeft = scrollLeft - walk;
    });

    // Run once on load
    updateButtons();
});



//===========  Hero2  Slider Top  ===========
const slider_top = new Swiper(".slider-top .top", {
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".slider-top .swiper-button-next",
        prevEl: ".slider-top .swiper-button-prev",
    },
    autoplay: {
        delay: 311000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
    },
});


//==========  Hero2 Slider Bottom  ==========
const slider_bottom = new Swiper(".slider-bottom .bottom", {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".slider-bottom .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // <-- pause on hover
    },
    breakpoints: {
        360: { slidesPerView: 2 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
    },
});




//===========  Brand Section Slider Here  ===========
var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 0, // no gap between transitions
        disableOnInteraction: false,
    },
    speed: 5000, // higher = slower, smoother
    freeMode: true, // enables smooth continuous movement
    freeModeMomentum: false, // keeps constant speed
    allowTouchMove: false, // optional: prevent dragging
    breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        576: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 30 }
    }
});



//===========  Trip Plan Slider  Here  ===========
var swiper = new Swiper(".trip-plan-slider", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".trip-plan-slider .next",
        prevEl: ".trip-plan-slider .prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3, // Mobile
        },
        768: {
            slidesPerView: 2.3, // Tablet
        },
        1024: {
            slidesPerView: 3.5, // Desktop (3 full + partial)
        }
    }
});




//===========  Customer Tab Section  ===========
document.querySelectorAll(".my-tab-section").forEach(section => {
    const tabBtns = section.querySelectorAll(".tab-btn");
    const tabContents = section.querySelectorAll(".tab-content");

    if (tabBtns.length && tabContents.length) {
        // Tab switching
        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const tabId = btn.dataset.tab;

                tabBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                tabContents.forEach(content => {
                    content.classList.toggle("active", content.dataset.tab === tabId);
                });
            });
        });
    }

    // Slider controls + mouse scroll
    section.querySelectorAll(".my-slider-wrapper").forEach(wrapper => {
        const slider = wrapper.querySelector(".my-slider");
        const prevBtn = wrapper.querySelector(".prev");
        const nextBtn = wrapper.querySelector(".next");

        if (!slider) return;

        // ===== Prev/Next Buttons =====
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                slider.scrollBy({ left: -slider.clientWidth / 2, behavior: "smooth" });
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                slider.scrollBy({ left: slider.clientWidth / 2, behavior: "smooth" });
            });
        }

        // ===== Mouse Drag Scroll =====
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            e.preventDefault(); // prevent text selection
        });

        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });

        window.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.2; // scroll speed
            slider.scrollLeft = scrollLeft - walk;
        });

        // ===== Keyboard Arrows =====
        slider.setAttribute("tabindex", "0"); // make focusable
        slider.addEventListener("keydown", (e) => {
            const step = 250;
            if (e.key === "ArrowRight") {
                slider.scrollBy({ left: step, behavior: "smooth" });
                e.preventDefault();
            } else if (e.key === "ArrowLeft") {
                slider.scrollBy({ left: -step, behavior: "smooth" });
                e.preventDefault();
            }
        });
    });
});
