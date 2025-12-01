


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
function filterButtonF() {
    const sidebarBtn = document.getElementById("sidebar-filter-btn");
    const sidebar = document.getElementById("filter-sidebar");
    const filterSection = document.getElementById("filter-section");
    console.log(sidebar, sidebarBtn, filterSection)
    if (!sidebarBtn || !sidebar || !filterSection) {
        return
    }

    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        filterSection.classList.toggle("active");
    });

    // outside click then remove sidebar
    // document.addEventListener("click", (e) => {
    //     if (!sidebar.contains(e.target) && !sidebarBtn.contains(e.target)) {
    //         sidebar.classList.remove("active");
    //         filterSection.classList.remove("active");
    //     }
    // });

}

filterButtonF()