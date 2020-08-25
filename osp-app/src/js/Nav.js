
import React, {Component} from "react";

export default class Nav extends Component {
    render() {
        return (
        <header className="header">
            <input className="menu_btn" type="checkbox" id="menu_btn"/>
            <label className="menu_icon" htmlFor="menu_btn"><span className="nav_icon"></span></label>
            <ul className="menu">
                <li><a href="https://www.facebook.com/ospgoszcza">Aktualności</a></li>
                <li><a href="#firefighters">Strażacy</a></li>
                <li><a href="#rescuers">Ratownicy</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </header>
        )
    }
}
