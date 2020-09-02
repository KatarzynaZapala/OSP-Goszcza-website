import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


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
                            <p className="footer_address_detail">Goszcza <br/>ul. Langiewicza 66</p>
                            <button className="map_btn">Sprawdź na mapie</button>
                        </a>
                    </div>
                    <div className="footer_box footer_number">
                        <a className="number_item" href="tel: 608439323">tel: 608439323</a>
                        <a className="number_item" href="mailto: gprgoszcza@gmail.com"><br/><br/>gprgoszcza@gmail.com</a>
                    </div>
                    <div className="footer_box footer_fb">
                        <a className="footer_fb" target="_blank" href="https://www.facebook.com/GPRGoszcza">
                            <FontAwesomeIcon className="fb_icon" icon={faFacebookSquare}/>
                        </a>
                    </div>

                </div>
                <div className="footer_copyright">
                    <a className="copy_name" href="https://github.com/KatarzynaZapala">&copy;  Katarzyna Danecka-Zapała
                        <FontAwesomeIcon className="gh_icon" icon={faGithub}/>
                    </a> </div>


            </footer>
    );
    }
    }