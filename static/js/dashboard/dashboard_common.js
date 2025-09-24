// =====  For Sidebar Menu  =====
function sidebarCloseF() {
    const closeBtn = document.getElementById('close-sidebar-btn')
    if (closeBtn) {
        const sidebar = document.getElementById('sidebar')
        const main = document.getElementById('main-content')

        if (sidebar || main) {
            closeBtn.addEventListener('click', function () {
                sidebar.classList.toggle('active')
                main.classList.toggle('active')
            })
        }
    }
}

sidebarCloseF()



const dropdownParents = document.querySelectorAll(".filter-header .click-dropdown-parent");

if (dropdownParents) {
    dropdownParents.forEach(parent => {
        const btn = parent.querySelector(".click-dropdown-btn span:first-child"); // button text span
        const items = parent.querySelectorAll(".click-dropdown .item");

        // Only proceed if items and button exist
        if (items && btn) {
            items.forEach(item => {
                item.addEventListener("click", () => {
                    // Remove active from all items
                    items.forEach(i => i.classList.remove("active"));

                    // Add active to clicked item
                    item.classList.add("active");

                    // remove active class closet dropdown
                    const dropdown = item.closest('.click-dropdown')
                    dropdown.classList.remove('active')

                    // Update button text with max 16 chars + "…"
                    btn.textContent = item.textContent.length > 16
                        ? item.textContent.slice(0, 16) + "…"
                        : item.textContent;
                });
            });
        }
    });
}




copyF('.popular-copons .item .copy-btn', '.popular-copons .item input[type="hidden"]');