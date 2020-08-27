import React, {Component} from "react";
import AlarmNumbers from "./AlarmNumbers";
import NameApp from "./NameApp";

export default class WidgetsSection extends Component {
    render(){
        return (
            <section className="container widget_section_container">
                <div className="widgets_container">
                    <div className="widget name_application">
                        <NameApp/>
                    </div>
                    <div className="widget alarm_numbers">
                        <AlarmNumbers/>
                    </div>
                    <div className="widget weather"></div>

                </div>
            </section>
        )
    }
}