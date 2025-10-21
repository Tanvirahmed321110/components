
document.addEventListener("DOMContentLoaded", function () {
    // ========== For Radio Tab =========
    // function loginTypeToggle() {
    //     const phoneRadio = document.getElementById("u-login-phone");
    //     const emailRadio = document.getElementById("u-login-email");
    //     const phoneSection = document.getElementById("for-u-login-phone");
    //     const emailSection = document.getElementById("for-u-login-email");

    //     if (!phoneRadio || !emailRadio || !phoneSection || !emailSection) return;

    //     // ✅ Force phone radio to be checked when page reloads
    //     phoneRadio.checked = true;
    //     emailRadio.checked = false;

    //     function updateLoginView() {
    //         if (phoneRadio.checked) {
    //             phoneSection.style.display = "flex";
    //             emailSection.style.display = "none";
    //         } else {
    //             phoneSection.style.display = "none";
    //             emailSection.style.display = "flex";
    //         }
    //     }

    //     // Run initially
    //     updateLoginView();

    //     // Listen for user interaction
    //     phoneRadio.addEventListener("change", updateLoginView);
    //     emailRadio.addEventListener("change", updateLoginView);
    // }

    // loginTypeToggle();


    // ======== For Radio Tab =========
    setupRadioToggle('radio-wrapper', '.radio-btn', '.radio-content')

    // ============  For Login Register Tab ===========

    const login2Section = document.getElementById('login2');

    if (login2Section) {
        const info_login_btn = login2Section.querySelector('.login-btn')
        const info_register_btn = login2Section.querySelector('.register-btn')
        const login_form = login2Section.querySelector('.login')
        const register_form = login2Section.querySelector('.register')

        if (info_login_btn && info_register_btn && login_form && register_form) {
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
    }

});
