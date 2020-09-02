import React, {Component} from "react";

//weather widget from National Institute of Meteorology:
//widget is used in WidgetSection component

export default class WidgetsSection extends Component {
    render() {
        return (
            <iframe frameBorder="0" marginWidth="0" marginHeight="0" width="260" height="220" scrolling="NO"
                    src="http://instytutmeteo.pl/userwidget/sitewidgets?id=9&city_id=771698"/>
        )
    }
}