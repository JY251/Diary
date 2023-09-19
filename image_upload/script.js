function openFileInput() {
  document.getElementById('fileInput').click();
}

function displayImage() {
  const fileInput = document.getElementById('fileInput');
  const imageFrame = document.getElementById('imageFrame');

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      imageFrame.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
}