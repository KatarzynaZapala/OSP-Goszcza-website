import React, {Component} from "react";
import AlarmNumbers from "./AlarmNumbers";

export default class WidgetsSection extends Component {
    render(){
        return (
            <section className="container widget_section_container">
                <div className="widgets_container">
                    <div className="widget application"></div>
                    <div className="widget alarmNumbers">
                        <AlarmNumbers/>
                    </div>
                    <div className="widget weather"></div>

                </div>
            </section>
        )
    }
}