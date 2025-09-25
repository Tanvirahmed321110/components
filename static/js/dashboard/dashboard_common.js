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





// initAdsVideoSlider('.ads-video');
document.addEventListener('DOMContentLoaded', () => {
    const adsContainer = document.querySelector('.ads-video');
    const modal = document.getElementById('ads-modal');
    const overlay = document.getElementById('modal-overlay');

    if (!adsContainer || !modal || !overlay) return;

    const adsItems = adsContainer.querySelectorAll('.ads-item');
    if (adsItems.length === 0) return;

    let currentIndex = 0;

    // Buttons
    const btns = {
        prev: adsContainer.querySelector('.prev-btn'),
        next: adsContainer.querySelector('.next-btn'),
        mute: adsContainer.querySelector('.mute-btn'),
        fullscreen: adsContainer.querySelector('.full-screen-btn'),
        modalClose: modal.querySelector('.close-btn'),
        modalPrev: modal.querySelector('.prev-btn'),
        modalNext: modal.querySelector('.next-btn'),
        modalVideoContainer: modal.querySelector('.my-video')
    };

    // Play video safely
    const playVideo = (video) => {
        if (!video) return;
        video.currentTime = 0;
        video.play();
        video.onended = () => show(currentIndex + 1);
    };

    // Show video in sidebar
    function show(index) {
        currentIndex = (index + adsItems.length) % adsItems.length;

        adsItems.forEach((item, i) => {
            const video = item.querySelector('video');
            if (!video) return;
            video.pause();
            item.classList.toggle('active', i === currentIndex);
        });

        const activeVideo = adsItems[currentIndex].querySelector('video');
        playVideo(activeVideo);
    }

    // Toggle mute
    const toggleMute = (video, btn) => {
        if (!video || !btn) return;
        video.muted = !video.muted;
        btn.innerHTML = video.muted ? `<i class="ri-volume-mute-line"></i>` : `<i class="ri-volume-up-line"></i>`;
    };

    // Open modal
    const openModal = () => {
        const video = adsItems[currentIndex].querySelector('video');
        if (!video) return;

        btns.modalVideoContainer.innerHTML = '';
        const modalVideo = video.cloneNode(true);
        modalVideo.controls = true;
        modalVideo.autoplay = true;
        modalVideo.muted = video.muted;

        btns.modalVideoContainer.appendChild(modalVideo);
        modal.classList.add('active');
        overlay.classList.add('active');
        modalVideo.play();
    };

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        btns.modalVideoContainer.innerHTML = '';
    };

    // Event listeners
    btns.next?.addEventListener('click', () => show(currentIndex + 1));
    btns.prev?.addEventListener('click', () => show(currentIndex - 1));
    btns.mute?.addEventListener('click', () => toggleMute(adsItems[currentIndex].querySelector('video'), btns.mute));
    btns.fullscreen?.addEventListener('click', openModal);

    btns.modalClose?.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal); // click on overlay also closes modal
    btns.modalNext?.addEventListener('click', () => { show(currentIndex + 1); openModal(); });
    btns.modalPrev?.addEventListener('click', () => { show(currentIndex - 1); openModal(); });

    // Initialize first video
    show(currentIndex);
});
