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
        if (!e.target.closest('.click-dropdown-parent')) {
            document.querySelectorAll('.click-dropdown-parent').forEach(parent => {
                parent.querySelector('.click-dropdown')?.classList.remove('active');
                parent.querySelector('.click-dropdown-btn')?.classList.remove('active');
            });
        }
    });
}

dropdownToggleF();





// sidebar close and open function
function sidebarCloseOpenF() {
    const sidebar = document.getElementById('sidebar')
    const sidebarBtn = document.getElementById('sidebar-btn')
    const mainContent = document.getElementById('main-contents')

    if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener('click', function () {
            sidebar.classList.toggle('close')
            if (mainContent) { mainContent.classList.toggle('active') }
        })
    }
}
sidebarCloseOpenF()


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





// function initSingleSelect(wrapperSelector, isMultiple) {
//     const select = document.querySelector(wrapperSelector);
//     if (!select) return;

//     const input = select.querySelector(".multiple-or-single-select-btn");
//     const dropdown = select.querySelector(".dropdown");
//     const items = Array.from(dropdown.querySelectorAll(".item"));
//     const selectedItems = new Set(); // For multiple mode

//     // Toggle dropdown on input click
//     input.addEventListener("click", function (e) {
//         e.stopPropagation();
//         dropdown.classList.add("active");
//         filterItems(""); // Show all
//     });

//     // Filter and update active state when typing
//     input.addEventListener("input", function () {
//         const query = this.value.trim().toLowerCase();
//         filterItems(query);

//         if (isMultiple) {
//             const currentValues = input.value
//                 .split(",")
//                 .map(s => s.trim())
//                 .filter(Boolean);

//             selectedItems.clear();
//             currentValues.forEach(val => selectedItems.add(val));

//             items.forEach(item => {
//                 const text = item.textContent.trim();
//                 if (selectedItems.has(text)) {
//                     item.classList.add("active");
//                 } else {
//                     item.classList.remove("active");
//                 }
//             });
//         } else {
//             // For single select: if input is cleared, remove all active
//             if (input.value.trim() === "") {
//                 items.forEach(i => i.classList.remove("active"));
//             }
//         }
//     });

//     // Handle item selection
//     items.forEach(item => {
//         item.addEventListener("click", function () {
//             const text = this.textContent.trim();

//             if (isMultiple) {
//                 this.classList.toggle("active");

//                 if (this.classList.contains("active")) {
//                     selectedItems.add(text);
//                 } else {
//                     selectedItems.delete(text);
//                 }

//                 input.value = Array.from(selectedItems).join(", ");
//             } else {
//                 items.forEach(i => i.classList.remove("active"));
//                 this.classList.add("active");
//                 input.value = text;
//                 dropdown.classList.remove("active");
//             }
//         });
//     });

//     // Close dropdown on outside click
//     document.addEventListener("click", function (e) {
//         if (!select.contains(e.target)) {
//             dropdown.classList.remove("active");
//         }
//     });

//     // Filter visible items (without affecting dropdown visibility)
//     function filterItems(query) {
//         items.forEach(item => {
//             const match = item.textContent.toLowerCase().includes(query);
//             item.style.display = match ? "block" : "none";
//         });
//     }
// }


// // For single select:
// initSingleSelect('.supervisor-single-select', true);








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












// Tab Function
// function tabF(tabSelector, contentSelector) {

//     document.querySelectorAll(tabSelector).forEach(tab => {
//         tab.addEventListener('click', function () {
//             document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
//             document.querySelectorAll(contentSelector).forEach(tc => tc.classList.remove('active'));

//             this.classList.add('active');
//             document.getElementById(this.dataset.tab).classList.add('active');
//         });
//     });
// }












// document.querySelectorAll('.sidebar-main-menu').forEach(menu => {
//     menu.addEventListener('click', function (e) {
//         e.preventDefault();

//         // Find the dropdown menu next to the clicked link
//         const dropdown = this.nextElementSibling;

//         // Toggle the active class
//         dropdown.classList.toggle('active');

//         // Optionally toggle icon direction
//         const icon = this.querySelector('i');
//         if (icon) {
//             icon.classList.toggle('active');
//         }
//     });
// });









// For Tabs here
// function setupTabs(buttonSelector, contentSelector, tabMap) {
//     const tabButtons = document.querySelectorAll(buttonSelector);
//     const tabContents = document.querySelectorAll(contentSelector);

//     if (tabButtons.length === 0 || tabContents.length === 0) return;

//     tabButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             // Remove active class from all buttons
//             tabButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');

//             // Hide all tab contents
//             tabContents.forEach(content => content.classList.remove('active'));

//             // Get target content id from map
//             const tabName = button.getAttribute('data-tab');
//             const targetContentId = tabMap[tabName];

//             const targetContent = document.getElementById(targetContentId);
//             if (targetContent) {
//                 targetContent.classList.add('active');
//             }
//         });
//     });
// }




// For Tab 2
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



// ========================
// File Upload with "uploaded" class
// ========================

// function createFileUploader(options) {
//     const {
//         uploadAreaId,
//         fileInputId,
//         previewId,
//         errorMessageId,
//         containerClass = 'rotating-dashed', // parent to add class
//         uploadedClass = 'uploaded',
//         imageOnly = false
//     } = options;

//     const uploadArea = document.getElementById(uploadAreaId);
//     const fileInput = document.getElementById(fileInputId);
//     const preview = document.getElementById(previewId);
//     const errorMessage = document.getElementById(errorMessageId);
//     const container = document.querySelector(`.${containerClass}`);

//     if (!uploadArea || !fileInput) return;

//     let onlyImages = imageOnly;

//     // Drag & Drop
//     uploadArea.addEventListener('dragover', e => {
//         e.preventDefault();
//         uploadArea.classList.add('hover');
//     });
//     uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('hover'));
//     uploadArea.addEventListener('drop', e => {
//         e.preventDefault();
//         uploadArea.classList.remove('hover');
//         const file = e.dataTransfer.files[0];
//         handleFile(file);
//     });

//     // Click to upload
//     fileInput.addEventListener('change', () => {
//         const file = fileInput.files[0];
//         handleFile(file);
//     });

//     // Dynamic image-only mode
//     function setImageOnlyMode(value) {
//         onlyImages = !!value;
//         resetPreview();
//     }

//     function resetPreview() {
//         if (preview) preview.style.display = 'none';
//         if (errorMessage) errorMessage.style.display = 'none';
//         if (container) container.classList.remove(uploadedClass);
//         fileInput.value = '';
//     }

//     function handleFile(file) {
//         if (!file) return;

//         // Check for image-only mode
//         if (onlyImages && !file.type.startsWith('image/')) {
//             if (errorMessage) errorMessage.style.display = 'block';
//             if (preview) preview.style.display = 'none';
//             if (container) container.classList.remove(uploadedClass);
//             fileInput.value = '';
//             return;
//         }

//         if (errorMessage) errorMessage.style.display = 'none';

//         // Show preview if image
//         if (file.type.startsWith('image/') && preview) {
//             const reader = new FileReader();
//             reader.onload = e => {
//                 preview.src = e.target.result;
//                 preview.style.display = 'block';
//             };
//             reader.readAsDataURL(file);
//         } else if (preview) {
//             preview.style.display = 'none';
//         }

//         // ✅ Add "uploaded" class to container
//         if (container) container.classList.add(uploadedClass);

//         console.log('Selected file:', file);
//     }

//     return {
//         setImageOnlyMode,
//         resetPreview
//     };
// }

// // ========================
// // Initialize uploader
// // ========================

// const uploader = createFileUploader({
//     uploadAreaId: 'uploadArea',
//     fileInputId: 'fileInput',
//     previewId: 'preview',
//     errorMessageId: 'errorMessage',
//     containerClass: 'rotating-dashed', // class to add uploaded
//     uploadedClass: 'uploaded',
//     imageOnly: false // change to true for images only
// });










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
