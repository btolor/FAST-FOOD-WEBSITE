$(document).ready(function () {
    $("#drop-menu").hide();
    $('.open-btn').click(function () { 
        $('#drop-menu').toggle(150,'swing');
    });

});
// GEO LOCATOR
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPosition);
}else{
    console.log("Geolocation is blocked o the users browser.");
}

function getPosition(position){
    console.log(position);
    var location = position.coords.latitude + "," + position.coords.longitude;
    console.log("The users coordinates " + location);
}

