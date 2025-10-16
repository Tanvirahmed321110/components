// Common Dropdown 1
function initDropdowns() {
    const allDropdown = document.querySelectorAll('.common-dropdown-1 .dropdown')
    if (allDropdown) {
        allDropdown.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const items = dropdown.querySelectorAll('.item');


            // Toggle dropdown open/close
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    allDropdown.forEach(d => {
                        if (d !== dropdown) d.classList.remove('active');
                    });
                    dropdown.classList.toggle('active');
                });
            }

            if (items) {
                // Select an item
                items.forEach(item => {
                    item.addEventListener('click', () => {
                        const img = item.querySelector('img').src;
                        const text = item.querySelector('div').textContent;

                        toggle.querySelector('img').src = img;
                        toggle.querySelector('span').textContent = text;

                        dropdown.classList.remove('active');

                        // active class check
                        items.forEach(i => i.classList.remove('active'));
                        item.classList.toggle('active')
                    });
                });
            }
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        allDropdown.forEach(d => d.classList.remove('active'));
    });
}

// 🔥 Initialize all dropdowns on page load
initDropdowns();





// Open Modal Function
function openModalF(modalId, btnSelector) {
    const modal = document.getElementById(modalId)
    const overlay = document.querySelector('.modal-overlay');
    const btns = document.querySelectorAll(btnSelector)


    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                if (modal) { modal.classList.add('active') }
                if (overlay) { overlay.classList.add('active') }
            })
        })
    }
}





function makeDragScroll() {
    // Select all matching elements
    const scrollers = document.querySelectorAll('.hide-scroll-wrapper');
    if (!scrollers || scrollers.length === 0) {
        return;
    }

    scrollers.forEach(scroller => {
        let isDown = false;
        let startX;
        let scrollLeft;

        scroller.addEventListener("mousedown", (e) => {
            isDown = true;
            startX = e.pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
            document.body.style.userSelect = "none"; // prevent text selection
        });

        scroller.addEventListener("mouseleave", () => {
            isDown = false;
            document.body.style.userSelect = "";
        });

        scroller.addEventListener("mouseup", () => {
            isDown = false;
            document.body.style.userSelect = "";
        });

        scroller.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scroller.offsetLeft;
            const walk = (x - startX) * 1; // scroll speed
            scroller.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize for all scroll components
makeDragScroll();




// Dropdown Toggle
function dropdownToggleF() {
    const btns = document.querySelectorAll('.click-dropdown-btn');

    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation(); // prevent outside click handler from firing immediately

                const dropdownParent = btn.closest('.click-dropdown-parent');
                const dropdown = dropdownParent.querySelector('.click-dropdown');

                // Close all other dropdowns + buttons first
                document.querySelectorAll('.click-dropdown-parent').forEach(parent => {
                    if (parent !== dropdownParent) {
                        parent.querySelector('.click-dropdown')?.classList.remove('active');
                        parent.querySelector('.click-dropdown-btn')?.classList.remove('active');
                        removeLoginHaveNoActive();
                    }
                });

                // Toggle current one
                btn.classList.toggle('active');
                dropdown?.classList.toggle('active');
            });
        });
    }

    // Click outside to close
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.click-dropdown-parent') || e.target.closest('.login-have-no')) {
            document.querySelectorAll('.click-dropdown-parent').forEach(parent => {
                parent.querySelector('.click-dropdown')?.classList.remove('active');
                parent.querySelector('.click-dropdown-btn')?.classList.remove('active');
            });
            removeLoginHaveNoActive();
        }
    });
}

dropdownToggleF();


// Function to remove active class from .login-have-no button(s)
function removeLoginHaveNoActive() {
    const loginHaveNoBtns = document.querySelectorAll('.login-have-no .click-dropdown-btn');
    if (loginHaveNoBtns.length > 0) {
        loginHaveNoBtns.forEach(btn => {

            // remove all active class
            loginHaveNoBtns.forEach(i => i.classList.remove('active'));

            btn.classList.remove('active');
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                btn.classList.toggle('active')
            })

        });
    }
}
removeLoginHaveNoActive()





// Open and close modal
function closeAndOpenF(closeButtonId, closeModalId, openModalId) {
    const closeButton = document.getElementById(closeButtonId);
    const closeModal = document.getElementById(closeModalId);
    const openModal = document.getElementById(openModalId);

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            closeModal.classList.remove('active');

            openModal.classList.add('active');
        });
    }
}


// close button function
function closeButtonF() {
    document.addEventListener('DOMContentLoaded', () => {
        const closeButtons = document.querySelectorAll('.close-btn');
        const overlay = document.querySelector('.modal-overlay');
        const modals = document.querySelectorAll('.my-modal');

        if (modals) {
            modals.forEach(modal => {
                modal.addEventListener('click', function (e) {
                    // If clicked directly on the modal (not on modal-content)
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        document.querySelector('.modal-overlay')?.classList.remove('active');
                    }
                });
            });
        }

        if (closeButtons) {
            closeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const modal = btn.closest('.my-modal');
                    const notification = btn.closest('.notification');

                    if (modal) {
                        modal.classList.remove('active');
                        overlay?.classList.remove('active'); // only modal close e overlay off
                    }

                    if (notification) {
                        notification.classList.remove('active');
                    }
                });
            });
        }


        // Close when overlay is clicked
        if (overlay) {
            overlay.addEventListener('click', () => {
                document.querySelectorAll('.my-modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                overlay.classList.remove('active');
            });
        }
    });
}

closeButtonF()







// delete function
function deleteF(itemClass, btnsClass) {
    const buttons = document.querySelectorAll(btnsClass)
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const item = btn.closest(itemClass);
            console.log(item)
            if (item) {
                item.remove();
            } else {
                console.warn("No parent item found for this button.");
            }
        });
    });
}

deleteF('.shopping-cart-modal .item', '.shopping-cart-modal .delete-btn')












// funciton active
function activeF(selector) {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(single => {
                single.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}






// For Tab
function tabF() {
    const tabGroups = document.querySelectorAll('.tabs')
    if (tabGroups) {
        tabGroups.forEach(tabGroup => {
            const buttons = tabGroup.querySelectorAll('.tab-btn');
            const contents = tabGroup.querySelectorAll('.tab-content');

            if (buttons) {
                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        // Remove active from all buttons
                        buttons.forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');

                        // Hide all contents
                        contents.forEach(content => content.classList.remove('active'));

                        // Show the target (only if it exists)
                        const targetId = button.getAttribute('data-tab');
                        if (!targetId) return; // return

                        const targetContent = tabGroup.querySelector('#' + targetId);
                        if (targetContent) {
                            targetContent.classList.add('active');
                        } else {
                            console.warn(`⚠️ No tab content found for: #${targetId}`);
                        }
                    });
                });
            }
        });
    }
}
tabF()



// For Nested Tab
function nestedTabF() {
    const tabGroups = document.querySelectorAll('.nested-tab')
    if (tabGroups) {
        tabGroups.forEach(tabGroup => {
            const buttons = tabGroup.querySelectorAll('.tab-btn-nested');
            const contents = tabGroup.querySelectorAll('.tab-content-nested');

            if (buttons) {
                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        // Remove active from all buttons
                        buttons.forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');

                        // Hide all contents
                        contents.forEach(content => content.classList.remove('active'));

                        // Show the target (only if it exists)
                        const targetId = button.getAttribute('data-tab');
                        if (!targetId) return; // return

                        const targetContent = tabGroup.querySelector('#' + targetId);
                        if (targetContent) {
                            targetContent.classList.add('active');
                        } else {
                            console.warn(`⚠️ No tab content found for: #${targetId}`);
                        }
                    });
                });
            }
        });
    }
}

nestedTabF()





// ============  For Copy ===========
function copyF(copyBtns, copyTexts) {
    const btns = document.querySelectorAll(copyBtns);
    const texts = document.querySelectorAll(copyTexts);

    if (btns.length && texts.length) {
        btns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const text = texts[index].value;
                navigator.clipboard.writeText(text).then(() => {
                    const btnText = btn.querySelector(".btn-text");
                    const oldText = btnText.innerText;

                    btnText.innerText = "Copied";
                    setTimeout(() => {
                        btnText.innerText = oldText;
                    }, 2500);
                }).catch(err => {
                    console.error("Failed to copy: ", err);
                });
            });
        });
    }
}




//======== For Faq Toggle =========
function faqToggle() {
    const faqItems = document.querySelectorAll('.faq-item');

    // if no faq items, stop
    if (!faqItems || faqItems.length === 0) return;

    faqItems.forEach(item => {
        const head = item.querySelector('.head');
        const icon = item.querySelector('.icon i');
        const content = item.querySelector('.content');

        // check if required elements exist
        if (!head || !icon || !content) return;

        head.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(f => {
                f.classList.remove('active');
                const fIcon = f.querySelector('.icon i');
                const fContent = f.querySelector('.content');
                if (fIcon) fIcon.className = "ri-add-circle-line";
                if (fContent) fContent.style.maxHeight = null;
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                icon.className = "ri-indeterminate-circle-line"; // minus icon
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

faqToggle();







// ============  For Login 2 ===========
const login2Section = document.getElementById('login2')

if (login2Section) {
    const info_login_btn = login2Section.querySelector('.login-btn')
    const info_register_btn = login2Section.querySelector('.register-btn')
    const login_form = login2Section.querySelector('.login')
    const register_form = login2Section.querySelector('.register')

    info_login_btn.addEventListener('click', function () {
        info_login_btn.parentElement.classList.remove('active')
        info_register_btn.parentElement.classList.add('active')
        register_form.classList.remove('active')
        login_form.classList.add('active')
    })

    info_register_btn.addEventListener('click', function () {
        info_register_btn.parentElement.classList.remove('active')
        info_login_btn.parentElement.classList.add('active')
        register_form.classList.add('active')
        login_form.classList.remove('active')
    })
}




// For Toggle Password
function togglePasswordF() {
    const parents = document.querySelectorAll('.toggle-password')

    if (parents) {
        parents.forEach(item => {
            const input = item.querySelector('input');
            const toggleBtn = item.querySelector('.right-icon');
            const icon = toggleBtn.querySelector('i');

            toggleBtn.addEventListener('click', function () {
                if (input.type === 'password') {
                    input.type = 'text'
                    icon.classList.remove('ri-eye-line');
                    icon.classList.add('ri-eye-off-line');
                }
                else {
                    input.type = 'password'
                    icon.classList.remove('ri-eye-off-line');
                    icon.classList.add('ri-eye-line');
                }
            })
        })
    }
}

togglePasswordF()




// Phone Dropdown
function phoneF() {
    const phoneDropdowns = document.querySelectorAll('.common-dropdown-1.phone');
    if (!phoneDropdowns || phoneDropdowns.length === 0) return;

    phoneDropdowns.forEach(dropdown => {
        const phoneInput = dropdown.querySelector("input[type='tel']");
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle span");
        const dropdownItems = dropdown.querySelectorAll(".dropdown-items .item");
        const searchInput = dropdown.querySelector(".dropdown-search");

        if (!phoneInput || !dropdownToggle || !dropdownItems.length || !searchInput) return;

        // Item click
        dropdownItems.forEach(item => {
            item.addEventListener("click", () => {
                const code = item.dataset.code;
                if (!code) return;

                dropdownToggle.textContent = code;
                phoneInput.focus();
            });
        });

        // Prevent closing when clicking inside search input
        if (searchInput) {
            searchInput.addEventListener("click", (e) => {
                e.stopPropagation(); // stop outside listener
            });

            // Search filter
            searchInput.addEventListener("keyup", () => {
                const filter = searchInput.value.toLowerCase();
                dropdownItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    item.style.display = text.includes(filter) ? "" : "none";
                });
            });
        }
    });
}

phoneF()






// =========================   For Validation Function   =======================
//======  show error message  ======
function showErrorMessage(input, message) {
    if (input && message) {
        const inputControl = input.parentElement;
        const errorTag = inputControl.querySelector('.error-text');

        if (errorTag) {
            inputControl.className = 'my-input-control error';
            errorTag.innerText = message;
        }
    }
}

//======  remove error message  ======
function removeErrorMessage(input) {
    if (input) {
        const inputControl = input.parentElement;
        inputControl.className = 'my-input-control';
    }
}

//=======  Check Required  Fields  =======
function checkRequired(inputs) {
    let isValid = true;
    if (inputs) {
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                showErrorMessage(input, `${input.name || input.id} field is required`);
                isValid = false;
            } else {
                removeErrorMessage(input);
            }
        });
    }
    return isValid;
}

//=======  Phone validation  =======
function isValidBDPhone(phone) {
    if (phone) {
        const bdPhoneRegex = /^(?:\+8801|8801|01)[3-9]\d{8}$/;
        return bdPhoneRegex.test(phone.trim());
    }
    return false;
}

//=======  Email validation  =======
function isValidEmail(emailString) {
    if (emailString) {
        const re = /\S+@\S+\.\S+/;
        return re.test(emailString.trim());
    }
    return false;
}
