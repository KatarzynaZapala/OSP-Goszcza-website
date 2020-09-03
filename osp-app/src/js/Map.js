import React from "react";

/*
Geolocation API witch return geolocation details of user
function Map is used in AlarmNumbers component
 */

function Map() {

//function that gets location data from user and run function showPosition or show error callback when user browser doesn't support geolocation :

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

//function that shows user geolocation data in alert:

    function showPosition(position) {
        alert("Twoja szerokość geograficzna: " + position.coords.latitude +
            "\nTwoja długość geograficzna: " + position.coords.longitude)
    }

    return (
        <button className="geo_btn" onClick={getLocation}>geolokalizacja</button>
    )
}

export default Map;

