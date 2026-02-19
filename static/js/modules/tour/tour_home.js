
// =============|| Offer Left Slider ||=============
new Swiper(".leftSwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".Left-offers .next",
        prevEl: ".Left-offers .prev"
    }
});

// =============|| Offer For Mobile Slider ||=============
new Swiper(".m-leftSwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 4300,
        disableOnInteraction: false
    }, pagination: {
        el: ".m-offer-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".Left-offers .next",
        prevEl: ".Left-offers .prev"
    }
});

// =============|| Offer Middle Top Slider ||=============
new Swiper(".slider-middle-top", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".middle-offers .top .next",
        prevEl: ".middle-offers .top .prev"
    }
});


// =============|| Offer Middle Bottom Slider ||=============
new Swiper(".slider-middle-bottom", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".middle-offers .bottom .next",
        prevEl: ".middle-offers .bottom .prev"
    }
});

// =============|| Offer Right Slider ||=============
new Swiper(".right-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".right-offers  .next",
        prevEl: ".right-offers  .prev"
    }
});


//===========  Recent View Slider  ===========
const recentView = new Swiper(".recently-view-slider", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: true, // ❗ Stop infinite sliding
    speed: 800,
    navigation: {
        nextEl: ".recently-view-slider .next",
        prevEl: ".recently-view-slider .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2.05, // Mobile
            spaceBetween: 12,
        },
        480: {
            slidesPerView: 2.05, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.5, // Tablet
            spaceBetween: 16,
        }, 991: {
            slidesPerView: 3, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 20,
        },
        1439: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        }
    },
});



//===========  Trending Tours Slider  ===========
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
            slidesPerView: 2.05, // Mobile
            spaceBetween: 12,
        },
        480: {
            slidesPerView: 2.05, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.5, // Tablet
            spaceBetween: 16,
        },
        991: {
            slidesPerView: 3, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 20,
        },
        1439: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        }

    },
});


//===========  Trending Tours Slider  ===========
const trendingSlider = new Swiper(".trending-tour-slider", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: true, // ❗ Stop infinite sliding
    watchOverflow: true,
    speed: 800,
    navigation: {
        nextEl: ".trending-tour-slider .next",
        prevEl: ".trending-tour-slider .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2.05, // Mobile
            spaceBetween: 12,
        },
        480: {
            slidesPerView: 2.05, // Mobile
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2.5, // Tablet
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3, // Tablet
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 20,
        },
        1439: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 24,
        }
    },
});



// Popular Tour Slider
const popularTourSlider = new Swiper('.popular-tour-slider', {
    slidesPerView: 3.5,  // 3.5 slides visible on desktop
    spaceBetween: 24,     // gap between slides
    grid: {
        rows: 2,          // 2 rows
        fill: 'row'       // fill slides by row
    },
    loop: true,
    navigation: {
        nextEl: '.popular-tour .next',
        prevEl: '.popular-tour .prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            grid: { rows: 1 }
        },
        768: {
            slidesPerView: 3,
            grid: { rows: 2 }
        },
        1024: {
            slidesPerView: 3.5,
            grid: { rows: 2 }
        },
        1440: {
            slidesPerView: 4.2,
            grid: { rows: 2 }
        },

    }
});



//===========  Top Category  Slider  ===========
const categorySlider = new Swiper(".TourCategorySlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1.5 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
    },

    navigation: {
        nextEl: ".TourCategorySlider .next",
        prevEl: ".TourCategorySlider .prev",
    }
});



//===========  Trip Plan Slider  ===========
const tripSlider = new Swiper('.tripSlider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 1500,

    autoplay: {
        delay: 400230,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.tripSlider .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.tripSlider .next',
        prevEl: '.tripSlider .prev',
    },

    breakpoints: {
        992: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        480: { slidesPerView: 1 }
    }
});
