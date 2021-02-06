function funcSwitch() {
    var x = document.getElementById("divWideband");
    var y = document.getElementById("divNarrowband");
    var z = document.getElementById("btnSwitch");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.innerHTML = "Switch to narrowband";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.innerHTML = "Switch to wideband";
    }
}


var a = document.getElementById("myAudio");

function playAudio(i, j) {
    var a = document.getElementById("myAudio_" + i.toString() + "_" + j.toString());
    a.play();
}

function pauseAudio() {
    a.pause();
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function selectSpkr(spkr) {
    document.getElementById("btnDrop").innerHTML = spkr;
    document.getElementById("origSource").src = `audio/${spkr}/SA1conv.wav`;
    document.getElementById("origAudio").load();
    if (spkr == "FCJF0") {
        document.getElementById("divReconstSpeech").innerHTML = document.getElementById("divReconstSpeech").innerHTML.replace(/MDPK0/g, "FCJF0");
    } else if (spkr == "MDPK0") {
        document.getElementById("divReconstSpeech").innerHTML = document.getElementById("divReconstSpeech").innerHTML.replace(/FCJF0/g, "MDPK0");
    }
    // console.log(document.getElementById("divReconstSpeech").innerHTML);
}