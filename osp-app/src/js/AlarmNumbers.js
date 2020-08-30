import React, {Component} from "react";
import TelefonAlarmowy1 from "../images/TelefonAlarmowy1.png"
import Map from "./Map";




export default class AlarmNumbers extends Component {
    render() {
        return (
            <div className="alarm_num_container">
                <div className="alarm_pict">
                    <a href="tel:112">
                    <img className="phone_pict" src={TelefonAlarmowy1} alt="telefon"/>
                    </a>
                </div>
                <div className="alarm_text">
                    <p>telefony alarmowe <br/> 112 , 988</p>


                </div>
                <Map/>


            </div>
        )
    }
}