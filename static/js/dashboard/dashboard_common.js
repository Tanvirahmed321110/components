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



    //=========  For common dropdwon 2 and Filter head  ===========
    const dropdownParents = document.querySelectorAll(".filter-header .click-dropdown-parent,.click-dropdown-parent.common-dropdwon-2");

    if (dropdownParents) {
        dropdownParents.forEach(parent => {
            const btn = parent.querySelector(".click-dropdown-btn span:first-child,.text-content"); // button text span
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

                        // ✅ Call commonDropdown2 only if parent has class
                        if (parent.classList.contains("common-dropdwon-2")) {
                            commonDropdown2(btn, item);
                        }
                    });
                });
            }
        });
    }


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







    // Video ads
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

        // Play video safely (Used for initial start, navigation, and auto-advance)
        const playVideo = (video, playBtn) => {
            if (!video) return;
            video.currentTime = 0; // Reset time only on a NEW video

            // Ensure the onended handler is correctly set for auto-advance
            video.onended = () => show(currentIndex + 1, true); // <--- Pass true for auto-play

            video.play().catch(error => {
                console.warn('Autoplay prevented:', error);
            });
            if (playBtn) playBtn.innerHTML = `<i class="ri-pause-fill"></i>`;
        };

        // Toggle Play/Pause (Manual user control)
        const togglePlay = (video, btn) => {
            if (!video || !btn) return;
            if (video.paused) {
                video.play().catch(error => {
                    console.warn('Play attempt failed:', error);
                });
                btn.innerHTML = `<i class="ri-pause-fill"></i>`;

                // Re-attach the onended handler when manually playing
                video.onended = () => show(currentIndex + 1, true);
            } else {
                video.pause();
                btn.innerHTML = `<i class="ri-play-fill"></i>`;

                // Remove the onended handler when paused to prevent unwanted advance
                video.onended = null;
            }
        };


        // Show video in sidebar
        // isNavigating: true if called by next/prev/onended, false if called for initialization/setting up
        function show(index, isNavigating = false) { // 👈 Added flag to control auto-play
            const newIndex = (index + adsItems.length) % adsItems.length;

            // Skip reset logic if index hasn't changed AND it's not a navigation/advance call
            if (!isNavigating && newIndex === currentIndex && adsItems[currentIndex].classList.contains('active')) {
                return;
            }

            currentIndex = newIndex;

            // 1. Pause and reset all *other* videos
            adsItems.forEach((item, i) => {
                const video = item.querySelector('video');
                const playBtn = item.querySelector('.play-btn');

                if (video && i !== currentIndex) {
                    video.pause();
                    video.currentTime = 0;
                    video.onended = null; // Remove handler from old video
                }

                item.classList.toggle('active', i === currentIndex);

                // Reset button to play icon for all items (it will be corrected below)
                if (playBtn) playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
            });

            const activeItem = adsItems[currentIndex];
            const activeVideo = activeItem.querySelector('video');
            const activePlayBtn = activeItem.querySelector('.play-btn');

            // 2. ONLY play the video if the function was called for navigation or auto-advance
            if (isNavigating) {
                playVideo(activeVideo, activePlayBtn);
            } else if (activeVideo) {
                // Re-attach the onended handler for the video if it's the active one (necessary for initial load)
                activeVideo.onended = () => show(currentIndex + 1, true);
            }
        }

        // Toggle mute
        const toggleMute = (video, btn) => {
            if (!video || !btn) return;
            video.muted = !video.muted;
            btn.innerHTML = video.muted
                ? `<i class="ri-volume-mute-line"></i>`
                : `<i class="ri-volume-up-line"></i>`;
        };

        // Open modal
        const openModal = () => {
            const video = adsItems[currentIndex].querySelector('video');
            if (!video) return;

            // PAUSE the sidebar video when opening the modal
            video.pause();
            const playBtn = adsItems[currentIndex].querySelector('.play-btn');
            if (playBtn) playBtn.innerHTML = `<i class="ri-play-fill"></i>`;

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
            // Pause and clear modal video content
            const modalVideo = btns.modalVideoContainer.querySelector('video');
            if (modalVideo) modalVideo.pause();

            modal.classList.remove('active');
            overlay.classList.remove('active');
            btns.modalVideoContainer.innerHTML = '';

            // RESTART sidebar video on close
            const sidebarVideo = adsItems[currentIndex].querySelector('video');
            const sidebarPlayBtn = adsItems[currentIndex].querySelector('.play-btn');
            if (sidebarVideo) {
                sidebarVideo.play();
                if (sidebarPlayBtn) sidebarPlayBtn.innerHTML = `<i class="ri-pause-fill"></i>`;
                // Re-attach the onended handler after modal closes
                sidebarVideo.onended = () => show(currentIndex + 1, true);
            }
        };

        // Event listeners
        // Next/Prev buttons now pass 'true' to ensure auto-play on navigation
        btns.next?.addEventListener('click', () => show(currentIndex + 1, true));
        btns.prev?.addEventListener('click', () => show(currentIndex - 1, true));

        btns.mute?.addEventListener('click', () =>
            toggleMute(adsItems[currentIndex].querySelector('video'), btns.mute)
        );
        btns.fullscreen?.addEventListener('click', openModal);

        btns.modalClose?.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        // Modal buttons navigate (which auto-plays the new video) and open the modal
        btns.modalNext?.addEventListener('click', () => {
            show(currentIndex + 1, true);
            openModal();
        });
        btns.modalPrev?.addEventListener('click', () => {
            show(currentIndex - 1, true);
            openModal();
        });

        // Attach play toggle buttons
        adsItems.forEach((item) => {
            const playBtn = item.querySelector('.play-btn');
            const video = item.querySelector('video');
            if (playBtn && video) {
                // This is the manual play/pause button
                playBtn.addEventListener('click', () => togglePlay(video, playBtn));

                // Video 'ended' handler is managed within playVideo/togglePlay functions now.
                // Keeping the button reset logic here, but relying on onended for carousel advance.
                video.addEventListener('ended', () => {
                    playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
                });
            }
        });

        // Initialize first video:
        // 1. Set the initial active class
        show(currentIndex);
        // 2. Explicitly play the first video using the playVideo function
        const initialVideo = adsItems[currentIndex].querySelector('video');
        const initialPlayBtn = adsItems[currentIndex].querySelector('.play-btn');
        playVideo(initialVideo, initialPlayBtn);
    });





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