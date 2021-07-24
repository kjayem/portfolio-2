document.getElementById('search-icon').addEventListener('click', toggleSearchOn);

var isItOn = "no"

function toggleSearchOn() { 
    if (isItOn == "no") {
        document.getElementById('slide').style.bottom = "3px";
        document.getElementById('slide').style.opacity = "1";
        isItOn = "yes";
    } else if (isItOn == "yes") {
        document.getElementById('slide').style.bottom = "20px";
        document.getElementById('slide').style.opacity = "0";
        isItOn = "no";
    }
}



