

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


//===========  Blogs Slider  ===========
const blogSwiper = new Swiper(".blog-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});


//===========  Recent View Slider  ===========
const recentView = new Swiper(".recently-view-slider", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    navigation: {
        nextEl: ".recently-view-slider .next",
        prevEl: ".recently-view-slider .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.2, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        },
    },
});

//===========  Recommendation Slider  ===========
const recommendationSlider = new Swiper(".recommendation-slider", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    navigation: {
        nextEl: ".recommendation-slider .next",
        prevEl: ".recommendation-slider .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.4, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.2, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        },
    },
});


//===========  Best Deal Slider  ===========
const bestDeal = new Swiper(".best-deal-slider", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    navigation: {
        nextEl: ".best-deal-slider .next",
        prevEl: ".best-deal-slider .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.2, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        },
    },
});

//===========  Map Slider  ===========
const mapview = new Swiper(".map-slider", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    navigation: {
        nextEl: ".map-slider .next",
        prevEl: ".map-slider .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.2, // Mobile
            spaceBetween: 12,
        },
        991: {
            slidesPerView: 2.4, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        },
    },
});


//===========  Testimonial Slider  ===========
const testimonialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});


//===========  Hero2  Slider Top  ===========
const slider_top = new Swiper(".slider-top .top", {
    speed: 1000,
    spaceBetween: 20,
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
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
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
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
    loop: false, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    autoplay: {
        delay: 0, // no gap between transitions
        disableOnInteraction: true,
    },
    speed: 5000, // higher = slower, smoother
    freeMode: true, // enables smooth continuous movement
    freeModeMomentum: true, // keeps constant speed
    allowTouchMove: true, // optional: prevent dragging
    breakpoints: {
        320: { slidesPerView: 3, spaceBetween: 10 },
        576: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 30 }
    }
});



//===========  Offer Slider For Mobile  Here  ===========
var smallBannerSlider = new Swiper('.small-banners', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1500, // slow auto slide
        disableOnInteraction: false
    },
    speed: 1500, // smooth slow animation
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



//==========  For open mobile bottom slider  ===========
function mBottomSidebar() {
    const sidebarOpenBtn = document.getElementById('m-all-menu-btn');
    const sidebar = document.getElementById('m-bottom-sidebar');
    const closeBtn = document.getElementById('m-bottom-close');
    const body = document.body;

    if (!sidebarOpenBtn || !sidebar) {
        console.warn("Button or Sidebar not found!");
        return;
    }

    // Open function
    function openSidebar() {
        sidebar.classList.add("active");
        body.classList.add("active");
    }

    // Close function
    function closeSidebar() {
        sidebar.classList.remove("active");
        body.classList.remove("active");
    }

    // Button click → open
    sidebarOpenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openSidebar();
        body.style.overflow = "hidden";
    });

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closeSidebar();
            body.style.overflow = "unset";
        });
    }

    // Prevent clicks inside the sidebar from closing it
    sidebar.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Click outside → close sidebar
    document.addEventListener("click", () => {
        if (sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });
}

mBottomSidebar();


// Mobile bottom sidebar
function initGridListToggle() {
    // Get elements
    const gridView = document.querySelector('.m-bottom-sidebar .wrapper .grid-view')
    const listView = document.querySelector('.m-bottom-sidebar .wrapper .list-view')
    const gridBtn = document.querySelector('.m-bottom-sidebar .btn-wrap .grid-btn')
    const listBtn = document.querySelector('.m-bottom-sidebar .btn-wrap .list-btn')

    // Guard clause: stop if any element is missing
    if (!gridView || !listView || !gridBtn || !listBtn) return;
    // Function to show grid view
    const showGridView = () => {
        gridView.style.display = 'block';
        listView.style.display = 'none';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    };

    // Function to show list view
    const showListView = () => {
        gridView.style.display = 'none';
        listView.style.display = 'block';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    };

    // Initialize default view
    showGridView();

    // Add event listeners
    gridBtn.addEventListener('click', showGridView);
    listBtn.addEventListener('click', showListView);
}

// Usage
initGridListToggle();
