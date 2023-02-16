const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");

const realButton2 = document.getElementById("background-image");
const fakeButton2 = document.getElementById("custom");
const backgroundImage = document.getElementById("background");
var count = 0;

Index = 1;

document.getElementById('out-btn').addEventListener("click", function() {
    document.getElementById("sources").click();
});

document.getElementById('sources').addEventListener('change', () => {
    var index = document.getElementById("sources");
    backgroundImage.setAttribute('src', "covers/" + index.value + ".png");
    document.documentElement.setAttribute('data-theme', index.value)
});

/**
 * Sets the article title to whatever was entered into the 'title' field by the user.
 */
document.getElementById('title').addEventListener('change', () => {
    var title = (document.getElementById("title").value);
    document.getElementById("output1").innerHTML = title;
});

/**
 * Maps the button for selecting an image to include in the generated article.
 */
fakeButton.addEventListener("click", function() {
    realButton.click();
});


/**
 * Handler for selecting an image to include in the generated article.
 */
realButton.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            image.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    }
});

/**
 * Exports the generated article as a PNG file. The user will be prompted with a save window to select a save file target.
 */
function printresult() {
    html2canvas(document.querySelector("#result")).then(canvas => {
        document.body.appendChild(canvas).style.visibility = "hidden";
        Canvas2Image.saveAsPNG(canvas, 600, 600);
    });
}

document.getElementById('invert').addEventListener('click', function() {
    if (count == 0) {
        image.style.filter = "grayscale(100%)";
        document.getElementById("invert").style.color = '#2680EB';
        count = 1;
    }
    else {
        image.style.filter = "none";
        document.getElementById("invert").style.color = 'grey';
        count = 0;
    }
});

document.getElementById('copy').addEventListener('click', function() {
    document.getElementById("title").select();
    document.execCommand('copy',false);
});