//===========  Package Summery  Slider  ===========
const categorySlider = new Swiper(".packageSummerySlider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    speed: 2000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1.5 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 4 },
    },

    navigation: {
        nextEl: ".package-summery .next",
        prevEl: ".package-summery .prev",
    }
});


//===========  Review  Slider  ===========
const reviewSlider = new Swiper(".reviewSlider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
    }
});


//===========  common slider 2  ===========
const commonSlider2 = new Swiper(".common-slider-2", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    speed: 2000,

    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
    }
});


//===========  Related slider   ===========
const relatedProductsSlider = new Swiper(".related-products-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    speed: 2000,

    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 4 },
    },
    navigation: {
        nextEl: ".related-products .next",
        prevEl: ".related-products .prev",
    }
});





//===========  Common  Slider 3 ===========
const commonSlider3 = new Swiper(".common-slider-3", {
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
    speed: 2000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 3 },
    }
});


//===========  Expected Budget slider ===========
const expectedSlider = new Swiper(".expeceted-slider-wrap", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    speed: 2000,



    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 3 },
    },
    navigation: {
        nextEl: ".expected-budget .next",
        prevEl: ".expected-budget .prev",
    }
});
//===========  Expected Budget slider ===========
const customerGallerySlider = new Swiper(".customer-gallery-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    speed: 1200,

    breakpoints: {
        320: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 4 },
    },
    navigation: {
        nextEl: ".customer-gallery-sec .next",
        prevEl: ".customer-gallery-sec .prev",
    }
});


//============  light box slider for image popup ============
const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true
});


// const dayItems = document.querySelectorAll('.itinerary-body .day-item');
// const expandAllBtn = document.getElementById('exapnd-all-btn');
// let allExpanded = false;

// // Function to toggle a single day item
// function toggleDayItem(dayItem) {
//     const headBtn = dayItem.querySelector('.day-head');
//     const arrowIcon = dayItem.querySelector('.arrow-icon');
//     const dayContent = dayItem.querySelector('.day-content');

//     // Toggle active class
//     dayItem.classList.toggle('active');

//     // Toggle content visibility
//     dayContent.classList.toggle('open');

//     // Rotate arrow icon
//     arrowIcon.classList.toggle('rotated');
// }

// // Add click event to each day head
// dayItems.forEach(item => {
//     const headBtn = item.querySelector('.day-head');

//     headBtn.addEventListener('click', function () {
//         toggleDayItem(item);
//     });
// });

// // Expand/Collapse all functionality
// expandAllBtn.addEventListener('click', function () {
//     allExpanded = !allExpanded;

//     dayItems.forEach(item => {
//         const arrowIcon = item.querySelector('.arrow-icon');
//         const dayContent = item.querySelector('.day-content');

//         if (allExpanded) {
//             // Expand all
//             item.classList.add('active');
//             dayContent.classList.add('open');
//             arrowIcon.classList.add('rotated');
//         } else {
//             // Collapse all
//             item.classList.remove('active');
//             dayContent.classList.remove('open');
//             arrowIcon.classList.remove('rotated');
//         }
//     });


// });



const dayItems = document.querySelectorAll('.itinerary-body .day-item');
const expandAllBtn = document.getElementById('exapnd-all-btn');
let allExpanded = false;

// Function to toggle a single day item
function toggleDayItem(dayItem) {
    const arrowIcon = dayItem.querySelector('.arrow-icon');

    // Toggle active class on day-item
    dayItem.classList.toggle('active');
}

// Add click event to each day head
dayItems.forEach(item => {
    const headBtn = item.querySelector('.day-head');

    headBtn.addEventListener('click', function () {
        toggleDayItem(item);
    });
});

// Expand/Collapse all functionality
expandAllBtn.addEventListener('click', function () {
    allExpanded = !allExpanded;

    dayItems.forEach(item => {
        const arrowIcon = item.querySelector('.arrow-icon');

        if (allExpanded) {
            // Expand all
            item.classList.add('active');
        } else {
            // Collapse all
            item.classList.remove('active');
        }
    });

    // Update button text
    expandAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
});