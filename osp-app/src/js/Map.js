import React from "react";


function Map() {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    function showPosition(position) {
        alert("Twoja szerokość geograficzna: " + position.coords.latitude +
            "\nTwoja długość geograficzna: " + position.coords.longitude)
    }

    return (
        <button className="geo_btn" onClick={getLocation}>geolokalizacja</button>
    )
}

export default Map;

