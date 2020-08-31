import React, {Component} from 'react';

export default class RescueSection extends Component {
    render() {
        return (
            <section className="container rescue_section_container">
                <div className="rescue_container" id="rescuers">
                    <div className="rescue__foto"/>
                    <div className="rescue__box">
                        <h2 className="rescue__title">Na pomoc zaginionym</h2>
                        <p className="rescue__text">Naszą misją jest poszukiwanie osób zaginionych. Działamy jako ochotnicy, ofiarowując swój czas, zaangażowanie, pasję i umiejętności tym, którzy potrzebują naszej pomocy.
                            <br/><br/>GPR OSP Goszcza powstała w 2014 roku, działa w strukturze Ochotniczej Straży Pożarnej i należy do Krajowego Systemu Ratowniczo - Gaśniczego.
                            <br/><br/>Prowadzimy poszukiwania osób zaginionych z wykorzystaniem psów ratowniczych oraz innych metod, oraz udzielamy kwalifikowanej pierwszej pomocy osobom odnalezionym.
                            <br/><br/>Prowadzimy także działania promujące bezpieczeństwo i ideę ratownictwa wśród ludności cywilnej, a szczególnie dzieci.</p>
                    </div>
                </div>
            </section>
        )

    }
}