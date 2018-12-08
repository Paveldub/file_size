const theImage = document.querySelector('#theImage');
const photoInput = document.querySelector('#photoInput');
const fileReader = new FileReader();

fileReader.addEventListener('load', () => {
    theImage.src = fileReader.result;
});

photoInput.addEventListener('change', e => {
    const [file] = e.target.files;

    if (file) {
        if (file.size > 300 * 1024) {
            alert('File size is too large');
        } else {
            fileReader.readAsDataURL(file);
        }
    }
});
