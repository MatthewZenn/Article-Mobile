const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");
const backgroundImage = document.getElementById("background");

var count = 0;
var dex = 1;

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
document.getElementById('save').addEventListener('click', function() {
    html2canvas(document.querySelector("#result")).then(canvas => {
        document.body.appendChild(canvas).style.visibility = "hidden";
        Canvas2Image.saveAsPNG(canvas, 600, 600);
    });
});

document.getElementById('invert').addEventListener('click', function() {
    if (count == 0) {
        image.style.filter = "grayscale(100%)";
        document.getElementById("inverter").style.filter = "invert(62%) sepia(97%) saturate(5448%) hue-rotate(199deg) brightness(99%) contrast(87%)";
        count = 1;
    }
    else {
        image.style.filter = "none";
        document.getElementById("inverter").style.filter = "invert(50%)";
        count = 0;
    }
});

document.getElementById('copy').addEventListener('click', function() {
    document.getElementById("title").select();
    document.execCommand('copy',false);
});