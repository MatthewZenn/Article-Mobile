const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");
const backgroundImage = document.getElementById("background");
const sources = document.getElementById("sources");

var count = 0;
var dex = 1;

document.getElementById('out').addEventListener("click", function() {
    if(document.getElementById("tray").style.height == "150px") {
        document.getElementById("tray").style.height = "0px";
        document.getElementById("tray").style.display = "hidden";
        document.getElementById("newl").style.filter = "invert(30%)";
    }
    else {
        document.getElementById("tray").style.height = "150px";
        document.getElementById("tray").style.display = "block";
        document.getElementById("newl").style.filter = "brightness(0) saturate(100%) invert(49%) sepia(72%) saturate(3562%) hue-rotate(242deg) brightness(106%) contrast(101%)";
    }
});

document.getElementById('1').addEventListener('click', function() {
    var index = this.id;
    document.getElementById("background").setAttribute('src', "covers/" + index + ".png");
    document.documentElement.setAttribute('data-theme', index);
});

document.getElementById('2').addEventListener('click', function() {
    var index = this.id;
    document.getElementById("background").setAttribute('src', "covers/" + index + ".png");
    document.documentElement.setAttribute('data-theme', index);
});

document.getElementById('3').addEventListener('click', function() {
    var index = this.id;
    document.getElementById("background").setAttribute('src', "covers/" + index + ".png");
    document.documentElement.setAttribute('data-theme', index);
});

document.getElementById('4').addEventListener('click', function() {
    var index = this.id;
    document.getElementById("background").setAttribute('src', "covers/" + index + ".png");
    document.documentElement.setAttribute('data-theme', index);
});

document.getElementById('5').addEventListener('click', function() {
    var index = this.id;
    document.getElementById("background").setAttribute('src', "covers/" + index + ".png");
    document.documentElement.setAttribute('data-theme', index);
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
        document.getElementById("inverter").style.filter = "brightness(0) saturate(100%) invert(49%) sepia(72%) saturate(3562%) hue-rotate(242deg) brightness(106%) contrast(101%)";
        count = 1;
    }
    else {
        image.style.filter = "none";
        document.getElementById("inverter").style.filter = "invert(30%)";
        count = 0;
    }
});

document.getElementById('copy').addEventListener('click', function() {
    navigator.clipboard.writeText(document.getElementById("title").innerHTML);
});
