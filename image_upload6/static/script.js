function openFileInput() {
    document.getElementById('fileInput').click();
}

function displayImage() {
    const fileInput = document.getElementById('fileInput');
    const imageElement = document.getElementById('imageElement');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        // reader.onload = the fun to be called when finished reading
        reader.onload = function(e) {
            imageElement.src = e.target.result;
        }

        // initiates the reading `fileInput.files[0]`
        reader.readAsDataURL(fileInput.files[0]);
    }
}