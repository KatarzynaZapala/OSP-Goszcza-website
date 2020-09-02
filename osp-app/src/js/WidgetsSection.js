import React, {Component} from "react";
import NameApp from "./NameApp";
import AlarmNumbers from "./AlarmNumbers";
import Weather from "./Weather";

// section with boxes for name-app, weather and alarm number wist geolocalisation:

export default class WidgetsSection extends Component {
    render() {
        return (
            <section className="container widget_section_container">
                <div className="widgets_container">

                    <div className="widget name__application" id="content">
                        <NameApp/>
                    </div>

                    <div className="widget alarm__numbers">
                        <AlarmNumbers/>
                    </div>

                    <div className="widget weather__item">
                        <Weather/>
                    </div>

                </div>
            </section>
        )
    }
}