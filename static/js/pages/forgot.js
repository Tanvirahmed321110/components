document.addEventListener("DOMContentLoaded", function () {

    // ======== For Radio Tab =========
    setupRadioToggle('forgot-password-wrapper', '.radio-btn', '.radio-content')


    // ======== For OTP =========
    function setupOTP(containerSelector) {
        const otpInputs = document.querySelectorAll(`${containerSelector} input`);

        if (otpInputs.length) {
            otpInputs.forEach((input, index) => {

                // Only allow 1 digit
                input.addEventListener('input', (e) => {
                    let value = e.target.value.replace(/[^0-9]/g, ''); // allow only numbers
                    if (value.length > 1) value = value.charAt(0); // max 1 digit
                    e.target.value = value;

                    // Move to next input if filled
                    if (value.length === 1 && index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                });

                // Move to previous input on backspace
                input.addEventListener('keydown', (e) => {
                    if (e.key === "Backspace" && !input.value && index > 0) {
                        otpInputs[index - 1].focus();
                    }
                });

                // Handle pasting full OTP
                input.addEventListener('paste', (e) => {
                    e.preventDefault();
                    const pasteData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
                    otpInputs.forEach((el, i) => {
                        el.value = pasteData[i] || '';
                    });
                    // Focus last filled input
                    const lastFilledIndex = Math.min(pasteData.length, otpInputs.length) - 1;
                    if (lastFilledIndex >= 0) otpInputs[lastFilledIndex].focus();
                });
            });
        }

        // Optional: get full OTP value
        return () => Array.from(otpInputs).map(input => input.value).join('');
    }

    setupOTP('.otp-box');




    // For Time
    const timeElement = document.querySelector('.otp-wrapper .time');
    let timeLeft = parseInt(timeElement.textContent);

    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timeElement.textContent = "0";
            // You can also add code here to disable the OTP input or show a message
        } else {
            timeLeft--;
            timeElement.textContent = timeLeft;
        }
    }, 1000);

})