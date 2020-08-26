import React, {Component} from 'react';
import OSPGoszcza from "../images/OSPGoszcza.png";
import GRPLogo from "../images/GRP-logo.jpg";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <section className="header_container">
                    <div className="logo">
                    <img className="logo_osp" src={GRPLogo} alt="Grupa Poszukiwawczo-Ratownicza w Goszczy"/>
                    </div>
                    <div className="header_text">
                        <h1 className="header_title"> Grupa Poszukiwawczo Ratownicza <br/> Ochotniczej Straży Pożarnej <br/>w Goszczy</h1>
                    </div>
                    <div className="logo ">
                        <img className="logo_grp" src={OSPGoszcza} alt="Ochotnicza Straż Pożarna w Goszczy"/>
                    </div>
                </section>
            </header>
        );
    }
}


