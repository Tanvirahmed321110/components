
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