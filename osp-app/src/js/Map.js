import React from "react";

//function getLocation that taking in alert geolocation details of user (geographical width and height):
//function Map is used in AlarmNumbers component

function Map() {

//getting location:

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

//showing location:

    function showPosition(position) {
        alert("Twoja szerokość geograficzna: " + position.coords.latitude +
            "\nTwoja długość geograficzna: " + position.coords.longitude)
    }

    return (
        <button className="geo_btn" onClick={getLocation}>geolokalizacja</button>
    )
}

export default Map;

