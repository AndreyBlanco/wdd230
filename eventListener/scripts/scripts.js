//BUTTON EVENT

document.getElementById("directionButton").addEventListener('click', directions);

function directions() {
    if (document.getElementById("directionButton").textContent == "SHOW STEPS") {
        document.getElementById("directionButton").textContent = "HIDE STEPS";
        document.getElementById("thesteps").style.display = "block";
    }
    else {
        document.getElementById("directionButton").textContent = "SHOW STEPS";
        document.getElementById("thesteps").style.display = "none";
    }
}

function showImage(image) {
    document.getElementById(`${image}`).style.display = "block";
}

function hideImage(image) {
    document.getElementById(`${image}`).style.display = "none";
}

function hidebutter() {
    hideImage("imgbutter");
}

function hidesugar() {
    hideImage("imgsugar");
}

function hideeggs() {
    hideImage("imgeggs");
}

function hidevanilla() {
    hideImage("imgvanilla");
}

function hidecocoa() {
    hideImage("imgcocoa");
}

function hideflour() {
    hideImage("imgflour");
}

function hidesalt() {
    hideImage("imgsalt");
}

function hidebaking() {
    hideImage("imgbaking");
}

/*BUTTER EVENTS*/
document.getElementById("butter").addEventListener('change', function() {
    if (this.checked) {
        showImage("imgbutter");
        this.removeEventListener('mouseout', hidebutter);      
    }
    else {
        hideImage("imgbutter");
        this.addEventListener('mouseout', hidebutter);
    }
});

document.getElementById("butter").addEventListener('mouseover', function() {
    showImage("imgbutter");
});

document.getElementById("butter").addEventListener('mouseout', hidebutter);

/*SUGAR EVENTS*/
document.getElementById("sugar").addEventListener('change', function() {
    if (this.checked) {
        showImage("imgsugar");
        this.removeEventListener('mouseout', hidesugar);
    } else {
        hideImage("imgsugar");
        this.addEventListener('mouseout', hidesugar);
    }
});

document.getElementById("sugar").addEventListener('mouseover', function() {
    showImage("imgsugar");
});

document.getElementById("sugar").addEventListener('mouseout', hidesugar);


/*EGG EVENTS*/
document.getElementById("eggs").addEventListener('change', function() {
    if (this.checked) {
        showImage("imgeggs");
        this.removeEventListener('mouseout', hideeggs);
    } else {
        hideImage("imgeggs");
        this.addEventListener('mouseout', hideeggs);
    }
});

document.getElementById("eggs").addEventListener('mouseover', function() {
    showImage("imgeggs");
});

document.getElementById("eggs").addEventListener('mouseout', hideeggs);

/*VANILLA EVENTS*/
document.getElementById("vanilla").addEventListener('change', function() {
    if (this.checked) {
        this.removeEventListener('mouseout', hidevanilla);
        showImage("imgvanilla");
    } else {
        hideImage("imgvanilla");
        this.addEventListener('mouseout', hidevanilla);
    }
});

document.getElementById("vanilla").addEventListener('mouseover', function() {
    showImage("imgvanilla");
});

document.getElementById("vanilla").addEventListener('mouseout', hidevanilla);

/*COCOA EVENTS*/
document.getElementById("cocoa").addEventListener('change', function() {
    if (this.checked) {
        showImage("imgcocoa");
        this.removeEventListener('mouseout', hidecocoa);
    } else {
        hideImage("imgcocoa");
        this.addEventListener('mouseout', hidecocoa);
    }
});

document.getElementById("cocoa").addEventListener('mouseover', function() {
    showImage("imgcocoa");
});

document.getElementById("cocoa").addEventListener('mouseout', hidecocoa);

/*FLOUR EVENTS*/
document.getElementById("flour").addEventListener('change', function() {
    if (this.checked) { 
        showImage("imgflour");
        this.removeEventListener('mouseout', hideflour);
    } else {
        hideImage("imgflour");
        this.addEventListener('mouseout', hideflour);
    }
});

document.getElementById("flour").addEventListener('mouseover', function() {
    showImage("imgflour");
});

document.getElementById("flour").addEventListener('mouseout', hideflour);

/*SALT EVENTS*/
document.getElementById("salt").addEventListener('change', function() {
    if (this.checked) {
        showImage("imgsalt");
        this.removeEventListener('mouseout', hidesalt);
    } else {
        hideImage("imgsalt");
        this.addEventListener('mouseout', hidesalt);
    }
});

document.getElementById("salt").addEventListener('mouseover', function() {
    showImage("imgsalt");
});

document.getElementById("salt").addEventListener('mouseout', hidesalt);

/*BAKING EVENTS*/
document.getElementById("baking").addEventListener('change', function() {
    if (this.checked) {
        showImage("imgbaking");
        this.removeEventListener('mouseout', hidebaking);
    } else {
        hideImage("imgbaking");
        this.addEventListener('mouseout', hidebaking);
    }
});

document.getElementById("baking").addEventListener('mouseover', function() {
    showImage("imgbaking");
});

document.getElementById("baking").addEventListener('mouseout', hidebaking);