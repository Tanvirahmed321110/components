document.addEventListener("DOMContentLoaded", function () {

    // =========  For Sidebar Menu  =========
    function sidebarCloseF() {
        const closeBtn = document.getElementById('close-sidebar-btn')
        const mCloseBtn = document.getElementById('m-sidebar-close-btn')
        const sidebar = document.getElementById('sidebar')


        // For Mobile
        if (mCloseBtn && sidebar) {
            mCloseBtn.addEventListener('click', function () {
                sidebar.classList.toggle('m-active')
            })
        }

        if (closeBtn) {
            const main = document.getElementById('main-content')
            const content = sidebar.querySelector('.content');

            if (!main || !content) {
                return
            }

            if (sidebar || main || content) {
                closeBtn.addEventListener('click', function () {
                    content.classList.toggle('active')
                    sidebar.classList.toggle('active')
                    main.classList.toggle('active')
                })
            }
        }
    }

    sidebarCloseF()



    // check sidebar active class
    function checkSidebarActive() {
        const sidebar = document.querySelector('.sidebar');
        const content = document.querySelector('.content');

        if (!sidebar || !content) return; // safety check

        if (sidebar.classList.contains('active')) {
            content.style.display = 'none';
            content.style.pointerEvents = 'none';
        } else {
            content.style.display = 'flex';
            content.style.pointerEvents = 'auto';
        }
    }


    const bottom = document.querySelector("aside .bottom");
    const content = document.querySelector("aside .content");

    if (bottom && content) {
        bottom.addEventListener("scroll", () => {
            // When user scrolls down inside bottom
            if (bottom.scrollTop > 10) {
                if (1) {
                    content.style.display = "none";
                    content.style.pointerEvents = "none";
                }
            } else {
                // ✅ Show again when scroll is at top
                content.style.display = "flex";
                content.style.pointerEvents = "auto";
                checkSidebarActive()
            }
        });
    }


    // For mobile sidebar
    function mobileSidebarF() {
        const btn = document.getElementById('mobile-menu-btn')
        const sidebar = document.querySelector('.sidebar');

        if (btn && sidebar) {
            btn.addEventListener('click', function () {
                sidebar.classList.add('m-active')
                console.log('click')
            })
        }
    }
    mobileSidebarF()






    //========= For Dropdown2 ==========
    function commonDropdown2(btn, item) {
        const btnImg = btn.closest(".click-dropdown-btn")?.querySelector("img");
        const btnText = btn.closest(".click-dropdown-btn")?.querySelector(".text-content");

        const itemImg = item.querySelector("img")?.src;
        const itemText = item.querySelector(".text")?.textContent.trim();

        if (itemImg && btnImg) btnImg.src = itemImg;
        if (itemText && btnText) {
            btnText.textContent =
                itemText.length > 16 ? itemText.slice(0, 16) + "…" : itemText;
        }
    }











    // For Copy Link Or URL
    function copyLinkF() {
        const copyLink = document.querySelector('.copy-link')

        if (copyLink) {
            const copyBtn = copyLink.querySelector(".copy-btn");
            const baseUrl = copyLink.querySelector(".base-url").textContent.trim(); // tourgull.com/profile/
            const accountPath = copyLink.querySelector(".account-path").textContent.trim(); // Tanvir12

            if (copyBtn) {
                copyBtn.addEventListener("click", () => {
                    const fullUrl = baseUrl + accountPath;

                    navigator.clipboard.writeText(fullUrl).then(() => {
                        // optional: user feedback
                        const tooltip = copyBtn.querySelector(".show-text");
                        tooltip.textContent = "Copied!";
                        setTimeout(() => {
                            tooltip.textContent = "Copy Now";
                        }, 2000);
                    }).catch(err => {
                        console.error("Copy failed", err);
                    });
                });
            }
        }
    }

    // function call here
    copyLinkF()

})