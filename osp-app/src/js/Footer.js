import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

//footer with address detains, links to phone, email facebook and google map:

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer_section_container" id="contact">
                <div className="footer_container">

                    <div className="footer__box footer__name">Grupa Poszukiwawczo Ratownicza <br/> Ochotniczej Straży
                        Pożarnej <br/> w Goszczy
                    </div>

                    {/*address wit link to google map*/}

                    <div className="footer__box footer__address">
                        <a target="_blank"
                           href="https://www.google.pl/maps/place/Ochotnicza+Stra%C5%BC+Po%C5%BCarna+w+Goszczy/@50.1847934,20.0616094,14.75z/data=!4m5!3m4!1s0x47165203e5e493fb:0xa0175a3905e6e394!8m2!3d50.1867338!4d20.070368">
                            <p className="footer__address__detail">Goszcza <br/>ul. Langiewicza 66</p>
                            <button className="map__btn">Sprawdź na mapie</button>
                        </a>
                    </div>

                    {/*active phone number and email: */}

                    <div className="footer__box footer__number">
                        <a className="number__item" href="tel:608439323">tel: 608439323</a>
                        <a className="number__item"
                           href="mailto:gprgoszcza@gmail.com"><br/><br/>gprgoszcza@gmail.com</a>
                    </div>

                    {/*linked fb icon:  */}

                    <div className="footer__box footer__fb">
                        <a className="footer__fb" target="_blank" href="https://www.facebook.com/GPRGoszcza">
                            <FontAwesomeIcon className="fb__icon" icon={faFacebookSquare}/>
                        </a>
                    </div>
                </div>

                {/*copyright details:*/}

                <div className="footer_copyright">
                    <a className="copy__name" href="https://github.com/KatarzynaZapala" target="_blank">&copy;  Katarzyna Danecka-Zapała
                        <FontAwesomeIcon className="gh__icon" icon={faGithub}/>
                    </a>
                </div>

            </footer>
        );
    }
}