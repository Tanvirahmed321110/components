


// sidebar collapes and open
function filterSidebarToggleF() {
    const filterSidebarItems = document.querySelectorAll(".filter-sidebar .filter-item")

    if (filterSidebarItems) {
        filterSidebarItems.forEach(item => {

            const btn = item.querySelector(".filter-item-btn");

            // open / close toggle + rotate SVG already works
            if (btn) {
                btn.addEventListener("click", () => {
                    item.classList.toggle("active");
                });
            }
        });
    }
}

// call
filterSidebarToggleF()




// filter button toggle
// function filterButtonF() {
//     const sidebarBtn = document.getElementById("sidebar-filter-btn");
//     const sidebar = document.getElementById("filter-sidebar");
//     const filterCloseBtn = sidebar.querySelector('.filter-close-btn')
//     const filterSection = document.getElementById("filter-section");

//     console.log(sidebar, sidebarBtn, filterSection)
//     if (!sidebarBtn || !sidebar || !filterSection) {
//         return
//     }

//     sidebarBtn.addEventListener("click", () => {
//         sidebar.classList.toggle("active");
//         filterSection.classList.toggle("active");
//     });

//     filterCloseBtn.addEventListener('click', function () {
//         sidebar.classList.remove('active')
//     })

//     // outside click then remove sidebar
//     document.addEventListener("click", (e) => {
//         if (!sidebar.contains(e.target) && !sidebarBtn.contains(e.target)) {
//             sidebar.classList.remove("active");
//             filterSection.classList.remove("active");
//         }
//     });

// }

// filterButtonF()

// filter button toggle
function filterButtonF() {
    const sidebarBtn = document.getElementById("sidebar-filter-btn");
    const sidebar = document.getElementById("filter-sidebar");
    const filterCloseBtn = sidebar.querySelector('.filter-close-btn');
    const filterSection = document.getElementById("filter-section");
    const overlay = document.getElementById("filter-overlay");

    if (!sidebarBtn || !sidebar || !filterSection || !overlay || !filterCloseBtn) return;

    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        filterSection.classList.add("active");
        overlay.classList.add("active");
    });

    // when click filter close btn for mobile
    filterCloseBtn.addEventListener("click", closeFilter);
    overlay.addEventListener("click", closeFilter);

    //  outside click only for <=768px
    document.addEventListener("click", (e) => {
        if (window.innerWidth > 768) return;

        const clickedInsideSidebar = sidebar.contains(e.target);
        const clickedOnBtn = sidebarBtn.contains(e.target);

        if (!clickedInsideSidebar && !clickedOnBtn) {
            closeFilter();
        }
    });


    // close filter
    function closeFilter() {
        sidebar.classList.remove("active");
        filterSection.classList.remove("active");
        overlay.classList.remove("active");
    }
}

filterButtonF();





// price range elements
function priceRange() {
    const slider = document.getElementById("price-slider");
    const minInput = document.getElementById("min-price");
    const maxInput = document.getElementById("max-price");

    // ---- VALIDATION: If any element missing → stop script ----
    if (!slider || !minInput || !maxInput) {
        console.warn("Price range elements not found. Skipping price slider setup.");
        return; // STOP the rest of the script
    }
    // -----------------------------------------------------------

    // Create slider
    noUiSlider.create(slider, {
        start: [50, 400], // default values
        connect: true,
        range: {
            min: 0,
            max: 500
        }
    });

    // Update Input Fields Live
    slider.noUiSlider.on("update", function (values) {
        minInput.value = "$" + Math.round(values[0]);
        maxInput.value = "$" + Math.round(values[1]);
    });

    // When user changes min input
    minInput.addEventListener("change", function () {
        slider.noUiSlider.set([this.value.replace("$", ""), null]);
    });

    // When user changes max input
    maxInput.addEventListener("change", function () {
        slider.noUiSlider.set([null, this.value.replace("$", "")]);
    });
}
priceRange()