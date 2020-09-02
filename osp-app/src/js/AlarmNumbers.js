import React, {Component} from "react";
import TelefonAlarmowy1 from "../images/TelefonAlarmowy1.png"
import Map from "./Map";

// box with alarm number and imported geolocation component (Map):
// component is used in WidgetSection

export default class AlarmNumbers extends Component {
    render() {
        return (
            <div className="alarm_num_container">

                <div className="alarm__pict">
                    <a href="tel:112">
                        <img className="phone__pict" src={TelefonAlarmowy1} alt="telefon"/>
                    </a>
                </div>

                <div className="alarm__text">
                    <p>telefony alarmowe <br/> 112 , 988</p>
                </div>

                <Map/>

            </div>
        )
    }
}