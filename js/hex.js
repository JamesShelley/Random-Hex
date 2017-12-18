function getColour() {
    return '#' + Math.random().toString(16).slice(2,8);

}

function setBackground() {
    var bgColour = getColour();
    document.body.style.background = bgColour;
    document.getElementById("hex").innerHTML = "Hex Value: " + bgColour;

}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        setBackground();
    }
}
