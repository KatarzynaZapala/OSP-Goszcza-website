import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer_section_container" id="contact">
                <div className="footer_container">
                    <div className="footer_box footer_name">Grupa Poszukiwawczo Ratownicza <br/> Ochotniczej Straży
                        Pożarnej <br/> w Goszczy
                    </div>
                    <div className="footer_box footer_address">
                        <a target="_blank" href="https://www.google.pl/maps/place/Ochotnicza+Stra%C5%BC+Po%C5%BCarna+w+Goszczy/@50.1847934,20.0616094,14.75z/data=!4m5!3m4!1s0x47165203e5e493fb:0xa0175a3905e6e394!8m2!3d50.1867338!4d20.070368">
                            <p>adres</p>
                            <button>Sprawdź na mapie</button>
                        </a>
                    </div>
                    <div className="footer_box footer_number">
                        <a href="tel:112">telefon</a>
                            <a href="mailto:">email</a>
                    </div>
                    <div className="footer_box footer_fb">
                        <a target="_blank" href="https://www.facebook.com/GPRGoszcza">
                            <FontAwesomeIcon className="prev_arrow" icon={faFacebookSquare}/>
                        </a>
                    </div>
                </div>


            </footer>
    );
    }
    }