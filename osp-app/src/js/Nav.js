import React, {Component} from "react";

//navigation with links to sections:

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav_container">

                <input className="menu__btn" type="checkbox" id="menu__btn"/>
                <label className="menu__icon" htmlFor="menu__btn"><span className="nav__icon"/></label>

                <ul className="menu">
                    <li><a href="https://www.facebook.com/GPRGoszcza" target="_blank">aktualności</a></li>
                    <li><a href="#rescuers">ratownicy</a></li>
                    <li><a href="#firefighters">akcje</a></li>
                    <li><a href="#dogs">psy</a></li>
                    <li><a href="#contact">kontakt</a></li>
                </ul>

            </nav>
        )
    }
}
