document.addEventListener("DOMContentLoaded", function () {

    // ========================
    // File Upload with "uploaded" class
    // ========================

    function createFileUploader(options) {
        const {
            uploadAreaId,
            fileInputId,
            previewId,
            errorMessageId,
            containerClass = 'rotating-dashed', // parent to add class
            uploadedClass = 'uploaded',
            imageOnly = false
        } = options;

        const uploadArea = document.getElementById(uploadAreaId);
        const fileInput = document.getElementById(fileInputId);
        const preview = document.getElementById(previewId);
        const errorMessage = document.getElementById(errorMessageId);
        const container = document.querySelector(`.${containerClass}`);

        if (!uploadArea || !fileInput) return;

        let onlyImages = imageOnly;

        // Drag & Drop
        uploadArea.addEventListener('dragover', e => {
            e.preventDefault();
            uploadArea.classList.add('hover');
        });
        uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('hover'));
        uploadArea.addEventListener('drop', e => {
            e.preventDefault();
            uploadArea.classList.remove('hover');
            const file = e.dataTransfer.files[0];
            handleFile(file);
        });

        // Click to upload
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            handleFile(file);
        });

        // Dynamic image-only mode
        function setImageOnlyMode(value) {
            onlyImages = !!value;
            resetPreview();
        }

        function resetPreview() {
            if (preview) preview.style.display = 'none';
            if (errorMessage) errorMessage.style.display = 'none';
            if (container) container.classList.remove(uploadedClass);
            fileInput.value = '';
        }

        function handleFile(file) {
            if (!file) return;

            // Check for image-only mode
            if (onlyImages && !file.type.startsWith('image/')) {
                if (errorMessage) errorMessage.style.display = 'block';
                if (preview) preview.style.display = 'none';
                if (container) container.classList.remove(uploadedClass);
                fileInput.value = '';
                return;
            }

            if (errorMessage) errorMessage.style.display = 'none';

            // Show preview if image
            if (file.type.startsWith('image/') && preview) {
                const reader = new FileReader();
                reader.onload = e => {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else if (preview) {
                preview.style.display = 'none';
            }

            // ✅ Add "uploaded" class to container
            if (container) container.classList.add(uploadedClass);

            console.log('Selected file:', file);
        }

        return {
            setImageOnlyMode,
            resetPreview
        };
    }

    // ========================
    // Initialize uploader
    // ========================

    const uploader = createFileUploader({
        uploadAreaId: 'uploadArea',
        fileInputId: 'fileInput',
        previewId: 'preview',
        errorMessageId: 'errorMessage',
        containerClass: 'rotating-dashed', // class to add uploaded
        uploadedClass: 'uploaded',
        imageOnly: false // change to true for images only
    });

})